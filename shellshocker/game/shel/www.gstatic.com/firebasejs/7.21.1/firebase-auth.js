! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase)
}(this, function(e) {
    "use strict";
    try {
        (function() {
            function t(t) {
                return t && "object" == typeof t && "default" in t ? t : {
                    default: t
                }
            }
            var Wl = t(e);
            (function() {
                var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                };
                var u = function(t) {
                    t = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, t];
                    for (var e = 0; e < t.length; ++e) {
                        var n = t[e];
                        if (n && n.Math == Math) return n
                    }
                    return globalThis
                }(this);

                function c(t) {
                    var e, n, i = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                    return i ? i.call(t) : {
                        next: (e = t, n = 0, function() {
                            return n < e.length ? {
                                done: !1,
                                value: e[n++]
                            } : {
                                done: !0
                            }
                        })
                    }
                }! function(t, e) {
                    if (e) {
                        var n = u;
                        t = t.split(".");
                        for (var i = 0; i < t.length - 1; i++) {
                            var r = t[i];
                            r in n || (n[r] = {}), n = n[r]
                        }(e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                }("Promise", function(t) {
                    function a(t) {
                        this.b = 0, this.c = void 0, this.a = [];
                        var e = this.f();
                        try {
                            t(e.resolve, e.reject)
                        } catch (t) {
                            e.reject(t)
                        }
                    }

                    function e() {
                        this.a = null
                    }

                    function s(e) {
                        return e instanceof a ? e : new a(function(t) {
                            t(e)
                        })
                    }
                    if (t) return t;
                    e.prototype.b = function(t) {
                        var e;
                        null == this.a && (this.a = [], (e = this).c(function() {
                            e.g()
                        })), this.a.push(t)
                    };
                    var n = u.setTimeout;
                    e.prototype.c = function(t) {
                        n(t, 0)
                    }, e.prototype.g = function() {
                        for (; this.a && this.a.length;) {
                            var t = this.a;
                            this.a = [];
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                t[e] = null;
                                try {
                                    n()
                                } catch (t) {
                                    this.f(t)
                                }
                            }
                        }
                        this.a = null
                    }, e.prototype.f = function(t) {
                        this.c(function() {
                            throw t
                        })
                    }, a.prototype.f = function() {
                        function t(e) {
                            return function(t) {
                                i || (i = !0, e.call(n, t))
                            }
                        }
                        var n = this,
                            i = !1;
                        return {
                            resolve: t(this.m),
                            reject: t(this.g)
                        }
                    }, a.prototype.m = function(t) {
                        if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof a) this.s(t);
                        else {
                            t: switch (typeof t) {
                                case "object":
                                    var e = null != t;
                                    break t;
                                case "function":
                                    e = !0;
                                    break t;
                                default:
                                    e = !1
                            }
                            e ? this.u(t) : this.h(t)
                        }
                    }, a.prototype.u = function(t) {
                        var e = void 0;
                        try {
                            e = t.then
                        } catch (t) {
                            return void this.g(t)
                        }
                        "function" == typeof e ? this.w(e, t) : this.h(t)
                    }, a.prototype.g = function(t) {
                        this.i(2, t)
                    }, a.prototype.h = function(t) {
                        this.i(1, t)
                    }, a.prototype.i = function(t, e) {
                        if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t, this.c = e, this.l()
                    }, a.prototype.l = function() {
                        if (null != this.a) {
                            for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                            this.a = null
                        }
                    };
                    var r = new e;
                    return a.prototype.s = function(t) {
                        var e = this.f();
                        t.Oa(e.resolve, e.reject)
                    }, a.prototype.w = function(t, e) {
                        var n = this.f();
                        try {
                            t.call(e, n.resolve, n.reject)
                        } catch (t) {
                            n.reject(t)
                        }
                    }, a.prototype.then = function(t, e) {
                        function n(e, t) {
                            return "function" == typeof e ? function(t) {
                                try {
                                    i(e(t))
                                } catch (t) {
                                    r(t)
                                }
                            } : t
                        }
                        var i, r, o = new a(function(t, e) {
                            i = t, r = e
                        });
                        return this.Oa(n(t, i), n(e, r)), o
                    }, a.prototype.catch = function(t) {
                        return this.then(void 0, t)
                    }, a.prototype.Oa = function(t, e) {
                        function n() {
                            switch (i.b) {
                                case 1:
                                    t(i.c);
                                    break;
                                case 2:
                                    e(i.c);
                                    break;
                                default:
                                    throw Error("Unexpected state: " + i.b)
                            }
                        }
                        var i = this;
                        null == this.a ? r.b(n) : this.a.push(n)
                    }, a.resolve = s, a.reject = function(n) {
                        return new a(function(t, e) {
                            e(n)
                        })
                    }, a.race = function(r) {
                        return new a(function(t, e) {
                            for (var n = c(r), i = n.next(); !i.done; i = n.next()) s(i.value).Oa(t, e)
                        })
                    }, a.all = function(t) {
                        var e = c(t),
                            o = e.next();
                        return o.done ? s([]) : new a(function(n, t) {
                            for (var i = [], r = 0; i.push(void 0), r++, s(o.value).Oa(function(e) {
                                    return function(t) {
                                        i[e] = t, 0 == --r && n(i)
                                    }
                                }(i.length - 1), t), !(o = e.next()).done;);
                        })
                    }, a
                });
                var h = h || {},
                    l = this || self,
                    f = /^[\w+/_-]+[=]{0,2}$/,
                    d = null;

                function a() {}

                function n(t) {
                    var e = typeof t;
                    if ("object" == e) {
                        if (!t) return "null";
                        if (t instanceof Array) return "array";
                        if (t instanceof Object) return e;
                        var n = Object.prototype.toString.call(t);
                        if ("[object Window]" == n) return "object";
                        if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                        if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                    } else if ("function" == e && void 0 === t.call) return "object";
                    return e
                }

                function p(t) {
                    var e = n(t);
                    return "array" == e || "object" == e && "number" == typeof t.length
                }

                function v(t) {
                    return "function" == n(t)
                }

                function m(t) {
                    var e = typeof t;
                    return "object" == e && null != t || "function" == e
                }
                var i = "closure_uid_" + (1e9 * Math.random() >>> 0),
                    r = 0;

                function s(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }

                function g(e, n, t) {
                    if (!e) throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var t = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(t, i), e.apply(n, t)
                        }
                    }
                    return function() {
                        return e.apply(n, arguments)
                    }
                }

                function b(t, e, n) {
                    return (b = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? s : g).apply(null, arguments)
                }

                function y(e, t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var t = n.slice();
                        return t.push.apply(t, arguments), e.apply(this, t)
                    }
                }
                var w = Date.now || function() {
                    return +new Date
                };

                function e(t, e) {
                    function n() {}
                    n.prototype = e.prototype, t.Za = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }

                function I(t, e, n) {
                    this.code = A + t, this.message = e || k[t] || "", this.a = n || null
                }

                function T(t) {
                    var e = t && t.code;
                    return e ? new I(e.substring(A.length), t.message, t.serverResponse) : null
                }
                e(I, Error), I.prototype.v = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    return this.a && (t.serverResponse = this.a), t
                }, I.prototype.toJSON = function() {
                    return this.v()
                };
                var E, A = "auth/",
                    k = {
                        "admin-restricted-operation": "This operation is restricted to administrators only.",
                        "argument-error": "",
                        "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                        "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                        "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                        "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                        "cordova-not-ready": "Cordova framework is not ready.",
                        "cors-unsupported": "This browser is not supported.",
                        "credential-already-in-use": "This credential is already associated with a different user account.",
                        "custom-token-mismatch": "The custom token corresponds to a different audience.",
                        "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                        "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                        "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                        "email-already-in-use": "The email address is already in use by another account.",
                        "expired-action-code": "The action code has expired. ",
                        "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                        "internal-error": "An internal error has occurred.",
                        "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                        "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                        "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                        "invalid-auth-event": "An internal error has occurred.",
                        "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                        "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                        "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                        "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                        "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                        "invalid-email": "The email address is badly formatted.",
                        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                        "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                        "invalid-credential": "The supplied auth credential is malformed or has expired.",
                        "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                        "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                        "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                        "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                        "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                        "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                        "wrong-password": "The password is invalid or the user does not have a password.",
                        "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                        "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                        "invalid-provider-id": "The specified provider ID is invalid.",
                        "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                        "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                        "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                        "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                        "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                        "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                        "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                        "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                        "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                        "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                        "missing-continue-uri": "A continue URL must be provided in the request.",
                        "missing-iframe-start": "An internal error has occurred.",
                        "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                        "missing-multi-factor-info": "No second factor identifier is provided.",
                        "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                        "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                        "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                        "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                        "app-deleted": "This instance of FirebaseApp has been deleted.",
                        "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                        "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                        "no-auth-event": "An internal error has occurred.",
                        "no-such-provider": "User was not linked to an account with the given provider.",
                        "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                        "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                        "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                        "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                        "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                        "provider-already-linked": "User can only be linked to one identity for the given provider.",
                        "quota-exceeded": "The project's quota for this operation has been exceeded.",
                        "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                        "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                        "rejected-credential": "The request contains malformed or mismatching credentials.",
                        "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                        "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                        "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                        timeout: "The operation has timed out.",
                        "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                        "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                        "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                        "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                        "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                        "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                        "unverified-email": "The operation requires a verified email.",
                        "user-cancelled": "The user did not grant your application the permissions it requested.",
                        "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "user-disabled": "The user account has been disabled by an administrator.",
                        "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                        "user-signed-out": "",
                        "weak-password": "The password must be 6 characters long or more.",
                        "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                    },
                    S = {
                        hd: {
                            Ra: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                            Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                            Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "b"
                        },
                        pd: {
                            Ra: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                            Xa: "https://securetoken.googleapis.com/v1/token",
                            Ua: "https://identitytoolkit.googleapis.com/v2/",
                            id: "p"
                        },
                        rd: {
                            Ra: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                            Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                            Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "s"
                        },
                        sd: {
                            Ra: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                            Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                            Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "t"
                        }
                    };

                function N(t) {
                    for (var e in S)
                        if (S[e].id === t) return {
                            firebaseEndpoint: (t = S[e]).Ra,
                            secureTokenEndpoint: t.Xa,
                            identityPlatformEndpoint: t.Ua
                        };
                    return null
                }

                function _(t) {
                    if (t) try {
                        return t.$goog_Thenable
                    } catch (t) {
                        return
                    }
                }

                function O(t) {
                    var e;
                    Error.captureStackTrace ? Error.captureStackTrace(this, O) : (e = Error().stack) && (this.stack = e), t && (this.message = String(t))
                }

                function R(t, e) {
                    for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                    O.call(this, n + t[i])
                }

                function C(t, e) {
                    throw new R("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
                }

                function D(t, e) {
                    this.c = t, this.f = e, this.b = 0, this.a = null
                }

                function P(t, e) {
                    t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e)
                }

                function L() {
                    this.b = this.a = null
                }
                E = N("__EID__") ? "__EID__" : void 0, e(O, Error), O.prototype.name = "CustomError", e(R, O), R.prototype.name = "AssertionError", D.prototype.get = function() {
                    var t;
                    return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t
                };
                var M = new D(function() {
                    return new x
                }, function(t) {
                    t.reset()
                });

                function x() {
                    this.next = this.b = this.a = null
                }
                L.prototype.add = function(t, e) {
                    var n = M.get();
                    n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                }, x.prototype.set = function(t, e) {
                    this.a = t, this.b = e, this.next = null
                }, x.prototype.reset = function() {
                    this.next = this.b = this.a = null
                };
                var j = Array.prototype.indexOf ? function(t, e) {
                        return Array.prototype.indexOf.call(t, e, void 0)
                    } : function(t, e) {
                        if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                        for (var n = 0; n < t.length; n++)
                            if (n in t && t[n] === e) return n;
                        return -1
                    },
                    U = Array.prototype.forEach ? function(t, e, n) {
                        Array.prototype.forEach.call(t, e, n)
                    } : function(t, e, n) {
                        for (var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t)
                    };
                var V = Array.prototype.filter ? function(t, e) {
                        return Array.prototype.filter.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n, i = t.length, r = [], o = 0, a = "string" == typeof t ? t.split("") : t, s = 0; s < i; s++) {
                            s in a && (n = a[s], e.call(void 0, n, s, t) && (r[o++] = n))
                        }
                        return r
                    },
                    F = Array.prototype.map ? function(t, e) {
                        return Array.prototype.map.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n = t.length, i = Array(n), r = "string" == typeof t ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t));
                        return i
                    },
                    q = Array.prototype.some ? function(t, e) {
                        return Array.prototype.some.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                            if (r in i && e.call(void 0, i[r], r, t)) return !0;
                        return !1
                    };

                function H(t, e) {
                    return 0 <= j(t, e)
                }

                function K(t, e) {
                    var n;
                    return (n = 0 <= (e = j(t, e))) && Array.prototype.splice.call(t, e, 1), n
                }

                function G(n, i) {
                    ! function(t, e) {
                        for (var n = "string" == typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t)
                    }(n, function(t, e) {
                        i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0
                    })
                }

                function B(t) {
                    return Array.prototype.concat.apply([], arguments)
                }

                function W(t) {
                    var e = t.length;
                    if (0 < e) {
                        for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
                        return n
                    }
                    return []
                }
                var X, J = String.prototype.trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                    },
                    Y = /&/g,
                    z = /</g,
                    $ = />/g,
                    Z = /"/g,
                    Q = /'/g,
                    tt = /\x00/g,
                    et = /[\x00&<>"']/;

                function nt(t, e) {
                    return -1 != t.indexOf(e)
                }

                function it(t, e) {
                    return t < e ? -1 : e < t ? 1 : 0
                }
                t: {
                    var rt = l.navigator;
                    if (rt) {
                        var ot = rt.userAgent;
                        if (ot) {
                            X = ot;
                            break t
                        }
                    }
                    X = ""
                }

                function at(t) {
                    return nt(X, t)
                }

                function st(t, e) {
                    for (var n in t) e.call(void 0, t[n], n, t)
                }

                function ut(t) {
                    for (var e in t) return;
                    return 1
                }

                function ct(t) {
                    var e, n = {};
                    for (e in t) n[e] = t[e];
                    return n
                }
                var ht = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                function lt(t, e) {
                    for (var n, i, r = 1; r < arguments.length; r++) {
                        for (n in i = arguments[r]) t[n] = i[n];
                        for (var o = 0; o < ht.length; o++) n = ht[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                }

                function ft(t, e) {
                    t: {
                        try {
                            var n = t && t.ownerDocument,
                                i = n && (n.defaultView || n.parentWindow);
                            if ((i = i || l).Element && i.Location) {
                                var r = i;
                                break t
                            }
                        } catch (t) {}
                        r = null
                    }
                    if (r && void 0 !== r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
                        if (m(t)) try {
                            var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                        } catch (t) {
                            o = "<object could not be stringified>"
                        } else o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        C("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
                    }
                }

                function dt(t, e) {
                    this.a = t === mt && e || "", this.b = vt
                }

                function pt(t) {
                    return t instanceof dt && t.constructor === dt && t.b === vt ? t.a : (C("expected object of type Const, got '" + t + "'"), "type_error:Const")
                }
                dt.prototype.ra = !0, dt.prototype.qa = function() {
                    return this.a
                }, dt.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                };
                var vt = {},
                    mt = {},
                    gt = new dt(mt, "");

                function bt(t, e) {
                    this.a = t === At && e || "", this.b = Et
                }

                function yt(t) {
                    return t instanceof bt && t.constructor === bt && t.b === Et ? t.a : (C("expected object of type TrustedResourceUrl, got '" + t + "' of type " + n(t)), "type_error:TrustedResourceUrl")
                }

                function wt(t, n) {
                    var i = pt(t);
                    if (!Tt.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i);
                    return t = i.replace(It, function(t, e) {
                        if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n));
                        return (t = n[e]) instanceof dt ? pt(t) : encodeURIComponent(String(t))
                    }), new bt(At, t)
                }
                bt.prototype.ra = !0, bt.prototype.qa = function() {
                    return this.a.toString()
                }, bt.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                };
                var It = /%{(\w+)}/g,
                    Tt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                    Et = {},
                    At = {};

                function kt(t, e) {
                    this.a = t === Rt && e || "", this.b = Ot
                }

                function St(t) {
                    return t instanceof kt && t.constructor === kt && t.b === Ot ? t.a : (C("expected object of type SafeUrl, got '" + t + "' of type " + n(t)), "type_error:SafeUrl")
                }
                kt.prototype.ra = !0, kt.prototype.qa = function() {
                    return this.a.toString()
                }, kt.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                };
                var Nt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                function _t(t) {
                    return t instanceof kt ? t : (t = "object" == typeof t && t.ra ? t.qa() : String(t), Nt.test(t) || (t = "about:invalid#zClosurez"), new kt(Rt, t))
                }
                var Ot = {},
                    Rt = {};

                function Ct() {
                    this.a = "", this.b = Pt
                }

                function Dt(t) {
                    return t instanceof Ct && t.constructor === Ct && t.b === Pt ? t.a : (C("expected object of type SafeHtml, got '" + t + "' of type " + n(t)), "type_error:SafeHtml")
                }
                Ct.prototype.ra = !0, Ct.prototype.qa = function() {
                    return this.a.toString()
                }, Ct.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                };
                var Pt = {};

                function Lt(t) {
                    var e = new Ct;
                    return e.a = t, e
                }
                Lt("<!DOCTYPE html>");
                var Mt = Lt("");

                function xt(t, e) {
                    for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) i += n.shift() + r.shift();
                    return i + n.join("%s")
                }

                function jt(t) {
                    return et.test(t) && (-1 != t.indexOf("&") && (t = t.replace(Y, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(z, "&lt;")), -1 != t.indexOf(">") && (t = t.replace($, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(Z, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(Q, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(tt, "&#0;"))), t
                }

                function Ut(t) {
                    return Ut[" "](t), t
                }
                Lt("<br>"), Ut[" "] = a;
                var Vt, Ft, qt = at("Opera"),
                    Ht = at("Trident") || at("MSIE"),
                    Kt = at("Edge"),
                    Gt = Kt || Ht,
                    Bt = at("Gecko") && !(nt(X.toLowerCase(), "webkit") && !at("Edge")) && !(at("Trident") || at("MSIE")) && !at("Edge"),
                    Wt = nt(X.toLowerCase(), "webkit") && !at("Edge");

                function Xt() {
                    var t = l.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var Jt = "",
                        Yt = (Ft = X, Bt ? /rv:([^\);]+)(\)|;)/.exec(Ft) : Kt ? /Edge\/([\d\.]+)/.exec(Ft) : Ht ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ft) : Wt ? /WebKit\/(\S+)/.exec(Ft) : qt ? /(?:Version)[ \/]?(\S+)/.exec(Ft) : void 0);
                    if (Yt && (Jt = Yt ? Yt[1] : ""), Ht) {
                        var zt = Xt();
                        if (null != zt && zt > parseFloat(Jt)) {
                            Vt = String(zt);
                            break t
                        }
                    }
                    Vt = Jt
                }
                var $t, Zt = {};

                function Qt(s) {
                    return t = s, e = function() {
                        for (var t = 0, e = J(String(Vt)).split("."), n = J(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) {
                            var o = e[r] || "",
                                a = n[r] || "";
                            do {
                                if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                                t = it(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || it(0 == o[2].length, 0 == a[2].length) || it(o[2], a[2]), o = o[3], a = a[3]
                            } while (0 == t)
                        }
                        return 0 <= t
                    }, n = Zt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
                    var t, e, n
                }
                $t = l.document && Ht ? Xt() : void 0;
                try {
                    new self.OffscreenCanvas(0, 0).getContext("2d")
                } catch (t) {}
                var te = !Ht || 9 <= Number($t);

                function ee(t) {
                    var e = document;
                    return "string" == typeof t ? e.getElementById(t) : t
                }

                function ne(n, t) {
                    st(t, function(t, e) {
                        t && "object" == typeof t && t.ra && (t = t.qa()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : oe.hasOwnProperty(e) ? n.setAttribute(oe[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t
                    })
                }
                var ie, re, oe = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };

                function ae(t, e, n) {
                    var i, r = arguments,
                        o = document,
                        a = String(r[0]),
                        s = r[1];
                    return !te && s && (s.name || s.type) && (a = ["<", a], s.name && a.push(' name="', jt(s.name), '"'), s.type && (a.push(' type="', jt(s.type), '"'), lt(i = {}, s), delete i.type, s = i), a.push(">"), a = a.join("")), a = se(o, a), s && ("string" == typeof s ? a.className = s : Array.isArray(s) ? a.className = s.join(" ") : ne(a, s)), 2 < r.length && function(e, n, t) {
                        function i(t) {
                            t && n.appendChild("string" == typeof t ? e.createTextNode(t) : t)
                        }
                        for (var r = 2; r < t.length; r++) {
                            var o = t[r];
                            !p(o) || m(o) && 0 < o.nodeType ? i(o) : U(function(t) {
                                if (t && "number" == typeof t.length) {
                                    if (m(t)) return "function" == typeof t.item || "string" == typeof t.item;
                                    if (v(t)) return "function" == typeof t.item
                                }
                                return !1
                            }(o) ? W(o) : o, i)
                        }
                    }(o, a, r), a
                }

                function se(t, e) {
                    return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e)
                }

                function ue(t) {
                    l.setTimeout(function() {
                        throw t
                    }, 0)
                }

                function ce() {
                    var t = l.MessageChannel;
                    if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !at("Presto") && (t = function() {
                            var t, e, n = se(document, "IFRAME");
                            n.style.display = "none", t = n, e = new bt(At, pt(gt)), ft(t, "HTMLIFrameElement"), t.src = yt(e).toString(), document.documentElement.appendChild(n);
                            var i = n.contentWindow;
                            (n = i.document).open(), n.write(Dt(Mt)), n.close();
                            var r = "callImmediate" + Math.random(),
                                o = "file:" == i.location.protocol ? "*" : i.location.protocol + "//" + i.location.host;
                            n = b(function(t) {
                                "*" != o && t.origin != o || t.data != r || this.port1.onmessage()
                            }, this), i.addEventListener("message", n, !1), this.port1 = {}, this.port2 = {
                                postMessage: function() {
                                    i.postMessage(r, o)
                                }
                            }
                        }), void 0 === t || at("Trident") || at("MSIE")) return function(t) {
                        l.setTimeout(t, 0)
                    };
                    var e = new t,
                        n = {},
                        i = n;
                    return e.port1.onmessage = function() {
                            var t;
                            void 0 !== n.next && (t = (n = n.next).Db, n.Db = null, t())
                        },
                        function(t) {
                            i.next = {
                                Db: t
                            }, i = i.next, e.port2.postMessage(0)
                        }
                }

                function he(t, e) {
                    re || function() {
                        {
                            var t;
                            re = l.Promise && l.Promise.resolve ? (t = l.Promise.resolve(void 0), function() {
                                t.then(de)
                            }) : function() {
                                var t = de;
                                !v(l.setImmediate) || l.Window && l.Window.prototype && !at("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (ie = ie || ce())(t) : l.setImmediate(t)
                            }
                        }
                    }(), le || (re(), le = !0), fe.add(t, e)
                }
                var le = !1,
                    fe = new L;

                function de() {
                    for (var t, e, n; n = e = void 0, n = null, (e = fe).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) {
                        try {
                            t.a.call(t.b)
                        } catch (t) {
                            ue(t)
                        }
                        P(M, t)
                    }
                    le = !1
                }

                function pe(t, e) {
                    if (this.a = ve, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != a) try {
                        var n = this;
                        t.call(e, function(t) {
                            Ne(n, me, t)
                        }, function(t) {
                            if (!(t instanceof Le)) try {
                                if (t instanceof Error) throw t;
                                throw Error("Promise rejected.")
                            } catch (t) {}
                            Ne(n, ge, t)
                        })
                    } catch (t) {
                        Ne(this, ge, t)
                    }
                }
                var ve = 0,
                    me = 2,
                    ge = 3;

                function be() {
                    this.next = this.f = this.b = this.g = this.a = null, this.c = !1
                }
                be.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null, this.c = !1
                };
                var ye = new D(function() {
                    return new be
                }, function(t) {
                    t.reset()
                });

                function we(t, e, n) {
                    var i = ye.get();
                    return i.g = t, i.b = e, i.f = n, i
                }

                function Ie(t) {
                    if (t instanceof pe) return t;
                    var e = new pe(a);
                    return Ne(e, me, t), e
                }

                function Te(n) {
                    return new pe(function(t, e) {
                        e(n)
                    })
                }

                function Ee(t, e, n) {
                    _e(t, e, n, null) || he(y(e, t))
                }

                function Ae(n) {
                    return new pe(function(i) {
                        var r = n.length,
                            o = [];
                        if (r)
                            for (var t = function(t, e, n) {
                                    r--, o[t] = e ? {
                                        Mb: !0,
                                        value: n
                                    } : {
                                        Mb: !1,
                                        reason: n
                                    }, 0 == r && i(o)
                                }, e = 0; e < n.length; e++) Ee(n[e], y(t, e, !0), y(t, e, !1));
                        else i(o)
                    })
                }

                function ke(t, e) {
                    t.b || t.a != me && t.a != ge || Oe(t), t.f ? t.f.next = e : t.b = e, t.f = e
                }

                function Se(t, r, o, a) {
                    var e = we(null, null, null);
                    return e.a = new pe(function(n, i) {
                        e.g = r ? function(t) {
                            try {
                                var e = r.call(a, t);
                                n(e)
                            } catch (t) {
                                i(t)
                            }
                        } : n, e.b = o ? function(t) {
                            try {
                                var e = o.call(a, t);
                                void 0 === e && t instanceof Le ? i(t) : n(e)
                            } catch (t) {
                                i(t)
                            }
                        } : i
                    }), ke(e.a.c = t, e), e.a
                }

                function Ne(t, e, n) {
                    var i, r;
                    t.a == ve && (t === n && (e = ge, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, _e(n, t.Yc, t.Zc, t) || (t.i = n, t.a = e, t.c = null, Oe(t), e != ge || n instanceof Le || (r = n, (i = t).g = !0, he(function() {
                        i.g && Pe.call(null, r)
                    }))))
                }

                function _e(t, e, n, i) {
                    if (t instanceof pe) return ke(t, we(e || a, n || null, i)), 1;
                    if (_(t)) return t.then(e, n, i), 1;
                    if (m(t)) try {
                        var r = t.then;
                        if (v(r)) return function(t, e, n, i, r) {
                            function o(t) {
                                a || (a = !0, i.call(r, t))
                            }
                            var a = !1;
                            try {
                                e.call(t, function(t) {
                                    a || (a = !0, n.call(r, t))
                                }, o)
                            } catch (t) {
                                o(t)
                            }
                        }(t, r, e, n, i), 1
                    } catch (t) {
                        return n.call(i, t), 1
                    }
                }

                function Oe(t) {
                    t.h || (t.h = !0, he(t.ec, t))
                }

                function Re(t) {
                    var e = null;
                    return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e
                }

                function Ce(t, e, n, i) {
                    if (n == ge && e.b && !e.c)
                        for (; t && t.g; t = t.c) t.g = !1;
                    if (e.a) e.a.c = null, De(e, n, i);
                    else try {
                        e.c ? e.g.call(e.f) : De(e, n, i)
                    } catch (t) {
                        Pe.call(null, t)
                    }
                    P(ye, e)
                }

                function De(t, e, n) {
                    e == me ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
                }
                pe.prototype.then = function(t, e, n) {
                    return Se(this, v(t) ? t : null, v(e) ? e : null, n)
                }, pe.prototype.$goog_Thenable = !0, (t = pe.prototype).ma = function(t, e) {
                    return (t = we(t, t, e)).c = !0, ke(this, t), this
                }, t.o = function(t, e) {
                    return Se(this, null, t, e)
                }, t.cancel = function(t) {
                    var e;
                    this.a == ve && (e = new Le(t), he(function() {
                        ! function t(e, n) {
                            if (e.a == ve)
                                if (e.c) {
                                    var i = e.c;
                                    if (i.b) {
                                        for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next) o || (a = s);
                                        o && (i.a == ve && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : Re(i), Ce(i, o, ge, n)))
                                    }
                                    e.c = null
                                } else Ne(e, ge, n)
                        }(this, e)
                    }, this))
                }, t.Yc = function(t) {
                    this.a = ve, Ne(this, me, t)
                }, t.Zc = function(t) {
                    this.a = ve, Ne(this, ge, t)
                }, t.ec = function() {
                    for (var t; t = Re(this);) Ce(this, t, this.a, this.i);
                    this.h = !1
                };
                var Pe = ue;

                function Le(t) {
                    O.call(this, t)
                }

                function Me() {
                    this.wa = this.wa, this.na = this.na
                }
                e(Le, O);
                var xe = 0;

                function je(t) {
                    var e;
                    t.wa || (t.wa = !0, t.Ba(), 0 == xe) || (e = t, Object.prototype.hasOwnProperty.call(e, i) && e[i] || (e[i] = ++r))
                }
                Me.prototype.wa = !(Le.prototype.name = "cancel"), Me.prototype.Ba = function() {
                    if (this.na)
                        for (; this.na.length;) this.na.shift()()
                };
                var Ue = Object.freeze || function(t) {
                        return t
                    },
                    Ve = !Ht || 9 <= Number($t),
                    Fe = Ht && !Qt("9"),
                    qe = function() {
                        if (!l.addEventListener || !Object.defineProperty) return !1;
                        var t = !1,
                            e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                        try {
                            l.addEventListener("test", a, e), l.removeEventListener("test", a, e)
                        } catch (t) {}
                        return t
                    }();

                function He(t, e) {
                    this.type = t, this.b = this.target = e, this.defaultPrevented = !1
                }

                function Ke(t, e) {
                    if (He.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
                        var n = this.type = t.type,
                            i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
                            if (Bt) {
                                t: {
                                    try {
                                        Ut(e.nodeName);
                                        var r = !0;
                                        break t
                                    } catch (t) {}
                                    r = !1
                                }
                                r || (e = null)
                            }
                        } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : Ge[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault()
                    }
                }
                He.prototype.preventDefault = function() {
                    this.defaultPrevented = !0
                }, e(Ke, He);
                var Ge = Ue({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                Ke.prototype.preventDefault = function() {
                    Ke.Za.preventDefault.call(this);
                    var t = this.a;
                    if (t.preventDefault) t.preventDefault();
                    else if (t.returnValue = !1, Fe) try {
                        (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                    } catch (t) {}
                }, Ke.prototype.f = function() {
                    return this.a
                };
                var Be = "closure_listenable_" + (1e6 * Math.random() | 0),
                    We = 0;

                function Xe(t, e, n, i, r) {
                    this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Ta = r, this.key = ++We, this.ua = this.Na = !1
                }

                function Je(t) {
                    t.ua = !0, t.listener = null, t.proxy = null, t.src = null, t.Ta = null
                }

                function Ye(t) {
                    this.src = t, this.a = {}, this.b = 0
                }

                function ze(t, e) {
                    var n = e.type;
                    n in t.a && K(t.a[n], e) && (Je(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                }

                function $e(t, e, n, i) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == i) return r
                    }
                    return -1
                }
                Ye.prototype.add = function(t, e, n, i, r) {
                    var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                    var a = $e(t, e, i, r);
                    return -1 < a ? (e = t[a], n || (e.Na = !1)) : ((e = new Xe(e, this.src, o, !!i, r)).Na = n, t.push(e)), e
                };
                var Ze = "closure_lm_" + (1e6 * Math.random() | 0),
                    Qe = {};

                function tn(t, e, n, i, r) {
                    if (i && i.once) nn(t, e, n, i, r);
                    else if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) tn(t, e[o], n, i, r);
                    else n = fn(n), t && t[Be] ? pn(t, e, n, m(i) ? !!i.capture : !!i, r) : en(t, e, n, !1, i, r)
                }

                function en(t, e, n, i, r, o) {
                    if (!e) throw Error("Invalid event type");
                    var a, s, u = m(r) ? !!r.capture : !!r,
                        c = hn(t);
                    if (c || (t[Ze] = c = new Ye(t)), !(n = c.add(e, n, i, u, o)).proxy)
                        if (a = cn, i = s = Ve ? function(t) {
                                return a.call(s.src, s.listener, t)
                            } : function(t) {
                                if (!(t = a.call(s.src, s.listener, t))) return t
                            }, (n.proxy = i).src = t, i.listener = n, t.addEventListener) qe || (r = u), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent) t.attachEvent(an(e.toString()), i);
                    else {
                        if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                        t.addListener(i)
                    }
                }

                function nn(t, e, n, i, r) {
                    if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) nn(t, e[o], n, i, r);
                    else n = fn(n), t && t[Be] ? vn(t, e, n, m(i) ? !!i.capture : !!i, r) : en(t, e, n, !0, i, r)
                }

                function rn(t, e, n, i, r) {
                    if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) rn(t, e[o], n, i, r);
                    else i = m(i) ? !!i.capture : !!i, n = fn(n), t && t[Be] ? (t = t.u, (e = String(e).toString()) in t.a && (-1 < (n = $e(o = t.a[e], n, i, r)) && (Je(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : (t = t && hn(t)) && (e = t.a[e.toString()], t = -1, e && (t = $e(e, n, i, r)), (n = -1 < t ? e[t] : null) && on(n))
                }

                function on(t) {
                    var e, n, i;
                    "number" != typeof t && t && !t.ua && ((e = t.src) && e[Be] ? ze(e.u, t) : (n = t.type, i = t.proxy, e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(an(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = hn(e)) ? (ze(n, t), 0 == n.b && (n.src = null, e[Ze] = null)) : Je(t)))
                }

                function an(t) {
                    return t in Qe ? Qe[t] : Qe[t] = "on" + t
                }

                function sn(t, e, n, i) {
                    var r = !0;
                    if ((t = hn(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(), t = 0; t < e.length; t++) {
                            var o = e[t];
                            o && o.capture == n && !o.ua && (o = un(o, i), r = r && !1 !== o)
                        }
                    return r
                }

                function un(t, e) {
                    var n = t.listener,
                        i = t.Ta || t.src;
                    return t.Na && on(t), n.call(i, e)
                }

                function cn(t, e) {
                    if (t.ua) return !0;
                    if (Ve) return un(t, new Ke(e, this));
                    if (!e) t: {
                        e = ["window", "event"];
                        for (var n = l, i = 0; i < e.length; i++)
                            if (null == (n = n[e[i]])) {
                                e = null;
                                break t
                            }
                        e = n
                    }
                    if (e = new Ke(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) {
                        t: {
                            var r = !1;
                            if (0 == i.keyCode) try {
                                i.keyCode = -1;
                                break t
                            } catch (t) {
                                r = !0
                            }!r && null != i.returnValue || (i.returnValue = !0)
                        }
                        for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
                        for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                            e.b = i[r];
                            var o = sn(i[r], t, !0, e),
                                n = n && o
                        }
                        for (r = 0; r < i.length; r++) e.b = i[r],
                        o = sn(i[r], t, !1, e),
                        n = n && o
                    }
                    return n
                }

                function hn(t) {
                    return (t = t[Ze]) instanceof Ye ? t : null
                }
                var ln = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                function fn(e) {
                    return v(e) ? e : (e[ln] || (e[ln] = function(t) {
                        return e.handleEvent(t)
                    }), e[ln])
                }

                function dn() {
                    Me.call(this), this.u = new Ye(this), (this.Yb = this).eb = null
                }

                function pn(t, e, n, i, r) {
                    t.u.add(String(e), n, !1, i, r)
                }

                function vn(t, e, n, i, r) {
                    t.u.add(String(e), n, !0, i, r)
                }

                function mn(t, e, n, i) {
                    if (!(e = t.u.a[String(e)])) return !0;
                    e = e.concat();
                    for (var r = !0, o = 0; o < e.length; ++o) {
                        var a, s, u = e[o];
                        u && !u.ua && u.capture == n && (a = u.listener, s = u.Ta || u.src, u.Na && ze(t.u, u), r = !1 !== a.call(s, i) && r)
                    }
                    return r && !i.defaultPrevented
                }

                function gn(t, e, n) {
                    if (v(t)) n && (t = b(t, n));
                    else {
                        if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                        t = b(t.handleEvent, t)
                    }
                    return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
                }

                function bn(n) {
                    var i = null;
                    return new pe(function(t, e) {
                        -1 == (i = gn(function() {
                            t(void 0)
                        }, n)) && e(Error("Failed to schedule timer."))
                    }).o(function(t) {
                        throw l.clearTimeout(i), t
                    })
                }

                function yn(t) {
                    if (t.V && "function" == typeof t.V) return t.V();
                    if ("string" == typeof t) return t.split("");
                    if (p(t)) {
                        for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                        return e
                    }
                    for (i in e = [], n = 0, t) e[n++] = t[i];
                    return e
                }

                function wn(t) {
                    if (t.X && "function" == typeof t.X) return t.X();
                    if (!t.V || "function" != typeof t.V) {
                        if (p(t) || "string" == typeof t) {
                            var e = [];
                            t = t.length;
                            for (var n = 0; n < t; n++) e.push(n);
                            return e
                        }
                        for (var i in e = [], n = 0, t) e[n++] = i;
                        return e
                    }
                }

                function In(t, e) {
                    this.b = {}, this.a = [], this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2) throw Error("Uneven number of arguments");
                        for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1])
                    } else if (t)
                        if (t instanceof In)
                            for (n = t.X(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                        else
                            for (i in t) this.set(i, t[i])
                }

                function Tn(t) {
                    if (t.c != t.a.length) {
                        for (var e = 0, n = 0; e < t.a.length;) {
                            var i = t.a[e];
                            En(t.b, i) && (t.a[n++] = i), e++
                        }
                        t.a.length = n
                    }
                    if (t.c != t.a.length) {
                        for (var r = {}, n = e = 0; e < t.a.length;) En(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
                        t.a.length = n
                    }
                }

                function En(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                e(dn, Me), dn.prototype[Be] = !0, dn.prototype.addEventListener = function(t, e, n, i) {
                    tn(this, t, e, n, i)
                }, dn.prototype.removeEventListener = function(t, e, n, i) {
                    rn(this, t, e, n, i)
                }, dn.prototype.dispatchEvent = function(t) {
                    var e, n = this.eb;
                    if (n)
                        for (e = []; n; n = n.eb) e.push(n);
                    n = this.Yb;
                    var i = t.type || t;
                    if ("string" == typeof t ? t = new He(t, n) : t instanceof He ? t.target = t.target || n : (a = t, lt(t = new He(i, n), a)), a = !0, e)
                        for (var r = e.length - 1; 0 <= r; r--) var o = t.b = e[r],
                            a = mn(o, i, !0, t) && a;
                    if (a = mn(o = t.b = n, i, !0, t) && a, a = mn(o, i, !1, t) && a, e)
                        for (r = 0; r < e.length; r++) a = mn(o = t.b = e[r], i, !1, t) && a;
                    return a
                }, dn.prototype.Ba = function() {
                    if (dn.Za.Ba.call(this), this.u) {
                        var t, e = this.u;
                        for (t in e.a) {
                            for (var n = e.a[t], i = 0; i < n.length; i++) Je(n[i]);
                            delete e.a[t], e.b--
                        }
                    }
                    this.eb = null
                }, (t = In.prototype).V = function() {
                    Tn(this);
                    for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                    return t
                }, t.X = function() {
                    return Tn(this), this.a.concat()
                }, t.clear = function() {
                    this.b = {}, this.c = this.a.length = 0
                }, t.get = function(t, e) {
                    return En(this.b, t) ? this.b[t] : e
                }, t.set = function(t, e) {
                    En(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
                }, t.forEach = function(t, e) {
                    for (var n = this.X(), i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = this.get(r);
                        t.call(e, o, r, this)
                    }
                };
                var An = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                function kn(t, e) {
                    var n;
                    this.b = this.i = this.f = "", this.l = null, this.g = this.c = "", this.h = !1, t instanceof kn ? (this.h = void 0 !== e ? e : t.h, Sn(this, t.f), this.i = t.i, this.b = t.b, Nn(this, t.l), this.c = t.c, _n(this, Xn(t.a)), this.g = t.g) : t && (n = String(t).match(An)) ? (this.h = !!e, Sn(this, n[1] || "", !0), this.i = Pn(n[2] || ""), this.b = Pn(n[3] || "", !0), Nn(this, n[4]), this.c = Pn(n[5] || "", !0), _n(this, n[6] || "", !0), this.g = Pn(n[7] || "")) : (this.h = !!e, this.a = new qn(null, this.h))
                }

                function Sn(t, e, n) {
                    t.f = n ? Pn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
                }

                function Nn(t, e) {
                    if (e) {
                        if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                        t.l = e
                    } else t.l = null
                }

                function _n(t, e, n) {
                    var i, r;
                    e instanceof qn ? (t.a = e, i = t.a, (r = t.h) && !i.f && (Hn(i), i.c = null, i.a.forEach(function(t, e) {
                        var n = e.toLowerCase();
                        e != n && (Gn(this, e), Wn(this, n, t))
                    }, i)), i.f = r) : (n || (e = Ln(e, Vn)), t.a = new qn(e, t.h))
                }

                function On(t, e, n) {
                    t.a.set(e, n)
                }

                function Rn(t, e) {
                    return t.a.get(e)
                }

                function Cn(t) {
                    return t instanceof kn ? new kn(t) : new kn(t, void 0)
                }

                function Dn(t, e) {
                    var n = new kn(null, void 0);
                    return Sn(n, "https"), t && (n.b = t), e && (n.c = e), n
                }

                function Pn(t, e) {
                    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }

                function Ln(t, e, n) {
                    return "string" == typeof t ? (t = encodeURI(t).replace(e, Mn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
                }

                function Mn(t) {
                    return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                kn.prototype.toString = function() {
                    var t = [],
                        e = this.f;
                    e && t.push(Ln(e, xn, !0), ":");
                    var n = this.b;
                    return !n && "file" != e || (t.push("//"), (e = this.i) && t.push(Ln(e, xn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.l) && t.push(":", String(n))), (n = this.c) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(Ln(n, "/" == n.charAt(0) ? Un : jn, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.g) && t.push("#", Ln(n, Fn)), t.join("")
                }, kn.prototype.resolve = function(t) {
                    var e = new kn(this),
                        n = !!t.f;
                    n ? Sn(e, t.f) : n = !!t.i, n ? e.i = t.i : n = !!t.b, n ? e.b = t.b : n = null != t.l;
                    var i, r = t.c;
                    if (n) Nn(e, t.l);
                    else if (n = !!t.c) {
                        if ("/" != r.charAt(0) && (this.b && !this.c ? r = "/" + r : -1 != (i = e.c.lastIndexOf("/")) && (r = e.c.substr(0, i + 1) + r)), ".." == (i = r) || "." == i) r = "";
                        else if (nt(i, "./") || nt(i, "/.")) {
                            r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                            for (var o = [], a = 0; a < i.length;) {
                                var s = i[a++];
                                "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0)
                            }
                            r = o.join("/")
                        } else r = i
                    }
                    return n ? e.c = r : n = "" !== t.a.toString(), n ? _n(e, Xn(t.a)) : n = !!t.g, n && (e.g = t.g), e
                };
                var xn = /[#\/\?@]/g,
                    jn = /[#\?:]/g,
                    Un = /[#\?]/g,
                    Vn = /[#\?@]/g,
                    Fn = /#/g;

                function qn(t, e) {
                    this.b = this.a = null, this.c = t || null, this.f = !!e
                }

                function Hn(n) {
                    n.a || (n.a = new In, n.b = 0, n.c && function(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var i, r = t[n].indexOf("="),
                                    o = null;
                                0 <= r ? (i = t[n].substring(0, r), o = t[n].substring(r + 1)) : i = t[n], e(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(n.c, function(t, e) {
                        n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                    }))
                }

                function Kn(t) {
                    var e = wn(t);
                    if (void 0 === e) throw Error("Keys are undefined");
                    var n = new qn(null, void 0);
                    t = yn(t);
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = t[i];
                        Array.isArray(o) ? Wn(n, r, o) : n.add(r, o)
                    }
                    return n
                }

                function Gn(t, e) {
                    Hn(t), e = Jn(t, e), En(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, En((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Tn(t)))
                }

                function Bn(t, e) {
                    return Hn(t), e = Jn(t, e), En(t.a.b, e)
                }

                function Wn(t, e, n) {
                    Gn(t, e), 0 < n.length && (t.c = null, t.a.set(Jn(t, e), W(n)), t.b += n.length)
                }

                function Xn(t) {
                    var e = new qn;
                    return e.c = t.c, t.a && (e.a = new In(t.a), e.b = t.b), e
                }

                function Jn(t, e) {
                    return e = String(e), t.f && (e = e.toLowerCase()), e
                }

                function Yn(t) {
                    var e = [];
                    return function t(e, n, i) {
                        if (null == n) i.push("null");
                        else {
                            if ("object" == typeof n) {
                                if (Array.isArray(n)) {
                                    var r = n;
                                    n = r.length, i.push("[");
                                    for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ",";
                                    return void i.push("]")
                                }
                                if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                                    for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && ("function" != typeof(a = n[r]) && (i.push(o), Qn(r, i), i.push(":"), t(e, a, i), o = ","));
                                    return void i.push("}")
                                }
                                n = n.valueOf()
                            }
                            switch (typeof n) {
                                case "string":
                                    Qn(n, i);
                                    break;
                                case "number":
                                    i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                    break;
                                case "boolean":
                                    i.push(String(n));
                                    break;
                                case "function":
                                    i.push("null");
                                    break;
                                default:
                                    throw Error("Unknown type: " + typeof n)
                            }
                        }
                    }(new zn, t, e), e.join("")
                }

                function zn() {}(t = qn.prototype).add = function(t, e) {
                    Hn(this), this.c = null, t = Jn(this, t);
                    var n = this.a.get(t);
                    return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
                }, t.clear = function() {
                    this.a = this.c = null, this.b = 0
                }, t.forEach = function(n, i) {
                    Hn(this), this.a.forEach(function(t, e) {
                        U(t, function(t) {
                            n.call(i, t, e, this)
                        }, this)
                    }, this)
                }, t.X = function() {
                    Hn(this);
                    for (var t = this.a.V(), e = this.a.X(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
                    return n
                }, t.V = function(t) {
                    Hn(this);
                    var e = [];
                    if ("string" == typeof t) Bn(this, t) && (e = B(e, this.a.get(Jn(this, t))));
                    else {
                        t = this.a.V();
                        for (var n = 0; n < t.length; n++) e = B(e, t[n])
                    }
                    return e
                }, t.set = function(t, e) {
                    return Hn(this), this.c = null, Bn(this, t = Jn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
                }, t.get = function(t, e) {
                    return t && 0 < (t = this.V(t)).length ? String(t[0]) : e
                }, t.toString = function() {
                    if (this.c) return this.c;
                    if (!this.a) return "";
                    for (var t = [], e = this.a.X(), n = 0; n < e.length; n++)
                        for (var i = e[n], r = encodeURIComponent(String(i)), i = this.V(i), o = 0; o < i.length; o++) {
                            var a = r;
                            "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a)
                        }
                    return this.c = t.join("&")
                };
                var $n = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "/": "\\/",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\v": "\\u000b"
                    },
                    Zn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                function Qn(t, e) {
                    e.push('"', t.replace(Zn, function(t) {
                        var e = $n[t];
                        return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), $n[t] = e), e
                    }), '"')
                }

                function ti() {
                    var t = yi();
                    return Ht && $t && 11 == $t || /Edge\/\d+/.test(t)
                }

                function ei() {
                    return l.window && l.window.location.href || self && self.location && self.location.href || ""
                }

                function ni(t, e) {
                    e = e || l.window;
                    var n = "about:blank";
                    t && (n = St(_t(t))), e.location.href = n
                }

                function ii(t) {
                    return !!((t = (t || yi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                }

                function ri(t) {
                    t = t || l.window;
                    try {
                        t.close()
                    } catch (t) {}
                }

                function oi(t, e, n) {
                    var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500, n = n || 600;
                    var r = (window.screen.availHeight - n) / 2,
                        o = (window.screen.availWidth - e) / 2;
                    for (a in e = {
                            width: e,
                            height: n,
                            top: 0 < r ? r : 0,
                            left: 0 < o ? o : 0,
                            location: !0,
                            resizable: !0,
                            statusbar: !0,
                            toolbar: !1
                        }, n = yi().toLowerCase(), i && (e.target = i, nt(n, "crios/") && (e.target = "_blank")), mi(yi()) == pi && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof kt ? n : _t(void 0 !== n.href ? n.href : String(n)), n = t.target || n.target, r = [], t) switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0))
                    }
                    var a = r.join(",");
                    if ((at("iPhone") && !at("iPod") && !at("iPad") || at("iPad") || at("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (ft(a = se(document, "A"), "HTMLAnchorElement"), e instanceof kt || e instanceof kt || (e = "object" == typeof e && e.ra ? e.qa() : String(e), Nt.test(e) || (e = "about:invalid#zClosurez"), e = new kt(Rt, e)), a.href = St(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = i.open("", n, a), t = St(e), a && (Gt && nt(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = Lt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + jt(t) + '">'), i = a.document) && (i.write(Dt(t)), i.close())) : (a = i.open(St(e), n, a)) && t.noopener && (a.opener = null), a) try {
                        a.focus()
                    } catch (t) {}
                    return a
                }
                var ai = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                    si = /^[^@]+@[^@]+$/;

                function ui() {
                    var e = null;
                    return new pe(function(t) {
                        "complete" == l.document.readyState ? t() : (e = function() {
                            t()
                        }, nn(window, "load", e))
                    }).o(function(t) {
                        throw rn(window, "load", e), t
                    })
                }

                function ci(t) {
                    return t = t || yi(), !("file:" !== Ai() && "ionic:" !== Ai() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                }

                function hi() {
                    var t = l.window;
                    try {
                        return t && t != t.top
                    } catch (t) {
                        return
                    }
                }

                function li() {
                    return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts
                }

                function fi() {
                    return Wl.default.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : Wl.default.INTERNAL.hasOwnProperty("node") ? "Node" : li() ? "Worker" : "Browser"
                }

                function di() {
                    var t = fi();
                    return "ReactNative" === t || "Node" === t
                }
                var pi = "Firefox",
                    vi = "Chrome";

                function mi(t) {
                    var e = t.toLowerCase();
                    return nt(e, "opera/") || nt(e, "opr/") || nt(e, "opios/") ? "Opera" : nt(e, "iemobile") ? "IEMobile" : nt(e, "msie") || nt(e, "trident/") ? "IE" : nt(e, "edge/") ? "Edge" : nt(e, "firefox/") ? pi : nt(e, "silk/") ? "Silk" : nt(e, "blackberry") ? "Blackberry" : nt(e, "webos") ? "Webos" : !nt(e, "safari/") || nt(e, "chrome/") || nt(e, "crios/") || nt(e, "android") ? !nt(e, "chrome/") && !nt(e, "crios/") || nt(e, "edge/") ? nt(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : vi : "Safari"
                }
                var gi = {
                    jd: "FirebaseCore-web",
                    ld: "FirebaseUI-web"
                };

                function bi(t, e) {
                    e = e || [];
                    var n, i = [],
                        r = {};
                    for (n in gi) r[gi[n]] = !0;
                    for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
                    return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = fi()) ? i = mi(r = yi()) : "Worker" === i && (i = mi(r = yi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",")
                }

                function yi() {
                    return l.navigator && l.navigator.userAgent || ""
                }

                function wi(t, e) {
                    t = t.split("."), e = e || l;
                    for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]];
                    return n != t.length && (e = void 0), e
                }

                function Ii() {
                    try {
                        var t = l.localStorage,
                            e = Oi();
                        if (t) return t.setItem(e, "1"), t.removeItem(e), !ti() || !!l.indexedDB
                    } catch (t) {
                        return li() && !!l.indexedDB
                    }
                    return !1
                }

                function Ti() {
                    return (Ei() || "chrome-extension:" === Ai() || ci()) && !di() && Ii() && !li()
                }

                function Ei() {
                    return "http:" === Ai() || "https:" === Ai()
                }

                function Ai() {
                    return l.location && l.location.protocol || null
                }

                function ki(t) {
                    return !ii(t = t || yi()) && mi(t) != pi
                }

                function Si(t) {
                    return void 0 === t ? null : Yn(t)
                }

                function Ni(t) {
                    var e, n = {};
                    for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
                    return n
                }

                function _i(t) {
                    if (null !== t) return JSON.parse(t)
                }

                function Oi(t) {
                    return t || Math.floor(1e9 * Math.random()).toString()
                }

                function Ri(t) {
                    return "Safari" != mi(t = t || yi()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                }

                function Ci() {
                    var t = l.___jsl;
                    if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
                }

                function Di(t, e) {
                    if (e < t) throw Error("Short delay should be less than long delay!");
                    this.a = t, this.c = e, t = yi(), e = fi(), this.b = ii(t) || "ReactNative" === e
                }

                function Pi() {
                    var t = l.document;
                    return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
                }

                function Li(t) {
                    try {
                        var e = new Date(parseInt(t, 10));
                        if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
                    } catch (t) {}
                    return null
                }

                function Mi() {
                    return wi("fireauth.oauthhelper", l) || wi("fireauth.iframe", l)
                }
                Di.prototype.get = function() {
                    var t = l.navigator;
                    return !t || "boolean" != typeof t.onLine || !Ei() && "chrome-extension:" !== Ai() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                };
                var xi, ji = {};

                function Ui(t) {
                    ji[t] || (ji[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t))
                }
                try {
                    var Vi = {};
                    Object.defineProperty(Vi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }), Object.defineProperty(Vi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }), xi = 2 == Vi.abcd
                } catch (t) {
                    xi = !1
                }

                function Fi(t, e, n) {
                    xi ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }) : t[e] = n
                }

                function qi(t, e) {
                    if (e)
                        for (var n in e) e.hasOwnProperty(n) && Fi(t, n, e[n])
                }

                function Hi(t) {
                    var e = {};
                    return qi(e, t), e
                }

                function Ki(t) {
                    var e = t;
                    if ("object" == typeof t && null != t)
                        for (var n in e = "length" in t ? [] : {}, t) Fi(e, n, Ki(t[n]));
                    return e
                }

                function Gi(t) {
                    var e = t && (t[Yi] ? "phone" : null);
                    if (!(e && t && t[Ji])) throw new I("internal-error", "Internal assert: invalid MultiFactorInfo object");
                    Fi(this, "uid", t[Ji]), Fi(this, "displayName", t[Wi] || null);
                    var n = null;
                    t[Xi] && (n = new Date(t[Xi]).toUTCString()), Fi(this, "enrollmentTime", n), Fi(this, "factorId", e)
                }

                function Bi(t) {
                    try {
                        var e = new zi(t)
                    } catch (t) {
                        e = null
                    }
                    return e
                }
                Gi.prototype.v = function() {
                    return {
                        uid: this.uid,
                        displayName: this.displayName,
                        factorId: this.factorId,
                        enrollmentTime: this.enrollmentTime
                    }
                };
                var Wi = "displayName",
                    Xi = "enrolledAt",
                    Ji = "mfaEnrollmentId",
                    Yi = "phoneInfo";

                function zi(t) {
                    Gi.call(this, t), Fi(this, "phoneNumber", t[Yi])
                }

                function $i(t) {
                    var e = {},
                        n = t[er],
                        i = t[ir],
                        r = t[rr];
                    if (t = Bi(t[nr]), !r || r != Qi && r != tr && !n || r == tr && !i || r == Zi && !t) throw Error("Invalid checkActionCode response!");
                    r == tr ? (e[ar] = n || null, e[ur] = n || null, e[or] = i) : (e[ar] = i || null, e[ur] = i || null, e[or] = n || null), e[sr] = t || null, Fi(this, hr, r), Fi(this, cr, Ki(e))
                }
                e(zi, Gi), zi.prototype.v = function() {
                    var t = zi.Za.v.call(this);
                    return t.phoneNumber = this.phoneNumber, t
                };
                var Zi = "REVERT_SECOND_FACTOR_ADDITION",
                    Qi = "EMAIL_SIGNIN",
                    tr = "VERIFY_AND_CHANGE_EMAIL",
                    er = "email",
                    nr = "mfaInfo",
                    ir = "newEmail",
                    rr = "requestType",
                    or = "email",
                    ar = "fromEmail",
                    sr = "multiFactorInfo",
                    ur = "previousEmail",
                    cr = "data",
                    hr = "operation";

                function lr(t) {
                    var e = Rn(t = Cn(t), fr) || null,
                        n = Rn(t, dr) || null,
                        i = (i = Rn(t, mr) || null) && br[i] || null;
                    if (!e || !n || !i) throw new I("argument-error", fr + ", " + dr + "and " + mr + " are required in a valid action code URL.");
                    qi(this, {
                        apiKey: e,
                        operation: i,
                        code: n,
                        continueUrl: Rn(t, pr) || null,
                        languageCode: Rn(t, vr) || null,
                        tenantId: Rn(t, gr) || null
                    })
                }
                var fr = "apiKey",
                    dr = "oobCode",
                    pr = "continueUrl",
                    vr = "languageCode",
                    mr = "mode",
                    gr = "tenantId",
                    br = {
                        recoverEmail: "RECOVER_EMAIL",
                        resetPassword: "PASSWORD_RESET",
                        revertSecondFactorAddition: Zi,
                        signIn: Qi,
                        verifyAndChangeEmail: tr,
                        verifyEmail: "VERIFY_EMAIL"
                    };

                function yr(t) {
                    try {
                        return new lr(t)
                    } catch (t) {
                        return null
                    }
                }

                function wr(t) {
                    var e = t[kr];
                    if (void 0 === e) throw new I("missing-continue-uri");
                    if ("string" != typeof e || "string" == typeof e && !e.length) throw new I("invalid-continue-uri");
                    if (this.h = e, this.b = this.a = null, this.g = !1, (i = t[Ir]) && "object" == typeof i) {
                        e = i[_r];
                        var n = i[Sr],
                            i = i[Nr];
                        if ("string" == typeof e && e.length) {
                            if (this.a = e, void 0 !== n && "boolean" != typeof n) throw new I("argument-error", Sr + " property must be a boolean when specified.");
                            if (this.g = !!n, void 0 !== i && ("string" != typeof i || "string" == typeof i && !i.length)) throw new I("argument-error", Nr + " property must be a non empty string when specified.");
                            this.b = i || null
                        } else {
                            if (void 0 !== e) throw new I("argument-error", _r + " property must be a non empty string when specified.");
                            if (void 0 !== n || void 0 !== i) throw new I("missing-android-pkg-name")
                        }
                    } else if (void 0 !== i) throw new I("argument-error", Ir + " property must be a non null object when specified.");
                    if (this.f = null, (e = t[Ar]) && "object" == typeof e) {
                        if ("string" == typeof(e = e[Or]) && e.length) this.f = e;
                        else if (void 0 !== e) throw new I("argument-error", Or + " property must be a non empty string when specified.")
                    } else if (void 0 !== e) throw new I("argument-error", Ar + " property must be a non null object when specified.");
                    if (void 0 !== (e = t[Er]) && "boolean" != typeof e) throw new I("argument-error", Er + " property must be a boolean when specified.");
                    if (this.c = !!e, void 0 !== (t = t[Tr]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new I("argument-error", Tr + " property must be a non empty string when specified.");
                    this.i = t || null
                }
                var Ir = "android",
                    Tr = "dynamicLinkDomain",
                    Er = "handleCodeInApp",
                    Ar = "iOS",
                    kr = "url",
                    Sr = "installApp",
                    Nr = "minimumVersion",
                    _r = "packageName",
                    Or = "bundleId";

                function Rr(t) {
                    var e, n = {};
                    for (e in n.continueUrl = t.h, n.canHandleCodeInApp = t.c, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.b, n.androidInstallApp = t.g), n.iOSBundleId = t.f, n.dynamicLinkDomain = t.i, n) null === n[e] && delete n[e];
                    return n
                }
                var Cr = null;

                function Dr(t) {
                    var e = "";
                    return function(i, t) {
                        function e(t) {
                            for (; r < i.length;) {
                                var e = i.charAt(r++),
                                    n = Cr[e];
                                if (null != n) return n;
                                if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e)
                            }
                            return t
                        }! function() {
                            if (!Cr) {
                                Cr = {};
                                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; n < 5; n++)
                                    for (var i = t.concat(e[n].split("")), r = 0; r < i.length; r++) {
                                        var o = i[r];
                                        void 0 === Cr[o] && (Cr[o] = r)
                                    }
                            }
                        }();
                        for (var r = 0;;) {
                            var n = e(-1),
                                o = e(0),
                                a = e(64),
                                s = e(64);
                            if (64 === s && -1 === n) break;
                            t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s))
                        }
                    }(t, function(t) {
                        e += String.fromCharCode(t)
                    }), e
                }

                function Pr(t) {
                    var e = Mr(t);
                    if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
                    this.g = t, this.c = e.exp, this.h = e.sub, this.a = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.b = !!e.is_anonymous || "anonymous" == this.a
                }

                function Lr(t) {
                    try {
                        return new Pr(t)
                    } catch (t) {
                        return null
                    }
                }

                function Mr(t) {
                    if (!t) return null;
                    if (3 != (t = t.split(".")).length) return null;
                    for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += ".";
                    try {
                        return JSON.parse(Dr(t))
                    } catch (t) {}
                    return null
                }
                Pr.prototype.S = function() {
                    return this.f
                }, Pr.prototype.i = function() {
                    return this.b
                }, Pr.prototype.toString = function() {
                    return this.g
                };
                var xr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                    jr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                    Ur = {
                        kd: {
                            Ha: "locale",
                            ta: 700,
                            sa: 600,
                            ea: "facebook.com",
                            Va: jr
                        },
                        md: {
                            Ha: null,
                            ta: 500,
                            sa: 750,
                            ea: "github.com",
                            Va: jr
                        },
                        nd: {
                            Ha: "hl",
                            ta: 515,
                            sa: 680,
                            ea: "google.com",
                            Va: jr
                        },
                        td: {
                            Ha: "lang",
                            ta: 485,
                            sa: 705,
                            ea: "twitter.com",
                            Va: xr
                        },
                        gd: {
                            Ha: "locale",
                            ta: 640,
                            sa: 600,
                            ea: "apple.com",
                            Va: []
                        }
                    };

                function Vr(t) {
                    for (var e in Ur)
                        if (Ur[e].ea == t) return Ur[e];
                    return null
                }

                function Fr(t) {
                    var e = {};
                    e["facebook.com"] = Br, e["google.com"] = Xr, e["github.com"] = Wr, e["twitter.com"] = Jr;
                    var n = t && t[Hr];
                    try {
                        if (n) return e[n] ? new e[n](t) : new Gr(t);
                        if (void 0 !== t[qr]) return new Kr(t)
                    } catch (t) {}
                    return null
                }
                var qr = "idToken",
                    Hr = "providerId";

                function Kr(t) {
                    var e, n = t[Hr];
                    if (n || !t[qr] || (e = Lr(t[qr])) && e.a && (n = e.a), !n) throw Error("Invalid additional user info!");
                    "anonymous" != n && "custom" != n || (n = null), e = !1, void 0 !== t.isNewUser ? e = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0), Fi(this, "providerId", n), Fi(this, "isNewUser", e)
                }

                function Gr(t) {
                    Kr.call(this, t), Fi(this, "profile", Ki((t = _i(t.rawUserInfo || "{}")) || {}))
                }

                function Br(t) {
                    if (Gr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
                }

                function Wr(t) {
                    if (Gr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                    Fi(this, "username", this.profile && this.profile.login || null)
                }

                function Xr(t) {
                    if (Gr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
                }

                function Jr(t) {
                    if (Gr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                    Fi(this, "username", t.screenName || null)
                }

                function Yr(t) {
                    var e = Rn(i = Cn(t), "link"),
                        n = Rn(Cn(e), "link"),
                        i = Rn(i, "deep_link_id");
                    return Rn(Cn(i), "link") || i || n || e || t
                }

                function zr(t, e) {
                    if (!t && !e) throw new I("internal-error", "Internal assert: no raw session string available");
                    if (t && e) throw new I("internal-error", "Internal assert: unable to determine the session type");
                    this.a = t || null, this.b = e || null, this.type = this.a ? $r : Zr
                }
                e(Gr, Kr), e(Br, Gr), e(Wr, Gr), e(Xr, Gr), e(Jr, Gr);
                var $r = "enroll",
                    Zr = "signin";

                function Qr() {}

                function to(t, n) {
                    return t.then(function(t) {
                        if (t[Ka]) {
                            var e = Lr(t[Ka]);
                            if (!e || n != e.h) throw new I("user-mismatch");
                            return t
                        }
                        throw new I("user-mismatch")
                    }).o(function(t) {
                        throw t && t.code && t.code == A + "user-not-found" ? new I("user-mismatch") : t
                    })
                }

                function eo(t, e) {
                    if (!e) throw new I("internal-error", "failed to construct a credential");
                    this.a = e, Fi(this, "providerId", t), Fi(this, "signInMethod", t)
                }

                function no(t) {
                    return {
                        pendingToken: t.a,
                        requestUri: "http://localhost"
                    }
                }

                function io(t) {
                    if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
                        return new eo(t.providerId, t.pendingToken)
                    } catch (t) {}
                    return null
                }

                function ro(t, e, n) {
                    if (this.a = null, e.idToken || e.accessToken) e.idToken && Fi(this, "idToken", e.idToken), e.accessToken && Fi(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Fi(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                    else {
                        if (!e.oauthToken || !e.oauthTokenSecret) throw new I("internal-error", "failed to construct a credential");
                        Fi(this, "accessToken", e.oauthToken), Fi(this, "secret", e.oauthTokenSecret)
                    }
                    Fi(this, "providerId", t), Fi(this, "signInMethod", n)
                }

                function oo(t) {
                    var e = {};
                    return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
                        postBody: Kn(e).toString(),
                        requestUri: "http://localhost"
                    }, t.a && (delete e.postBody, e.pendingToken = t.a), e
                }

                function ao(t) {
                    if (t && t.providerId && t.signInMethod) {
                        var e = {
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                            oauthTokenSecret: t.oauthTokenSecret,
                            oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                            nonce: t.nonce,
                            pendingToken: t.pendingToken
                        };
                        try {
                            return new ro(t.providerId, e, t.signInMethod)
                        } catch (t) {}
                    }
                    return null
                }

                function so(t, e) {
                    this.Oc = e || [], qi(this, {
                        providerId: t,
                        isOAuthProvider: !0
                    }), this.Fb = {}, this.lb = (Vr(t) || {}).Ha || null, this.kb = null
                }

                function uo(t) {
                    if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new I("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                    so.call(this, t, [])
                }

                function co(t) {
                    so.call(this, t, jr), this.a = []
                }

                function ho() {
                    co.call(this, "facebook.com")
                }

                function lo(t) {
                    if (!t) throw new I("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return m(t) && (e = t.accessToken), (new ho).credential({
                        accessToken: e
                    })
                }

                function fo() {
                    co.call(this, "github.com")
                }

                function po(t) {
                    if (!t) throw new I("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return m(t) && (e = t.accessToken), (new fo).credential({
                        accessToken: e
                    })
                }

                function vo() {
                    co.call(this, "google.com"), this.Aa("profile")
                }

                function mo(t, e) {
                    var n = t;
                    return m(t) && (n = t.idToken, e = t.accessToken), (new vo).credential({
                        idToken: n,
                        accessToken: e
                    })
                }

                function go() {
                    so.call(this, "twitter.com", xr)
                }

                function bo(t, e) {
                    var n = t;
                    if (m(n) || (n = {
                            oauthToken: t,
                            oauthTokenSecret: e
                        }), !n.oauthToken || !n.oauthTokenSecret) throw new I("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new ro("twitter.com", n, "twitter.com")
                }

                function yo(t, e, n) {
                    this.a = t, this.f = e, Fi(this, "providerId", "password"), Fi(this, "signInMethod", n === Io.EMAIL_LINK_SIGN_IN_METHOD ? Io.EMAIL_LINK_SIGN_IN_METHOD : Io.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }

                function wo(t) {
                    return t && t.email && t.password ? new yo(t.email, t.password, t.signInMethod) : null
                }

                function Io() {
                    qi(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }

                function To(t, e) {
                    if (!(e = Eo(e))) throw new I("argument-error", "Invalid email link!");
                    return new yo(t, e.code, Io.EMAIL_LINK_SIGN_IN_METHOD)
                }

                function Eo(t) {
                    return (t = yr(t = Yr(t))) && t.operation === Qi ? t : null
                }

                function Ao(t) {
                    if (!(t.bb && t.ab || t.Ja && t.da)) throw new I("internal-error");
                    this.a = t, Fi(this, "providerId", "phone"), this.ea = "phone", Fi(this, "signInMethod", "phone")
                }

                function ko(e) {
                    if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
                        var n = {};
                        return U(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(t) {
                            e[t] && (n[t] = e[t])
                        }), new Ao(n)
                    }
                    return null
                }

                function So(t) {
                    return t.a.Ja && t.a.da ? {
                        temporaryProof: t.a.Ja,
                        phoneNumber: t.a.da
                    } : {
                        sessionInfo: t.a.bb,
                        code: t.a.ab
                    }
                }

                function No(t) {
                    try {
                        this.a = t || Wl.default.auth()
                    } catch (t) {
                        throw new I("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    qi(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }

                function _o(t, e) {
                    if (!t) throw new I("missing-verification-id");
                    if (!e) throw new I("missing-verification-code");
                    return new Ao({
                        bb: t,
                        ab: e
                    })
                }

                function Oo(t) {
                    if (t.temporaryProof && t.phoneNumber) return new Ao({
                        Ja: t.temporaryProof,
                        da: t.phoneNumber
                    });
                    var e = t && t.providerId;
                    if (!e || "password" === e) return null;
                    var n = t && t.oauthAccessToken,
                        i = t && t.oauthTokenSecret,
                        r = t && t.nonce,
                        o = t && t.oauthIdToken,
                        a = t && t.pendingToken;
                    try {
                        switch (e) {
                            case "google.com":
                                return mo(o, n);
                            case "facebook.com":
                                return lo(n);
                            case "github.com":
                                return po(n);
                            case "twitter.com":
                                return bo(n, i);
                            default:
                                return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new eo(e, a) : new ro(e, {
                                    pendingToken: a,
                                    idToken: t.oauthIdToken,
                                    accessToken: t.oauthAccessToken
                                }, e) : new co(e).credential({
                                    idToken: o,
                                    accessToken: n,
                                    rawNonce: r
                                }) : null
                        }
                    } catch (t) {
                        return null
                    }
                }

                function Ro(t) {
                    if (!t.isOAuthProvider) throw new I("invalid-oauth-provider")
                }

                function Co(t, e, n, i, r, o, a) {
                    if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new I("invalid-auth-event");
                    if (this.g && this.a) throw new I("invalid-auth-event");
                    if (this.g && !this.f) throw new I("invalid-auth-event")
                }

                function Do(t) {
                    return (t = t || {}).type ? new Co(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && T(t.error), t.postBody, t.tenantId) : null
                }

                function Po() {
                    this.b = null, this.a = []
                }
                zr.prototype.Fa = function() {
                    return this.a ? Ie(this.a) : Ie(this.b)
                }, zr.prototype.v = function() {
                    return this.type == $r ? {
                        multiFactorSession: {
                            idToken: this.a
                        }
                    } : {
                        multiFactorSession: {
                            pendingCredential: this.b
                        }
                    }
                }, Qr.prototype.ia = function() {}, Qr.prototype.b = function() {}, Qr.prototype.c = function() {}, Qr.prototype.v = function() {}, eo.prototype.ia = function(t) {
                    return cs(t, no(this))
                }, eo.prototype.b = function(t, e) {
                    var n = no(this);
                    return n.idToken = e, hs(t, n)
                }, eo.prototype.c = function(t, e) {
                    return to(ls(t, no(this)), e)
                }, eo.prototype.v = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }, ro.prototype.ia = function(t) {
                    return cs(t, oo(this))
                }, ro.prototype.b = function(t, e) {
                    var n = oo(this);
                    return n.idToken = e, hs(t, n)
                }, ro.prototype.c = function(t, e) {
                    return to(ls(t, oo(this)), e)
                }, ro.prototype.v = function() {
                    var t = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t
                }, so.prototype.Ia = function(t) {
                    return this.Fb = ct(t), this
                }, e(uo, so), e(co, so), co.prototype.Aa = function(t) {
                    return H(this.a, t) || this.a.push(t), this
                }, co.prototype.Nb = function() {
                    return W(this.a)
                }, co.prototype.credential = function(t, e) {
                    var n = m(t) ? {
                        idToken: t.idToken || null,
                        accessToken: t.accessToken || null,
                        nonce: t.rawNonce || null
                    } : {
                        idToken: t || null,
                        accessToken: e || null
                    };
                    if (!n.idToken && !n.accessToken) throw new I("argument-error", "credential failed: must provide the ID token and/or the access token.");
                    return new ro(this.providerId, n, this.providerId)
                }, e(ho, co), Fi(ho, "PROVIDER_ID", "facebook.com"), Fi(ho, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), e(fo, co), Fi(fo, "PROVIDER_ID", "github.com"), Fi(fo, "GITHUB_SIGN_IN_METHOD", "github.com"), e(vo, co), Fi(vo, "PROVIDER_ID", "google.com"), Fi(vo, "GOOGLE_SIGN_IN_METHOD", "google.com"), e(go, so), Fi(go, "PROVIDER_ID", "twitter.com"), Fi(go, "TWITTER_SIGN_IN_METHOD", "twitter.com"), yo.prototype.ia = function(t) {
                    return this.signInMethod == Io.EMAIL_LINK_SIGN_IN_METHOD ? Ws(t, ys, {
                        email: this.a,
                        oobCode: this.f
                    }) : Ws(t, qs, {
                        email: this.a,
                        password: this.f
                    })
                }, yo.prototype.b = function(t, e) {
                    return this.signInMethod == Io.EMAIL_LINK_SIGN_IN_METHOD ? Ws(t, ws, {
                        idToken: e,
                        email: this.a,
                        oobCode: this.f
                    }) : Ws(t, Ps, {
                        idToken: e,
                        email: this.a,
                        password: this.f
                    })
                }, yo.prototype.c = function(t, e) {
                    return to(this.ia(t), e)
                }, yo.prototype.v = function() {
                    return {
                        email: this.a,
                        password: this.f,
                        signInMethod: this.signInMethod
                    }
                }, qi(Io, {
                    PROVIDER_ID: "password"
                }), qi(Io, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }), qi(Io, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }), Ao.prototype.ia = function(t) {
                    return t.cb(So(this))
                }, Ao.prototype.b = function(t, e) {
                    var n = So(this);
                    return n.idToken = e, Ws(t, Ks, n)
                }, Ao.prototype.c = function(t, e) {
                    var n = So(this);
                    return n.operation = "REAUTH", to(t = Ws(t, Gs, n), e)
                }, Ao.prototype.v = function() {
                    var t = {
                        providerId: "phone"
                    };
                    return this.a.bb && (t.verificationId = this.a.bb), this.a.ab && (t.verificationCode = this.a.ab), this.a.Ja && (t.temporaryProof = this.a.Ja), this.a.da && (t.phoneNumber = this.a.da), t
                }, No.prototype.cb = function(r, o) {
                    var a = this.a.b;
                    return Ie(o.verify()).then(function(i) {
                        if ("string" != typeof i) throw new I("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        if ("recaptcha" !== o.type) throw new I("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
                        var t = m(r) ? r.session : null,
                            e = m(r) ? r.phoneNumber : r,
                            n = t && t.type == $r ? t.Fa().then(function(t) {
                                return Ws(a, Ms, {
                                    idToken: t,
                                    phoneEnrollmentInfo: {
                                        phoneNumber: e,
                                        recaptchaToken: i
                                    }
                                }).then(function(t) {
                                    return t.phoneSessionInfo.sessionInfo
                                })
                            }) : t && t.type == Zr ? t.Fa().then(function(t) {
                                return e = a, n = {
                                    mfaPendingCredential: t,
                                    mfaEnrollmentId: r.multiFactorHint && r.multiFactorHint.uid || r.multiFactorUid,
                                    phoneSignInInfo: {
                                        recaptchaToken: i
                                    }
                                }, Ws(e, xs, n).then(function(t) {
                                    return t.phoneResponseInfo.sessionInfo
                                });
                                var e, n
                            }) : Ws(a, Cs, {
                                phoneNumber: e,
                                recaptchaToken: i
                            });
                        return n.then(function(t) {
                            return "function" == typeof o.reset && o.reset(), t
                        }, function(t) {
                            throw "function" == typeof o.reset && o.reset(), t
                        })
                    })
                }, qi(No, {
                    PROVIDER_ID: "phone"
                }), qi(No, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }), Co.prototype.getUid = function() {
                    var t = [];
                    return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-")
                }, Co.prototype.S = function() {
                    return this.h
                }, Co.prototype.v = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.v()
                    }
                };
                var Lo, Mo = null;

                function xo(t) {
                    var e = "unauthorized-domain",
                        n = void 0,
                        i = Cn(t);
                    t = i.b, "chrome-extension" == (i = i.f) ? n = xt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = xt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", I.call(this, e, n)
                }

                function jo(t, e, n) {
                    I.call(this, t, n), (t = e || {}).Gb && Fi(this, "email", t.Gb), t.da && Fi(this, "phoneNumber", t.da), t.credential && Fi(this, "credential", t.credential), t.Wb && Fi(this, "tenantId", t.Wb)
                }

                function Uo(t) {
                    if (t.code) {
                        var e = t.code || "";
                        0 == e.indexOf(A) && (e = e.substring(A.length));
                        var n = {
                            credential: Oo(t),
                            Wb: t.tenantId
                        };
                        if (t.email) n.Gb = t.email;
                        else if (t.phoneNumber) n.da = t.phoneNumber;
                        else if (!n.credential) return new I(e, t.message || void 0);
                        return new jo(e, n, t.message)
                    }
                    return null
                }

                function Vo() {}

                function Fo(t) {
                    return t.c || (t.c = t.b())
                }

                function qo() {}

                function Ho(t) {
                    if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f;
                    for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
                        var i = e[n];
                        try {
                            return new ActiveXObject(i), t.f = i
                        } catch (t) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                }

                function Ko() {}

                function Go() {
                    this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = b(this.oc, this), this.a.onerror = b(this.Pb, this), this.a.onprogress = b(this.pc, this), this.a.ontimeout = b(this.tc, this)
                }

                function Bo(t, e) {
                    t.readyState = e, t.onreadystatechange && t.onreadystatechange()
                }

                function Wo(t, e, n) {
                    this.reset(t, e, n, void 0, void 0)
                }

                function Xo(t) {
                    this.f = t, this.b = this.c = this.a = null
                }

                function Jo(t, e) {
                    this.name = t, this.value = e
                }
                e(xo, I), e(jo, I), jo.prototype.v = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
                    var e = this.credential && this.credential.v();
                    return e && lt(t, e), t
                }, jo.prototype.toJSON = function() {
                    return this.v()
                }, Vo.prototype.c = null, e(qo, Vo), qo.prototype.a = function() {
                    var t = Ho(this);
                    return t ? new ActiveXObject(t) : new XMLHttpRequest
                }, qo.prototype.b = function() {
                    var t = {};
                    return Ho(this) && (t[0] = !0, t[1] = !0), t
                }, Lo = new qo, e(Ko, Vo), Ko.prototype.a = function() {
                    var t = new XMLHttpRequest;
                    if ("withCredentials" in t) return t;
                    if ("undefined" != typeof XDomainRequest) return new Go;
                    throw Error("Unsupported browser")
                }, Ko.prototype.b = function() {
                    return {}
                }, (t = Go.prototype).open = function(t, e, n) {
                    if (null != n && !n) throw Error("Only async requests are supported.");
                    this.a.open(t, e)
                }, t.send = function(t) {
                    if (t) {
                        if ("string" != typeof t) throw Error("Only string data is supported");
                        this.a.send(t)
                    } else this.a.send()
                }, t.abort = function() {
                    this.a.abort()
                }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) {
                    return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                }, t.oc = function() {
                    this.status = 200, this.response = this.responseText = this.a.responseText, Bo(this, 4)
                }, t.Pb = function() {
                    this.status = 500, this.response = this.responseText = "", Bo(this, 4)
                }, t.tc = function() {
                    this.Pb()
                }, t.pc = function() {
                    this.status = 200, Bo(this, 1)
                }, t.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }, Wo.prototype.a = null, Wo.prototype.reset = function(t, e, n, i, r) {
                    delete this.a
                }, Jo.prototype.toString = function() {
                    return this.name
                };
                var Yo = new Jo("SEVERE", 1e3),
                    zo = new Jo("WARNING", 900),
                    $o = new Jo("CONFIG", 700),
                    Zo = new Jo("FINE", 500);
                Xo.prototype.log = function(t, e, n) {
                    if (t.value >= function t(e) {
                            return e.c ? e.c : e.a ? t(e.a) : (C("Root logger has no level set."), null)
                        }(this).value)
                        for (v(e) && (e = e()), t = new Wo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
                };
                var Qo, ta = {},
                    ea = null;

                function na(t) {
                    var e, n, i;
                    return ea || (ea = new Xo(""), (ta[""] = ea).c = $o), (e = ta[t]) || (e = new Xo(t), i = t.lastIndexOf("."), n = t.substr(i + 1), (i = na(t.substr(0, i))).b || (i.b = {}), (i.b[n] = e).a = i, ta[t] = e), e
                }

                function ia(t, e) {
                    t && t.log(Zo, e, void 0)
                }

                function ra(t) {
                    this.f = t
                }

                function oa(t) {
                    dn.call(this), this.s = t, this.readyState = aa, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.m = "GET", this.g = "", this.a = !1, this.h = na("goog.net.FetchXmlHttp"), this.l = this.c = this.f = null
                }
                e(ra, Vo), ra.prototype.a = function() {
                    return new oa(this.f)
                }, ra.prototype.b = (Qo = {}, function() {
                    return Qo
                }), e(oa, dn);
                var aa = 0;

                function sa(t) {
                    t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t))
                }

                function ua(t, e) {
                    e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, ca(t)
                }

                function ca(t) {
                    t.onreadystatechange && t.onreadystatechange.call(t)
                }

                function ha(t) {
                    dn.call(this), this.headers = new In, this.D = t || null, this.c = !1, this.B = this.a = null, this.h = this.P = this.l = "", this.f = this.O = this.i = this.N = !1, this.g = 0, this.s = null, this.m = la, this.w = this.R = !1
                }(t = oa.prototype).open = function(t, e) {
                    if (this.readyState != aa) throw this.abort(), Error("Error reopening a connection");
                    this.m = t, this.g = e, this.readyState = 1, ca(this)
                }, t.send = function(t) {
                    if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                    this.a = !0;
                    var e = {
                        headers: this.i,
                        method: this.m,
                        credentials: void 0,
                        cache: void 0
                    };
                    t && (e.body = t), this.s.fetch(new Request(this.g, e)).then(this.sc.bind(this), this.Sa.bind(this))
                }, t.abort = function() {
                    this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, ua(this, !1)), this.readyState = aa
                }, t.sc = function(t) {
                    this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, ca(this)), this.a && (this.readyState = 3, ca(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this)) : void 0 !== l.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.l = new TextDecoder, sa(this)) : t.text().then(this.rc.bind(this), this.Sa.bind(this)))))
                }, t.nc = function(t) {
                    var e;
                    this.a && ((e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                        stream: !t.done
                    })) && (this.response = this.responseText += e), t.done ? ua(this, !0) : ca(this), 3 == this.readyState && sa(this))
                }, t.rc = function(t) {
                    this.a && (this.response = this.responseText = t, ua(this, !0))
                }, t.qc = function(t) {
                    this.a && (this.response = t, ua(this, !0))
                }, t.Sa = function(t) {
                    var e = this.h;
                    e && e.log(zo, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)), this.a && ua(this, !0)
                }, t.setRequestHeader = function(t, e) {
                    this.i.append(t, e)
                }, t.getResponseHeader = function(t) {
                    return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(zo, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "")
                }, t.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var t = this.h;
                        return t && t.log(zo, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), ""
                    }
                    t = [];
                    for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
                    return t.join("\r\n")
                }, e(ha, dn);
                var la = "";
                ha.prototype.b = na("goog.net.XhrIo");
                var fa = /^https?$/i,
                    da = ["POST", "PUT"];

                function pa(e, t, n, i, r) {
                    if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                    n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.P = n, e.N = !1, e.c = !0, e.a = e.D ? e.D.a() : Lo.a(), e.B = e.D ? Fo(e.D) : Fo(Lo), e.a.onreadystatechange = b(e.Sb, e);
                    try {
                        ia(e.b, Ea(e, "Opening Xhr")), e.O = !0, e.a.open(n, String(t), !0), e.O = !1
                    } catch (t) {
                        return ia(e.b, Ea(e, "Error opening Xhr: " + t.message)), void ma(e, t)
                    }
                    t = i || "";
                    var o, a = new In(e.headers);
                    r && function(t, e) {
                        if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                        else if (p(t) || "string" == typeof t) U(t, e, void 0);
                        else
                            for (var n = wn(t), i = yn(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t)
                    }(r, function(t, e) {
                        a.set(e, t)
                    }), r = function(t) {
                        t: {
                            for (var e = va, n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) {
                                    e = r;
                                    break t
                                }
                            e = -1
                        }
                        return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e]
                    }(a.X()), i = l.FormData && t instanceof l.FormData, !H(da, n) || r || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(t, e) {
                        this.a.setRequestHeader(e, t)
                    }, e), e.m && (e.a.responseType = e.m), "withCredentials" in e.a && e.a.withCredentials !== e.R && (e.a.withCredentials = e.R);
                    try {
                        wa(e), 0 < e.g && (e.w = (o = e.a, Ht && Qt(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), ia(e.b, Ea(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.w)), e.w ? (e.a.timeout = e.g, e.a.ontimeout = b(e.Ka, e)) : e.s = gn(e.Ka, e.g, e)), ia(e.b, Ea(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1
                    } catch (t) {
                        ia(e.b, Ea(e, "Send error: " + t.message)), ma(e, t)
                    }
                }

                function va(t) {
                    return "content-type" == t.toLowerCase()
                }

                function ma(t, e) {
                    t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, ga(t), ya(t)
                }

                function ga(t) {
                    t.N || (t.N = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
                }

                function ba(e) {
                    if (e.c && void 0 !== h)
                        if (e.B[1] && 4 == Ia(e) && 2 == Ta(e)) ia(e.b, Ea(e, "Local request error detected and ignored"));
                        else if (e.i && 4 == Ia(e)) gn(e.Sb, 0, e);
                    else if (e.dispatchEvent("readystatechange"), 4 == Ia(e)) {
                        ia(e.b, Ea(e, "Request complete")), e.c = !1;
                        try {
                            var t, n, i, r, o = Ta(e);
                            t: switch (o) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var a = !0;
                                    break t;
                                default:
                                    a = !1
                            }
                            if ((t = a) || ((n = 0 === o) && (!(r = String(e.l).match(An)[1] || null) && l.self && l.self.location && (r = (i = l.self.location.protocol).substr(0, i.length - 1)), n = !fa.test(r ? r.toLowerCase() : "")), t = n), t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                            else {
                                try {
                                    var s = 2 < Ia(e) ? e.a.statusText : ""
                                } catch (t) {
                                    ia(e.b, "Can not get status: " + t.message), s = ""
                                }
                                e.h = s + " [" + Ta(e) + "]", ga(e)
                            }
                        } finally {
                            ya(e)
                        }
                    }
                }

                function ya(e, t) {
                    if (e.a) {
                        wa(e);
                        var n = e.a,
                            i = e.B[0] ? a : null;
                        e.a = null, e.B = null, t || e.dispatchEvent("ready");
                        try {
                            n.onreadystatechange = i
                        } catch (t) {
                            (e = e.b) && e.log(Yo, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                        }
                    }
                }

                function wa(t) {
                    t.a && t.w && (t.a.ontimeout = null), t.s && (l.clearTimeout(t.s), t.s = null)
                }

                function Ia(t) {
                    return t.a ? t.a.readyState : 0
                }

                function Ta(t) {
                    try {
                        return 2 < Ia(t) ? t.a.status : -1
                    } catch (t) {
                        return -1
                    }
                }

                function Ea(t, e) {
                    return e + " [" + t.P + " " + t.l + " " + Ta(t) + "]"
                }

                function Aa(t) {
                    var e = Ma;
                    this.g = [], this.w = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.u = this.B = this.i = !1, this.h = 0, this.b = null, this.l = 0
                }

                function ka(t, e, n) {
                    t.a = !0, t.c = n, t.f = !e, Oa(t)
                }

                function Sa(t) {
                    if (t.a) {
                        if (!t.u) throw new Ra;
                        t.u = !1
                    }
                }

                function Na(t, e, n, i) {
                    t.g.push([e, n, i]), t.a && Oa(t)
                }

                function _a(t) {
                    return q(t.g, function(t) {
                        return v(t[1])
                    })
                }

                function Oa(e) {
                    var n, i;
                    e.h && e.a && _a(e) && (n = e.h, (i = Pa[n]) && (l.clearTimeout(i.a), delete Pa[n]), e.h = 0), e.b && (e.b.l--, delete e.b), n = e.c;
                    for (var t = i = !1; e.g.length && !e.i;) {
                        var r = (a = e.g.shift())[0],
                            o = a[1],
                            a = a[2];
                        if (r = e.f ? o : r) try {
                            var s = r.call(a || e.s, n);
                            void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (_(n) || "function" == typeof l.Promise && n instanceof l.Promise) && (t = !0, e.i = !0)
                        } catch (t) {
                            n = t, e.f = !0, _a(e) || (i = !0)
                        }
                    }
                    e.c = n, t && (s = b(e.m, e, !0), t = b(e.m, e, !1), n instanceof Aa ? (Na(n, s, t), n.B = !0) : n.then(s, t)), i && (n = new Da(n), Pa[n.a] = n, e.h = n.a)
                }

                function Ra() {
                    O.call(this)
                }

                function Ca() {
                    O.call(this)
                }

                function Da(t) {
                    this.a = l.setTimeout(b(this.c, this), 0), this.b = t
                }(t = ha.prototype).Ka = function() {
                    void 0 !== h && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", ia(this.b, Ea(this, this.h)), this.dispatchEvent("timeout"), this.abort(8))
                }, t.abort = function() {
                    this.a && this.c && (ia(this.b, Ea(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ya(this))
                }, t.Ba = function() {
                    this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ya(this, !0)), ha.Za.Ba.call(this)
                }, t.Sb = function() {
                    this.wa || (this.O || this.i || this.f ? ba(this) : this.Hc())
                }, t.Hc = function() {
                    ba(this)
                }, t.getResponse = function() {
                    try {
                        if (!this.a) return null;
                        if ("response" in this.a) return this.a.response;
                        switch (this.m) {
                            case la:
                            case "text":
                                return this.a.responseText;
                            case "arraybuffer":
                                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                        }
                        var t = this.b;
                        return t && t.log(Yo, "Response type " + this.m + " is not supported on this browser", void 0), null
                    } catch (t) {
                        return ia(this.b, "Can not get response: " + t.message), null
                    }
                }, Aa.prototype.cancel = function(t) {
                    var e;
                    this.a ? this.c instanceof Aa && this.c.cancel() : (this.b && (e = this.b, delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())), this.w ? this.w.call(this.s, this) : this.u = !0, this.a || (t = new Ca, Sa(this), ka(this, !1, t)))
                }, Aa.prototype.m = function(t, e) {
                    this.i = !1, ka(this, t, e)
                }, Aa.prototype.then = function(t, e, n) {
                    var i, r, o = new pe(function(t, e) {
                        i = t, r = e
                    });
                    return Na(this, i, function(t) {
                        t instanceof Ca ? o.cancel() : r(t)
                    }), o.then(t, e, n)
                }, Aa.prototype.$goog_Thenable = !0, e(Ra, O), Ra.prototype.message = "Deferred has already fired", Ra.prototype.name = "AlreadyCalledError", e(Ca, O), Ca.prototype.message = "Deferred was canceled", Ca.prototype.name = "CanceledError", Da.prototype.c = function() {
                    throw delete Pa[this.a], this.b
                };
                var Pa = {};

                function La(t) {
                    var e, n, i, r, o = document,
                        a = yt(t).toString(),
                        s = se(document, "SCRIPT"),
                        u = {
                            Tb: s,
                            Ka: void 0
                        },
                        c = new Aa(u),
                        h = window.setTimeout(function() {
                            xa(s, !0);
                            var t = new Va(Ua, "Timeout reached for loading script " + a);
                            Sa(c), ka(c, !1, t)
                        }, 5e3);
                    return u.Ka = h, s.onload = s.onreadystatechange = function() {
                        s.readyState && "loaded" != s.readyState && "complete" != s.readyState || (xa(s, !1, h), Sa(c), ka(c, !0, null))
                    }, s.onerror = function() {
                        xa(s, !0, h);
                        var t = new Va(ja, "Error while loading script " + a);
                        Sa(c), ka(c, !1, t)
                    }, lt(u = {}, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }), ne(s, u), n = t, ft(e = s, "HTMLScriptElement"), e.src = yt(n), null === d && (d = (n = (n = l.document).querySelector && n.querySelector("script[nonce]")) && (n = n.nonce || n.getAttribute("nonce")) && f.test(n) ? n : ""), (n = d) && e.setAttribute("nonce", n), ((r = ((i = o) || document).getElementsByTagName("HEAD")) && 0 != r.length ? r[0] : i.documentElement).appendChild(s), c
                }

                function Ma() {
                    var t;
                    this && this.Tb && ((t = this.Tb) && "SCRIPT" == t.tagName && xa(t, !0, this.Ka))
                }

                function xa(t, e, n) {
                    null != n && l.clearTimeout(n), t.onload = a, t.onerror = a, t.onreadystatechange = a, e && window.setTimeout(function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }, 0)
                }
                var ja = 0,
                    Ua = 1;

                function Va(t, e) {
                    var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e), O.call(this, n), this.code = t
                }

                function Fa(t) {
                    this.f = t
                }

                function qa(t, e, n) {
                    if (this.c = t, t = e || {}, this.u = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout || Ga, this.g = ct(t.secureTokenHeaders || Ba), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.l = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.i = t.firebaseTimeout || Wa, this.a = ct(t.firebaseHeaders || Xa), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == fi(), !(n = l.XMLHttpRequest || n && Wl.default.INTERNAL.node && Wl.default.INTERNAL.node.XMLHttpRequest) && !li()) throw new I("internal-error", "The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0, li() ? this.f = new ra(self) : di() ? this.f = new Fa(n) : this.f = new Ko, this.b = null
                }
                e(Va, O), e(Fa, Vo), Fa.prototype.a = function() {
                    return new this.f
                }, Fa.prototype.b = function() {
                    return {}
                };
                var Ha, Ka = "idToken",
                    Ga = new Di(3e4, 6e4),
                    Ba = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    Wa = new Di(3e4, 6e4),
                    Xa = {
                        "Content-Type": "application/json"
                    };

                function Ja(t, e) {
                    e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
                }

                function Ya(t, e) {
                    e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"])
                }

                function za(t, e, n, i, r, o, a) {
                    var s;
                    (t = ((s = mi(s = yi()) == vi && (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Ht && $t && !(9 < $t)) && !li() ? (Ha = Ha || new pe(function(t, e) {
                        ! function(t, e) {
                            {
                                ((window.gapi || {}).client || {}).request ? t() : (l[Za] = function() {
                                    ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                                }, function(t, e) {
                                    Na(t, null, e, void 0)
                                }(La(wt($a, {
                                    onload: Za
                                })), function() {
                                    e(Error("CORS_UNSUPPORTED"))
                                }))
                            }
                        }(t, e)
                    }), b(t.s, t)) : b(t.w, t))(e, n, i, r, o, a)
                }
                qa.prototype.S = function() {
                    return this.b
                }, qa.prototype.w = function(t, n, e, i, r, o) {
                    if (li() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new I("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a, s = new ha(this.f);
                    o && (s.g = Math.max(0, o), a = setTimeout(function() {
                        s.dispatchEvent("timeout")
                    }, o)), pn(s, "complete", function() {
                        a && clearTimeout(a);
                        var e = null;
                        try {
                            e = JSON.parse(function(e) {
                                try {
                                    return e.a ? e.a.responseText : ""
                                } catch (t) {
                                    return ia(e.b, "Can not get responseText: " + t.message), ""
                                }
                            }(this)) || null
                        } catch (t) {
                            e = null
                        }
                        n && n(e)
                    }), vn(s, "ready", function() {
                        a && clearTimeout(a), je(this)
                    }), vn(s, "timeout", function() {
                        a && clearTimeout(a), je(this), n && n(null)
                    }), pa(s, t, e, i, r)
                };
                var $a = new dt(mt, "https://apis.google.com/js/client.js?onload=%{onload}"),
                    Za = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                function Qa(t, e, n, i, r, o, a) {
                    var s = Cn(e + n);
                    On(s, "key", t.c), a && On(s, "cb", w().toString());
                    var u = "GET" == i;
                    if (u)
                        for (var c in r) r.hasOwnProperty(c) && On(s, c, r[c]);
                    return new pe(function(e, n) {
                        za(t, s.toString(), function(t) {
                            t ? t.error ? n(Js(t, o || {})) : e(t) : n(new I("network-request-failed"))
                        }, i, u ? void 0 : Yn(Ni(r)), t.a, t.i.get())
                    })
                }

                function ts(t) {
                    if ("string" != typeof(t = t.email) || !si.test(t)) throw new I("invalid-email")
                }

                function es(t) {
                    "email" in t && ts(t)
                }

                function ns(t) {
                    if (!t[Ka]) {
                        if (t.mfaPendingCredential) throw new I("multi-factor-auth-required", null, ct(t));
                        throw new I("internal-error")
                    }
                }

                function is(t) {
                    if (t.phoneNumber || t.temporaryProof) {
                        if (!t.phoneNumber || !t.temporaryProof) throw new I("internal-error")
                    } else {
                        if (!t.sessionInfo) throw new I("missing-verification-id");
                        if (!t.code) throw new I("missing-verification-code")
                    }
                }
                qa.prototype.s = function(t, n, i, r, o) {
                    var a = this;
                    Ha.then(function() {
                        window.gapi.client.setApiKey(a.c);
                        var e = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null), window.gapi.client.request({
                            path: t,
                            method: i,
                            body: r,
                            headers: o,
                            authType: "none",
                            callback: function(t) {
                                window.gapi.auth.setToken(e), n && n(t)
                            }
                        })
                    }).o(function(t) {
                        n && n({
                            error: {
                                message: t && t.message || "CORS_UNSUPPORTED"
                            }
                        })
                    })
                }, qa.prototype.vb = function() {
                    return Ws(this, Ls, {})
                }, qa.prototype.xb = function(t, e) {
                    return Ws(this, Ds, {
                        idToken: t,
                        email: e
                    })
                }, qa.prototype.yb = function(t, e) {
                    return Ws(this, Ps, {
                        idToken: t,
                        password: e
                    })
                };
                var rs = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };

                function os(t) {
                    if (!t.phoneVerificationInfo) throw new I("internal-error");
                    if (!t.phoneVerificationInfo.sessionInfo) throw new I("missing-verification-id");
                    if (!t.phoneVerificationInfo.code) throw new I("missing-verification-code")
                }

                function as(t) {
                    if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new I("internal-error")
                }

                function ss(t, e) {
                    return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (Bn(t = new qn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e
                }

                function us(t) {
                    var e = null;
                    if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = Uo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = Uo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = Uo(t)) : t.errorMessage && (e = Xs(t.errorMessage)), e) throw e;
                    ns(t)
                }

                function cs(t, e) {
                    return e.returnIdpCredential = !0, Ws(t, js, e)
                }

                function hs(t, e) {
                    return e.returnIdpCredential = !0, Ws(t, Vs, e)
                }

                function ls(t, e) {
                    return e.returnIdpCredential = !0, e.autoCreate = !1, Ws(t, Us, e)
                }

                function fs(t) {
                    if (!t.oobCode) throw new I("invalid-action-code")
                }(t = qa.prototype).zb = function(t, i) {
                    var r = {
                            idToken: t
                        },
                        o = [];
                    return st(rs, function(t, e) {
                        var n = i[e];
                        null === n ? o.push(t) : e in i && (r[e] = n)
                    }), o.length && (r.deleteAttribute = o), Ws(this, Ds, r)
                }, t.rb = function(t, e) {
                    return lt(t = {
                        requestType: "PASSWORD_RESET",
                        email: t
                    }, e), Ws(this, Ns, t)
                }, t.sb = function(t, e) {
                    return lt(t = {
                        requestType: "EMAIL_SIGNIN",
                        email: t
                    }, e), Ws(this, As, t)
                }, t.qb = function(t, e) {
                    return lt(t = {
                        requestType: "VERIFY_EMAIL",
                        idToken: t
                    }, e), Ws(this, ks, t)
                }, t.Ab = function(t, e, n) {
                    return lt(t = {
                        requestType: "VERIFY_AND_CHANGE_EMAIL",
                        idToken: t,
                        newEmail: e
                    }, n), Ws(this, Ss, t)
                }, t.cb = function(t) {
                    return Ws(this, Hs, t)
                }, t.jb = function(t, e) {
                    return Ws(this, Rs, {
                        oobCode: t,
                        newPassword: e
                    })
                }, t.Pa = function(t) {
                    return Ws(this, ps, {
                        oobCode: t
                    })
                }, t.fb = function(t) {
                    return Ws(this, ds, {
                        oobCode: t
                    })
                };
                var ds = {
                        endpoint: "setAccountInfo",
                        A: fs,
                        Y: "email",
                        C: !0
                    },
                    ps = {
                        endpoint: "resetPassword",
                        A: fs,
                        G: function(t) {
                            var e = t.requestType;
                            if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new I("internal-error")
                        },
                        C: !0
                    },
                    vs = {
                        endpoint: "signupNewUser",
                        A: function(t) {
                            if (ts(t), !t.password) throw new I("weak-password")
                        },
                        G: ns,
                        U: !0,
                        C: !0
                    },
                    ms = {
                        endpoint: "createAuthUri",
                        C: !0
                    },
                    gs = {
                        endpoint: "deleteAccount",
                        M: ["idToken"]
                    },
                    bs = {
                        endpoint: "setAccountInfo",
                        M: ["idToken", "deleteProvider"],
                        A: function(t) {
                            if ("array" != n(t.deleteProvider)) throw new I("internal-error")
                        }
                    },
                    ys = {
                        endpoint: "emailLinkSignin",
                        M: ["email", "oobCode"],
                        A: ts,
                        G: ns,
                        U: !0,
                        C: !0
                    },
                    ws = {
                        endpoint: "emailLinkSignin",
                        M: ["idToken", "email", "oobCode"],
                        A: ts,
                        G: ns,
                        U: !0
                    },
                    Is = {
                        endpoint: "accounts/mfaEnrollment:finalize",
                        M: ["idToken", "phoneVerificationInfo"],
                        A: os,
                        G: ns,
                        C: !0,
                        La: !0
                    },
                    Ts = {
                        endpoint: "accounts/mfaSignIn:finalize",
                        M: ["mfaPendingCredential", "phoneVerificationInfo"],
                        A: os,
                        G: ns,
                        C: !0,
                        La: !0
                    },
                    Es = {
                        endpoint: "getAccountInfo"
                    },
                    As = {
                        endpoint: "getOobConfirmationCode",
                        M: ["requestType"],
                        A: function(t) {
                            if ("EMAIL_SIGNIN" != t.requestType) throw new I("internal-error");
                            ts(t)
                        },
                        Y: "email",
                        C: !0
                    },
                    ks = {
                        endpoint: "getOobConfirmationCode",
                        M: ["idToken", "requestType"],
                        A: function(t) {
                            if ("VERIFY_EMAIL" != t.requestType) throw new I("internal-error")
                        },
                        Y: "email",
                        C: !0
                    },
                    Ss = {
                        endpoint: "getOobConfirmationCode",
                        M: ["idToken", "newEmail", "requestType"],
                        A: function(t) {
                            if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new I("internal-error")
                        },
                        Y: "email",
                        C: !0
                    },
                    Ns = {
                        endpoint: "getOobConfirmationCode",
                        M: ["requestType"],
                        A: function(t) {
                            if ("PASSWORD_RESET" != t.requestType) throw new I("internal-error");
                            ts(t)
                        },
                        Y: "email",
                        C: !0
                    },
                    _s = {
                        hb: !0,
                        endpoint: "getProjectConfig",
                        Rb: "GET"
                    },
                    Os = {
                        hb: !0,
                        endpoint: "getRecaptchaParam",
                        Rb: "GET",
                        G: function(t) {
                            if (!t.recaptchaSiteKey) throw new I("internal-error")
                        }
                    },
                    Rs = {
                        endpoint: "resetPassword",
                        A: fs,
                        Y: "email",
                        C: !0
                    },
                    Cs = {
                        endpoint: "sendVerificationCode",
                        M: ["phoneNumber", "recaptchaToken"],
                        Y: "sessionInfo",
                        C: !0
                    },
                    Ds = {
                        endpoint: "setAccountInfo",
                        M: ["idToken"],
                        A: es,
                        U: !0
                    },
                    Ps = {
                        endpoint: "setAccountInfo",
                        M: ["idToken"],
                        A: function(t) {
                            if (es(t), !t.password) throw new I("weak-password")
                        },
                        G: ns,
                        U: !0
                    },
                    Ls = {
                        endpoint: "signupNewUser",
                        G: ns,
                        U: !0,
                        C: !0
                    },
                    Ms = {
                        endpoint: "accounts/mfaEnrollment:start",
                        M: ["idToken", "phoneEnrollmentInfo"],
                        A: function(t) {
                            if (!t.phoneEnrollmentInfo) throw new I("internal-error");
                            if (!t.phoneEnrollmentInfo.phoneNumber) throw new I("missing-phone-number");
                            if (!t.phoneEnrollmentInfo.recaptchaToken) throw new I("missing-app-credential")
                        },
                        G: function(t) {
                            if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new I("internal-error")
                        },
                        C: !0,
                        La: !0
                    },
                    xs = {
                        endpoint: "accounts/mfaSignIn:start",
                        M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                        A: function(t) {
                            if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new I("missing-app-credential")
                        },
                        G: function(t) {
                            if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new I("internal-error")
                        },
                        C: !0,
                        La: !0
                    },
                    js = {
                        endpoint: "verifyAssertion",
                        A: as,
                        Wa: ss,
                        G: us,
                        U: !0,
                        C: !0
                    },
                    Us = {
                        endpoint: "verifyAssertion",
                        A: as,
                        Wa: ss,
                        G: function(t) {
                            if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new I("user-not-found");
                            if (t.errorMessage) throw Xs(t.errorMessage);
                            ns(t)
                        },
                        U: !0,
                        C: !0
                    },
                    Vs = {
                        endpoint: "verifyAssertion",
                        A: function(t) {
                            if (as(t), !t.idToken) throw new I("internal-error")
                        },
                        Wa: ss,
                        G: us,
                        U: !0
                    },
                    Fs = {
                        endpoint: "verifyCustomToken",
                        A: function(t) {
                            if (!t.token) throw new I("invalid-custom-token")
                        },
                        G: ns,
                        U: !0,
                        C: !0
                    },
                    qs = {
                        endpoint: "verifyPassword",
                        A: function(t) {
                            if (ts(t), !t.password) throw new I("wrong-password")
                        },
                        G: ns,
                        U: !0,
                        C: !0
                    },
                    Hs = {
                        endpoint: "verifyPhoneNumber",
                        A: is,
                        G: ns,
                        C: !0
                    },
                    Ks = {
                        endpoint: "verifyPhoneNumber",
                        A: function(t) {
                            if (!t.idToken) throw new I("internal-error");
                            is(t)
                        },
                        G: function(t) {
                            if (t.temporaryProof) throw t.code = "credential-already-in-use", Uo(t);
                            ns(t)
                        }
                    },
                    Gs = {
                        Eb: {
                            USER_NOT_FOUND: "user-not-found"
                        },
                        endpoint: "verifyPhoneNumber",
                        A: is,
                        G: ns,
                        C: !0
                    },
                    Bs = {
                        endpoint: "accounts/mfaEnrollment:withdraw",
                        M: ["idToken", "mfaEnrollmentId"],
                        G: function(t) {
                            if (!!t[Ka] ^ !!t.refreshToken) throw new I("internal-error")
                        },
                        C: !0,
                        La: !0
                    };

                function Ws(t, e, n) {
                    if (! function(t, e) {
                            if (!e || !e.length) return 1;
                            if (t) {
                                for (var n = 0; n < e.length; n++) {
                                    var i = t[e[n]];
                                    if (null == i || "" === i) return
                                }
                                return 1
                            }
                        }(n, e.M)) return Te(new I("internal-error"));
                    var i, r = !!e.La,
                        o = e.Rb || "POST";
                    return Ie(n).then(e.A).then(function() {
                        return e.U && (n.returnSecureToken = !0), e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b), Qa(t, r ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1)
                    }).then(function(t) {
                        return i = t, e.Wa ? e.Wa(n, i) : i
                    }).then(e.G).then(function() {
                        if (!e.Y) return i;
                        if (!(e.Y in i)) throw new I("internal-error");
                        return i[e.Y]
                    })
                }

                function Xs(t) {
                    return Js({
                        error: {
                            errors: [{
                                message: t
                            }],
                            code: 400,
                            message: t
                        }
                    })
                }

                function Js(t, e) {
                    var n, i = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                        r = {
                            keyInvalid: "invalid-api-key",
                            ipRefererBlocked: "app-not-authorized"
                        };
                    if (i = r[i] ? new I(r[i]) : null) return i;
                    for (n in i = t.error && t.error.message || "", lt(r = {
                            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                            CREDENTIAL_MISMATCH: "custom-token-mismatch",
                            MISSING_CUSTOM_TOKEN: "internal-error",
                            INVALID_IDENTIFIER: "invalid-email",
                            MISSING_CONTINUE_URI: "internal-error",
                            INVALID_EMAIL: "invalid-email",
                            INVALID_PASSWORD: "wrong-password",
                            USER_DISABLED: "user-disabled",
                            MISSING_PASSWORD: "internal-error",
                            EMAIL_EXISTS: "email-already-in-use",
                            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                            INVALID_IDP_RESPONSE: "invalid-credential",
                            INVALID_PENDING_TOKEN: "invalid-credential",
                            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                            INVALID_SENDER: "invalid-sender",
                            EMAIL_NOT_FOUND: "user-not-found",
                            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                            EXPIRED_OOB_CODE: "expired-action-code",
                            INVALID_OOB_CODE: "invalid-action-code",
                            MISSING_OOB_CODE: "internal-error",
                            INVALID_PROVIDER_ID: "invalid-provider-id",
                            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                            INVALID_ID_TOKEN: "invalid-user-token",
                            TOKEN_EXPIRED: "user-token-expired",
                            USER_NOT_FOUND: "user-token-expired",
                            CORS_UNSUPPORTED: "cors-unsupported",
                            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                            INVALID_APP_ID: "invalid-app-id",
                            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                            WEAK_PASSWORD: "weak-password",
                            OPERATION_NOT_ALLOWED: "operation-not-allowed",
                            USER_CANCELLED: "user-cancelled",
                            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                            INVALID_APP_CREDENTIAL: "invalid-app-credential",
                            INVALID_CODE: "invalid-verification-code",
                            INVALID_PHONE_NUMBER: "invalid-phone-number",
                            INVALID_SESSION_INFO: "invalid-verification-id",
                            INVALID_TEMPORARY_PROOF: "invalid-credential",
                            MISSING_APP_CREDENTIAL: "missing-app-credential",
                            MISSING_CODE: "missing-verification-code",
                            MISSING_PHONE_NUMBER: "missing-phone-number",
                            MISSING_SESSION_INFO: "missing-verification-id",
                            QUOTA_EXCEEDED: "quota-exceeded",
                            SESSION_EXPIRED: "code-expired",
                            REJECTED_CREDENTIAL: "rejected-credential",
                            INVALID_CONTINUE_URI: "invalid-continue-uri",
                            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                            INVALID_CERT_HASH: "invalid-cert-hash",
                            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                            INVALID_TENANT_ID: "invalid-tenant-id",
                            TENANT_ID_MISMATCH: "tenant-id-mismatch",
                            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                            UNVERIFIED_EMAIL: "unverified-email"
                        }, e || {}), e = (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, r)
                        if (0 === i.indexOf(n)) return new I(r[n], e);
                    return !e && t && (e = Si(t)), new I("internal-error", e)
                }

                function Ys(t) {
                    var o;
                    this.b = t, this.a = null, this.nb = (o = this, (Qs || (Qs = new pe(function(t, e) {
                        function n() {
                            Ci(), wi("gapi.load")("gapi.iframes", {
                                callback: t,
                                ontimeout: function() {
                                    Ci(), e(Error("Network Error"))
                                },
                                timeout: $s.get()
                            })
                        }
                        var i;
                        wi("gapi.iframes.Iframe") ? t() : wi("gapi.load") ? n() : (i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString(), l[i] = function() {
                            wi("gapi.load") ? n() : e(Error("Network Error"))
                        }, Ie(La(i = wt(zs, {
                            onload: i
                        }))).o(function() {
                            e(Error("Network Error"))
                        }))
                    }).o(function(t) {
                        throw Qs = null, t
                    }))).then(function() {
                        return new pe(function(i, r) {
                            wi("gapi.iframes.getContext")().open({
                                where: document.body,
                                url: o.b,
                                messageHandlersFilter: wi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                attributes: {
                                    style: {
                                        position: "absolute",
                                        top: "-100px",
                                        width: "1px",
                                        height: "1px"
                                    }
                                },
                                dontclear: !0
                            }, function(t) {
                                function e() {
                                    clearTimeout(n), i()
                                }
                                o.a = t, o.a.restyle({
                                    setHideOnLeave: !1
                                });
                                var n = setTimeout(function() {
                                    r(Error("Network Error"))
                                }, Zs.get());
                                t.ping(e).then(e, function() {
                                    r(Error("Network Error"))
                                })
                            })
                        })
                    }))
                }
                var zs = new dt(mt, "https://apis.google.com/js/api.js?onload=%{onload}"),
                    $s = new Di(3e4, 6e4),
                    Zs = new Di(5e3, 15e3),
                    Qs = null;

                function tu(t, e, n) {
                    this.i = t, this.g = e, this.h = n, this.f = null, this.a = Dn(this.i, "/__/auth/iframe"), On(this.a, "apiKey", this.g), On(this.a, "appName", this.h), this.b = null, this.c = []
                }

                function eu(t, e, n, i, r) {
                    this.s = t, this.m = e, this.c = n, this.u = i, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null
                }

                function nu(t) {
                    try {
                        return Wl.default.app(t).auth().Ea()
                    } catch (t) {
                        return []
                    }
                }

                function iu(t, e, n, i, r) {
                    this.u = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.m = this.s = this.w = null, this.g = [], this.l = this.a = null
                }

                function ru(t) {
                    var s = ei();
                    return Ws(t, _s, {}).then(function(t) {
                        return t.authorizedDomains || []
                    }).then(function(t) {
                        t: {
                            for (var e = (n = Cn(s)).f, n = n.b, i = 0; i < t.length; i++) {
                                var r = t[i],
                                    o = n,
                                    a = e;
                                if (o = 0 == r.indexOf("chrome-extension://") ? Cn(r).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ai.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) {
                                    t = !0;
                                    break t
                                }
                            }
                            t = !1
                        }
                        if (!t) throw new xo(ei())
                    })
                }

                function ou(r) {
                    return r.l || (r.l = ui().then(function() {
                        var t, e, n, i;
                        r.s || (t = r.c, e = r.h, n = nu(r.b), (i = new tu(r.u, r.f, r.b)).f = t, i.b = e, i.c = W(n || []), r.s = i.toString()), r.i = new Ys(r.s),
                            function(i) {
                                if (!i.i) throw Error("IfcHandler must be initialized!");
                                ! function(t, e) {
                                    t.nb.then(function() {
                                        t.a.register("authEvent", e, wi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                    })
                                }(i.i, function(t) {
                                    var e = {};
                                    if (t && t.authEvent) {
                                        var n = !1;
                                        for (t = Do(t.authEvent), e = 0; e < i.g.length; e++) n = i.g[e](t) || n;
                                        return (e = {}).status = n ? "ACK" : "ERROR", Ie(e)
                                    }
                                    return e.status = "ERROR", Ie(e)
                                })
                            }(r)
                    })), r.l
                }

                function au(t) {
                    return t.m || (t.w = t.c ? bi(t.c, nu(t.b)) : null, t.m = new qa(t.f, N(t.h), t.w)), t.m
                }

                function su(t, e, n, i, r, o, a, s, u, c, h) {
                    return (t = new eu(t, e, n, i, r)).l = o, t.g = a, t.i = s, t.b = ct(u || null), t.f = c, t.ub(h).toString()
                }

                function uu(t) {
                    if (this.a = t || Wl.default.INTERNAL.reactNative && Wl.default.INTERNAL.reactNative.AsyncStorage, !this.a) throw new I("internal-error", "The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }

                function cu(t) {
                    this.b = t, this.a = {}, this.f = b(this.c, this)
                }
                tu.prototype.toString = function() {
                    return this.f ? On(this.a, "v", this.f) : Gn(this.a.a, "v"), this.b ? On(this.a, "eid", this.b) : Gn(this.a.a, "eid"), this.c.length ? On(this.a, "fw", this.c.join(",")) : Gn(this.a.a, "fw"), this.a.toString()
                }, eu.prototype.ub = function(t) {
                    return this.h = t, this
                }, eu.prototype.toString = function() {
                    var t = Dn(this.s, "/__/auth/handler");
                    if (On(t, "apiKey", this.m), On(t, "appName", this.c), On(t, "authType", this.u), this.a.isOAuthProvider) {
                        var e, n = this.a;
                        try {
                            var i = Wl.default.app(this.c).auth().ja()
                        } catch (t) {
                            i = null
                        }
                        for (e in n.kb = i, On(t, "providerId", this.a.providerId), i = Ni((n = this.a).Fb)) i[e] = i[e].toString();
                        e = n.Oc, i = ct(i);
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            o in i && delete i[o]
                        }
                        n.lb && n.kb && !i[n.lb] && (i[n.lb] = n.kb), ut(i) || On(t, "customParameters", Si(i))
                    }
                    if ("function" == typeof this.a.Nb && ((n = this.a.Nb()).length && On(t, "scopes", n.join(","))), this.l ? On(t, "redirectUrl", this.l) : Gn(t.a, "redirectUrl"), this.g ? On(t, "eventId", this.g) : Gn(t.a, "eventId"), this.i ? On(t, "v", this.i) : Gn(t.a, "v"), this.b)
                        for (var a in this.b) this.b.hasOwnProperty(a) && !Rn(t, a) && On(t, a, this.b[a]);
                    return this.h ? On(t, "tid", this.h) : Gn(t.a, "tid"), this.f ? On(t, "eid", this.f) : Gn(t.a, "eid"), (a = nu(this.c)).length && On(t, "fw", a.join(",")), t.toString()
                }, (t = iu.prototype).Lb = function(e, n, t) {
                    var i = new I("popup-closed-by-user"),
                        r = new I("web-storage-unsupported"),
                        o = this,
                        a = !1;
                    return this.ka().then(function() {
                        var t, i;
                        i = {
                            type: "webStorageSupport"
                        }, ou(t = o).then(function() {
                            return e = t.i, n = i, e.nb.then(function() {
                                return new pe(function(t) {
                                    e.a.send(n.type, n, t, wi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                })
                            });
                            var e, n
                        }).then(function(t) {
                            if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
                            throw Error()
                        }).then(function(t) {
                            t || (e && ri(e), n(r), a = !0)
                        })
                    }).o(function() {}).then(function() {
                        if (!a) return n = e, new pe(function(e) {
                            return function t() {
                                bn(2e3).then(function() {
                                    return n && !n.closed ? t() : void e()
                                })
                            }()
                        });
                        var n
                    }).then(function() {
                        if (!a) return bn(t).then(function() {
                            n(i)
                        })
                    })
                }, t.Ub = function() {
                    var t = yi();
                    return !ki(t) && !Ri(t)
                }, t.Qb = function() {
                    return !1
                }, t.Jb = function(e, t, n, i, r, o, a, s) {
                    if (!e) return Te(new I("popup-blocked"));
                    if (a && !ki()) return this.ka().o(function(t) {
                        ri(e), r(t)
                    }), i(), Ie();
                    this.a || (this.a = ru(au(this)));
                    var u = this;
                    return this.a.then(function() {
                        var t = u.ka().o(function(t) {
                            throw ri(e), r(t), t
                        });
                        return i(), t
                    }).then(function() {
                        Ro(n), a || ni(su(u.u, u.f, u.b, t, n, null, o, u.c, void 0, u.h, s), e)
                    }).o(function(t) {
                        throw "auth/network-request-failed" == t.code && (u.a = null), t
                    })
                }, t.Kb = function(t, e, n, i) {
                    this.a || (this.a = ru(au(this)));
                    var r = this;
                    return this.a.then(function() {
                        Ro(e), ni(su(r.u, r.f, r.b, t, e, ei(), n, r.c, void 0, r.h, i))
                    }).o(function(t) {
                        throw "auth/network-request-failed" == t.code && (r.a = null), t
                    })
                }, t.ka = function() {
                    var t = this;
                    return ou(this).then(function() {
                        return t.i.nb
                    }).o(function() {
                        throw t.a = null, new I("network-request-failed")
                    })
                }, t.Xb = function() {
                    return !0
                }, t.Ca = function(t) {
                    this.g.push(t)
                }, t.Qa = function(e) {
                    G(this.g, function(t) {
                        return t == e
                    })
                }, (t = uu.prototype).get = function(t) {
                    return Ie(this.a.getItem(t)).then(function(t) {
                        return t && _i(t)
                    })
                }, t.set = function(t, e) {
                    return Ie(this.a.setItem(t, Si(e)))
                }, t.T = function(t) {
                    return Ie(this.a.removeItem(t))
                }, t.ba = function() {}, t.ha = function() {};
                var hu, lu = [];

                function fu(t, e, n) {
                    ut(t.a) && t.b.addEventListener("message", t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n)
                }

                function du(t) {
                    this.a = t
                }

                function pu(t) {
                    this.c = t, this.b = !1, this.a = []
                }

                function vu(i, t, e, n) {
                    var r, o, a, s, u = e || {},
                        c = null;
                    if (i.b) return Te(Error("connection_unavailable"));
                    var h = n ? 800 : 50,
                        l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                    return new pe(function(e, n) {
                        l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() {
                            n(Error("unsupported_event"))
                        }, h), c = {
                            messageChannel: l,
                            onMessage: o = function(t) {
                                t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() {
                                    n(Error("timeout"))
                                }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response"))))
                            }
                        }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({
                            eventType: t,
                            eventId: r,
                            data: u
                        }, [l.port2])) : n(Error("connection_unavailable"))
                    }).then(function(t) {
                        return mu(i, c), t
                    }).o(function(t) {
                        throw mu(i, c), t
                    })
                }

                function mu(t, e) {
                    var n, i;
                    e && (n = e.messageChannel, i = e.onMessage, n && (n.port1.removeEventListener("message", i), n.port1.close()), G(t.a, function(t) {
                        return t == e
                    }))
                }

                function gu() {
                    if (!wu()) throw new I("web-storage-unsupported");
                    this.c = {}, this.a = [], this.b = 0, this.u = l.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.s = !1, this.h = null;
                    var t, e, n, i = this;
                    li() && self ? (this.l = (n = li() ? self : null, U(lu, function(t) {
                        t.b == n && (e = t)
                    }), e || (e = new cu(n), lu.push(e)), e), fu(this.l, "keyChanged", function(t, n) {
                        return ku(i).then(function(e) {
                            return 0 < e.length && U(i.a, function(t) {
                                t(e)
                            }), {
                                keyProcessed: H(e, n.key)
                            }
                        })
                    }), fu(this.l, "ping", function() {
                        return Ie(["keyChanged"])
                    })) : ((t = l.navigator) && t.serviceWorker ? Ie().then(function() {
                        return t.serviceWorker.ready
                    }).then(function(t) {
                        return t.active || null
                    }).o(function() {
                        return null
                    }) : Ie(null)).then(function(t) {
                        (i.h = t) && (i.g = new pu(new du(t)), vu(i.g, "ping", null, !0).then(function(t) {
                            t[0].fulfilled && H(t[0].value, "keyChanged") && (i.s = !0)
                        }).o(function() {}))
                    })
                }

                function bu(r) {
                    return new pe(function(e, n) {
                        var t = r.u.open("firebaseLocalStorageDb", 1);
                        t.onerror = function(t) {
                            try {
                                t.preventDefault()
                            } catch (t) {}
                            n(Error(t.target.error))
                        }, t.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (t) {
                                n(t)
                            }
                        }, t.onsuccess = function(t) {
                            var i;
                            (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new pe(function(t, e) {
                                var n = i.u.deleteDatabase("firebaseLocalStorageDb");
                                n.onsuccess = function() {
                                    t()
                                }, n.onerror = function(t) {
                                    e(Error(t.target.error))
                                }
                            }).then(function() {
                                return bu(r)
                            }).then(function(t) {
                                e(t)
                            }).o(function(t) {
                                n(t)
                            }))
                        }
                    })
                }

                function yu(t) {
                    return t.m || (t.m = bu(t)), t.m
                }

                function wu() {
                    try {
                        return l.indexedDB
                    } catch (t) {
                        return
                    }
                }

                function Iu(t) {
                    return t.objectStore("firebaseLocalStorage")
                }

                function Tu(t, e) {
                    return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
                }

                function Eu(t) {
                    return new pe(function(e, n) {
                        t.onsuccess = function(t) {
                            t && t.target ? e(t.target.result) : e()
                        }, t.onerror = function(t) {
                            n(t.target.error)
                        }
                    })
                }

                function Au(t, e) {
                    return t.g && t.h && ((n = l.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? vu(t.g, "keyChanged", {
                        key: e
                    }, t.s).then(function() {}).o(function() {}) : Ie();
                    var n
                }

                function ku(i) {
                    return yu(i).then(function(t) {
                        var r = Iu(Tu(t, !1));
                        return r.getAll ? Eu(r.getAll()) : new pe(function(e, n) {
                            var i = [],
                                t = r.openCursor();
                            t.onsuccess = function(t) {
                                (t = t.target.result) ? (i.push(t.value), t.continue()) : e(i)
                            }, t.onerror = function(t) {
                                n(t.target.error)
                            }
                        })
                    }).then(function(t) {
                        var e = {},
                            n = [];
                        if (0 == i.b) {
                            for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                            n = function t(e, n) {
                                var i, r = [];
                                for (i in e) i in n && typeof e[i] == typeof n[i] ? "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i);
                                for (i in n) i in e || r.push(i);
                                return r
                            }(i.c, e), i.c = e
                        }
                        return n
                    })
                }

                function Su(t) {
                    t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null)
                }

                function Nu(t) {
                    var i = this,
                        r = null;
                    this.a = [], this.type = "indexedDB", this.c = t, this.b = Ie().then(function() {
                        if (wu()) {
                            var e = Oi(),
                                n = "__sak" + e;
                            return hu = hu || new gu, (r = hu).set(n, e).then(function() {
                                return r.get(n)
                            }).then(function(t) {
                                if (t !== e) throw Error("indexedDB not supported!");
                                return r.T(n)
                            }).then(function() {
                                return r
                            }).o(function() {
                                return i.c
                            })
                        }
                        return i.c
                    }).then(function(t) {
                        return i.type = t.type, t.ba(function(e) {
                            U(i.a, function(t) {
                                t(e)
                            })
                        }), t
                    })
                }

                function _u() {
                    this.a = {}, this.type = "inMemory"
                }

                function Ou() {
                    if (! function() {
                            var t = "Node" == fi();
                            if (!(t = Ru() || t && Wl.default.INTERNAL.node && Wl.default.INTERNAL.node.localStorage)) return !1;
                            try {
                                return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                            } catch (t) {
                                return !1
                            }
                        }()) {
                        if ("Node" == fi()) throw new I("internal-error", "The LocalStorage compatibility library was not found.");
                        throw new I("web-storage-unsupported")
                    }
                    this.a = Ru() || Wl.default.INTERNAL.node.localStorage, this.type = "localStorage"
                }

                function Ru() {
                    try {
                        var t = l.localStorage,
                            e = Oi();
                        return t && (t.setItem(e, "1"), t.removeItem(e)), t
                    } catch (t) {
                        return null
                    }
                }

                function Cu() {
                    this.type = "nullStorage"
                }

                function Du() {
                    if (! function() {
                            var t = "Node" == fi();
                            if (!(t = Pu() || t && Wl.default.INTERNAL.node && Wl.default.INTERNAL.node.sessionStorage)) return !1;
                            try {
                                return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                            } catch (t) {
                                return !1
                            }
                        }()) {
                        if ("Node" == fi()) throw new I("internal-error", "The SessionStorage compatibility library was not found.");
                        throw new I("web-storage-unsupported")
                    }
                    this.a = Pu() || Wl.default.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
                }

                function Pu() {
                    try {
                        var t = l.sessionStorage,
                            e = Oi();
                        return t && (t.setItem(e, "1"), t.removeItem(e)), t
                    } catch (t) {
                        return null
                    }
                }

                function Lu() {
                    var t = {};
                    t.Browser = ju, t.Node = Uu, t.ReactNative = Vu, t.Worker = Fu, this.a = t[fi()]
                }
                cu.prototype.c = function(n) {
                    var e, i = n.data.eventType,
                        r = n.data.eventId,
                        t = this.a[i];
                    t && 0 < t.length && (n.ports[0].postMessage({
                        status: "ack",
                        eventId: r,
                        eventType: i,
                        response: null
                    }), e = [], U(t, function(t) {
                        e.push(Ie().then(function() {
                            return t(n.origin, n.data.data)
                        }))
                    }), Ae(e).then(function(t) {
                        var e = [];
                        U(t, function(t) {
                            e.push({
                                fulfilled: t.Mb,
                                value: t.value,
                                reason: t.reason ? t.reason.message : void 0
                            })
                        }), U(e, function(t) {
                            for (var e in t) void 0 === t[e] && delete t[e]
                        }), n.ports[0].postMessage({
                            status: "done",
                            eventId: r,
                            eventType: i,
                            response: e
                        })
                    }))
                }, du.prototype.postMessage = function(t, e) {
                    this.a.postMessage(t, e)
                }, pu.prototype.close = function() {
                    for (; 0 < this.a.length;) mu(this, this.a[0]);
                    this.b = !0
                }, (t = gu.prototype).set = function(n, i) {
                    var r, o = !1,
                        a = this;
                    return yu(this).then(function(t) {
                        return Eu((t = Iu(Tu(r = t, !0))).get(n))
                    }).then(function(t) {
                        var e = Iu(Tu(r, !0));
                        return t ? (t.value = i, Eu(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = i, Eu(e.add(t)))
                    }).then(function() {
                        return a.c[n] = i, Au(a, n)
                    }).ma(function() {
                        o && a.b--
                    })
                }, t.get = function(e) {
                    return yu(this).then(function(t) {
                        return Eu(Iu(Tu(t, !1)).get(e))
                    }).then(function(t) {
                        return t && t.value
                    })
                }, t.T = function(e) {
                    var n = !1,
                        i = this;
                    return yu(this).then(function(t) {
                        return n = !0, i.b++, Eu(Iu(Tu(t, !0)).delete(e))
                    }).then(function() {
                        return delete i.c[e], Au(i, e)
                    }).ma(function() {
                        n && i.b--
                    })
                }, t.ba = function(t) {
                    var n;
                    0 == this.a.length && (Su(n = this), function e() {
                        n.f = setTimeout(function() {
                            n.i = ku(n).then(function(e) {
                                0 < e.length && U(n.a, function(t) {
                                    t(e)
                                })
                            }).then(function() {
                                e()
                            }).o(function(t) {
                                "STOP_EVENT" != t.message && e()
                            })
                        }, 800)
                    }()), this.a.push(t)
                }, t.ha = function(e) {
                    G(this.a, function(t) {
                        return t == e
                    }), 0 == this.a.length && Su(this)
                }, (t = Nu.prototype).get = function(e) {
                    return this.b.then(function(t) {
                        return t.get(e)
                    })
                }, t.set = function(e, n) {
                    return this.b.then(function(t) {
                        return t.set(e, n)
                    })
                }, t.T = function(e) {
                    return this.b.then(function(t) {
                        return t.T(e)
                    })
                }, t.ba = function(t) {
                    this.a.push(t)
                }, t.ha = function(e) {
                    G(this.a, function(t) {
                        return t == e
                    })
                }, (t = _u.prototype).get = function(t) {
                    return Ie(this.a[t])
                }, t.set = function(t, e) {
                    return this.a[t] = e, Ie()
                }, t.T = function(t) {
                    return delete this.a[t], Ie()
                }, t.ba = function() {}, t.ha = function() {}, (t = Ou.prototype).get = function(t) {
                    var e = this;
                    return Ie().then(function() {
                        return _i(e.a.getItem(t))
                    })
                }, t.set = function(e, n) {
                    var i = this;
                    return Ie().then(function() {
                        var t = Si(n);
                        null === t ? i.T(e) : i.a.setItem(e, t)
                    })
                }, t.T = function(t) {
                    var e = this;
                    return Ie().then(function() {
                        e.a.removeItem(t)
                    })
                }, t.ba = function(t) {
                    l.window && tn(l.window, "storage", t)
                }, t.ha = function(t) {
                    l.window && rn(l.window, "storage", t)
                }, (t = Cu.prototype).get = function() {
                    return Ie(null)
                }, t.set = function() {
                    return Ie()
                }, t.T = function() {
                    return Ie()
                }, t.ba = function() {}, t.ha = function() {}, (t = Du.prototype).get = function(t) {
                    var e = this;
                    return Ie().then(function() {
                        return _i(e.a.getItem(t))
                    })
                }, t.set = function(e, n) {
                    var i = this;
                    return Ie().then(function() {
                        var t = Si(n);
                        null === t ? i.T(e) : i.a.setItem(e, t)
                    })
                }, t.T = function(t) {
                    var e = this;
                    return Ie().then(function() {
                        e.a.removeItem(t)
                    })
                }, t.ba = function() {}, t.ha = function() {};
                var Mu, xu, ju = {
                        F: Ou,
                        $a: Du
                    },
                    Uu = {
                        F: Ou,
                        $a: Du
                    },
                    Vu = {
                        F: uu,
                        $a: Cu
                    },
                    Fu = {
                        F: Ou,
                        $a: Cu
                    },
                    qu = {
                        od: "local",
                        NONE: "none",
                        qd: "session"
                    };

                function Hu() {
                    var t = !(Ri(yi()) || !hi()),
                        e = ki(),
                        n = Ii();
                    this.m = t, this.h = e, this.l = n, this.a = {}, t = Mu = Mu || new Lu;
                    try {
                        this.g = !ti() && Mi() || !l.indexedDB ? new t.a.F : new Nu(li() ? new _u : new t.a.F)
                    } catch (t) {
                        this.g = new _u, this.h = !0
                    }
                    try {
                        this.i = new t.a.$a
                    } catch (t) {
                        this.i = new _u
                    }
                    this.u = new _u, this.f = b(this.Vb, this), this.b = {}
                }

                function Ku() {
                    return xu = xu || new Hu
                }

                function Gu(t, e) {
                    switch (e) {
                        case "session":
                            return t.i;
                        case "none":
                            return t.u;
                        default:
                            return t.g
                    }
                }

                function Bu(t, e) {
                    return "firebase:" + t.name + (e ? ":" + e : "")
                }

                function Wu(t, e, n) {
                    return n = Bu(e, n), "local" == e.F && (t.b[n] = null), Gu(t, e.F).T(n)
                }

                function Xu(t) {
                    t.c && (clearInterval(t.c), t.c = null)
                }

                function Ju(t) {
                    this.a = t, this.b = Ku()
                }(t = Hu.prototype).get = function(t, e) {
                    return Gu(this, t.F).get(Bu(t, e))
                }, t.set = function(e, t, n) {
                    var i = Bu(e, n),
                        r = this,
                        o = Gu(this, e.F);
                    return o.set(i, t).then(function() {
                        return o.get(i)
                    }).then(function(t) {
                        "local" == e.F && (r.b[i] = t)
                    })
                }, t.addListener = function(t, e, n) {
                    var i;
                    t = Bu(t, e), this.l && (this.b[t] = l.localStorage.getItem(t)), ut(this.a) && (Gu(this, "local").ba(this.f), this.h || (ti() || !Mi()) && l.indexedDB || !this.l || (Xu(i = this), i.c = setInterval(function() {
                        for (var t in i.a) {
                            var e = l.localStorage.getItem(t),
                                n = i.b[t];
                            e != n && (i.b[t] = e, e = new Ke({
                                type: "storage",
                                key: t,
                                target: window,
                                oldValue: n,
                                newValue: e,
                                a: !0
                            }), i.Vb(e))
                        }
                    }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n)
                }, t.removeListener = function(t, e, n) {
                    t = Bu(t, e), this.a[t] && (G(this.a[t], function(t) {
                        return t == n
                    }), 0 == this.a[t].length && delete this.a[t]), ut(this.a) && (Gu(this, "local").ha(this.f), Xu(this))
                }, t.Vb = function(t) {
                    if (t && t.f) {
                        var e = t.a.key;
                        if (null == e)
                            for (var n in this.a) {
                                var i = this.b[n];
                                void 0 === i && (i = null);
                                var r = l.localStorage.getItem(n);
                                r !== i && (this.b[n] = r, this.ib(n))
                            } else if (0 == e.indexOf("firebase:") && this.a[e]) {
                                if (void 0 !== t.a.a ? Gu(this, "local").ha(this.f) : Xu(this), this.m)
                                    if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);
                                    else if (this.b[e] === i && void 0 === t.a.a) return;
                                var o = this,
                                    n = function() {
                                        void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.ib(e))
                                    };
                                Ht && $t && 10 == $t && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                            }
                    } else U(t, b(this.ib, this))
                }, t.ib = function(t) {
                    this.a[t] && U(this.a[t], function(t) {
                        t()
                    })
                };
                var Yu, zu = {
                    name: "authEvent",
                    F: "local"
                };

                function $u() {
                    this.a = Ku()
                }

                function Zu(t, e) {
                    this.b = Qu, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = l.Int32Array ? new Int32Array(64) : Array(64), void 0 === Yu && (Yu = l.Int32Array ? new Int32Array(ac) : ac), this.reset()
                }
                e(Zu, function() {
                    this.b = -1
                });
                for (var Qu = 64, tc = Qu - 1, ec = [], nc = 0; nc < tc; nc++) ec[nc] = 0;
                var ic = B(128, ec);

                function rc(t) {
                    for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
                    for (e = 16; e < 64; e++) {
                        r = 0 | n[e - 15], i = 0 | n[e - 2];
                        var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                            a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0
                    }
                    i = 0 | t.a[0], r = 0 | t.a[1];
                    var s = 0 | t.a[2],
                        u = 0 | t.a[3],
                        c = 0 | t.a[4],
                        h = 0 | t.a[5],
                        l = 0 | t.a[6];
                    for (o = 0 | t.a[7], e = 0; e < 64; e++) {
                        var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | Yu[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0
                    }
                    t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0
                }

                function oc(t, e, n) {
                    void 0 === n && (n = e.length);
                    var i = 0,
                        r = t.c;
                    if ("string" == typeof e)
                        for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (rc(t), r = 0);
                    else {
                        if (!p(e)) throw Error("message must be string or array");
                        for (; i < n;) {
                            var o = e[i++];
                            if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                            t.f[r++] = o, r == t.b && (rc(t), r = 0)
                        }
                    }
                    t.c = r, t.g += n
                }
                Zu.prototype.reset = function() {
                    this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : W(this.h)
                };
                var ac = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function sc() {
                    Zu.call(this, 8, uc)
                }
                e(sc, Zu);
                var uc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                function cc(t, e, n, i, r) {
                    this.u = t, this.i = e, this.l = n, this.m = i || null, this.s = r || null, this.h = e + ":" + n, this.w = new $u, this.g = new Ju(this.h), this.f = null, this.b = [], this.a = this.c = null
                }

                function hc(t) {
                    return new I("invalid-cordova-configuration", t)
                }

                function lc(t) {
                    var e = new sc;
                    oc(e, t), t = [];
                    var n = 8 * e.g;
                    e.c < 56 ? oc(e, ic, 56 - e.c) : oc(e, ic, e.b - (e.c - 56));
                    for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256;
                    for (rc(e), i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255;
                    return F(t, function(t) {
                        return 1 < (t = t.toString(16)).length ? t : "0" + t
                    }).join("")
                }

                function fc(t, e) {
                    for (var n = 0; n < t.b.length; n++) try {
                        t.b[n](e)
                    } catch (t) {}
                }

                function dc(s) {
                    return s.f || (s.f = s.ka().then(function() {
                        return new pe(function(n) {
                            function e(i) {
                                t = !0, a && a.cancel(), pc(r).then(function(t) {
                                    var e, n = o;
                                    t && i && i.url && (e = null, -1 != (n = Yr(i.url)).indexOf("/__/auth/callback") && (e = (e = "object" == typeof(e = _i(Rn(e = Cn(n), "firebaseError") || null)) ? T(e) : null) ? new Co(t.c, t.b, null, null, e, null, t.S()) : new Co(t.c, t.b, n, t.f, null, null, t.S())), n = e || o), fc(r, n)
                                })
                            }
                            var r, o, t, a, i;
                            s.Ca(function t(e) {
                                    return n(e), s.Qa(t), !1
                                }), r = s, o = new Co("unknown", null, null, null, new I("no-auth-event")), t = !1, a = bn(500).then(function() {
                                    return pc(r).then(function() {
                                        t || fc(r, o)
                                    })
                                }), i = l.handleOpenURL, l.handleOpenURL = function(t) {
                                    if (0 == t.toLowerCase().indexOf(wi("BuildInfo.packageName", l).toLowerCase() + "://") && e({
                                            url: t
                                        }), "function" == typeof i) try {
                                        i(t)
                                    } catch (t) {
                                        console.error(t)
                                    }
                                }, Mo = Mo || new Po,
                                function(t) {
                                    var n = Mo;
                                    n.a.push(t), n.b || (n.b = function(t) {
                                        for (var e = 0; e < n.a.length; e++) n.a[e](t)
                                    }, "function" == typeof(t = wi("universalLinks.subscribe", l)) && t(null, n.b))
                                }(e)
                        })
                    })), s.f
                }

                function pc(e) {
                    var t, n = null;
                    return (t = e.g).b.get(zu, t.a).then(Do).then(function(t) {
                        return n = t, Wu((t = e.g).b, zu, t.a)
                    }).then(function() {
                        return n
                    })
                }

                function vc(t) {
                    this.a = t, this.b = Ku()
                }(t = cc.prototype).ka = function() {
                    return this.Ga ? this.Ga : this.Ga = (ci(void 0) ? ui().then(function() {
                        return new pe(function(t, e) {
                            var n = l.document,
                                i = setTimeout(function() {
                                    e(Error("Cordova framework is not ready."))
                                }, 1e3);
                            n.addEventListener("deviceready", function() {
                                clearTimeout(i), t()
                            }, !1)
                        })
                    }) : Te(Error("Cordova must run in an Android or iOS file scheme."))).then(function() {
                        if ("function" != typeof wi("universalLinks.subscribe", l)) throw hc("cordova-universal-links-plugin-fix is not installed");
                        if (void 0 === wi("BuildInfo.packageName", l)) throw hc("cordova-plugin-buildinfo is not installed");
                        if ("function" != typeof wi("cordova.plugins.browsertab.openUrl", l)) throw hc("cordova-plugin-browsertab is not installed");
                        if ("function" != typeof wi("cordova.InAppBrowser.open", l)) throw hc("cordova-plugin-inappbrowser is not installed")
                    }, function() {
                        throw new I("cordova-not-ready")
                    })
                }, t.Lb = function(t, e) {
                    return e(new I("operation-not-supported-in-this-environment")), Ie()
                }, t.Jb = function() {
                    return Te(new I("operation-not-supported-in-this-environment"))
                }, t.Xb = function() {
                    return !1
                }, t.Ub = function() {
                    return !0
                }, t.Qb = function() {
                    return !0
                }, t.Kb = function(t, e, n, i) {
                    if (this.c) return Te(new I("redirect-operation-pending"));
                    var r = this,
                        o = l.document,
                        a = null,
                        s = null,
                        u = null,
                        c = null;
                    return this.c = Ie().then(function() {
                        return Ro(e), dc(r)
                    }).then(function() {
                        return function(n, t, e, i, r) {
                            var o = function() {
                                    for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                                    return e.join("")
                                }(),
                                a = new Co(t, i, null, o, new I("no-auth-event"), null, r),
                                s = wi("BuildInfo.packageName", l);
                            if ("string" != typeof s) throw new I("invalid-cordova-configuration");
                            var u = wi("BuildInfo.displayName", l),
                                c = {};
                            if (yi().toLowerCase().match(/iphone|ipad|ipod/)) c.ibi = s;
                            else {
                                if (!yi().toLowerCase().match(/android/)) return Te(new I("operation-not-supported-in-this-environment"));
                                c.apn = s
                            }
                            u && (c.appDisplayName = u), o = lc(o), c.sessionId = o;
                            var h = su(n.u, n.i, n.l, t, e, null, i, n.m, c, n.s, r);
                            return n.ka().then(function() {
                                var t = n.h;
                                return n.w.a.set(zu, a.v(), t)
                            }).then(function() {
                                var t = wi("cordova.plugins.browsertab.isAvailable", l);
                                if ("function" != typeof t) throw new I("invalid-cordova-configuration");
                                var e = null;
                                t(function(t) {
                                    if (t) {
                                        if ("function" != typeof(e = wi("cordova.plugins.browsertab.openUrl", l))) throw new I("invalid-cordova-configuration");
                                        e(h)
                                    } else {
                                        if ("function" != typeof(e = wi("cordova.InAppBrowser.open", l))) throw new I("invalid-cordova-configuration");
                                        t = yi(), n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                    }
                                })
                            })
                        }(r, t, e, n, i)
                    }).then(function() {
                        return new pe(function(e, t) {
                            s = function() {
                                var t = wi("cordova.plugins.browsertab.close", l);
                                return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1
                            }, r.Ca(s), u = function() {
                                a = a || bn(2e3).then(function() {
                                    t(new I("redirect-cancelled-by-user"))
                                })
                            }, c = function() {
                                Pi() && u()
                            }, o.addEventListener("resume", u, !1), yi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1)
                        }).o(function(t) {
                            return pc(r).then(function() {
                                throw t
                            })
                        })
                    }).ma(function() {
                        u && o.removeEventListener("resume", u, !1), c && o.removeEventListener("visibilitychange", c, !1), a && a.cancel(), s && r.Qa(s), r.c = null
                    })
                }, t.Ca = function(e) {
                    this.b.push(e), dc(this).o(function(t) {
                        "auth/invalid-cordova-configuration" === t.code && (t = new Co("unknown", null, null, null, new I("no-auth-event")), e(t))
                    })
                }, t.Qa = function(e) {
                    G(this.b, function(t) {
                        return t == e
                    })
                };
                var mc = {
                    name: "pendingRedirect",
                    F: "session"
                };

                function gc(t) {
                    return Wu(t.b, mc, t.a)
                }

                function bc(t, e, n) {
                    this.i = {}, this.w = 0, this.D = t, this.u = e, this.m = n, this.h = [], this.f = !1, this.l = b(this.s, this), this.b = new Dc, this.B = new jc, this.g = new vc(this.u + ":" + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.B, this.c.linkViaPopup = this.B, this.c.reauthViaPopup = this.B, this.a = yc(this.D, this.u, this.m, E)
                }

                function yc(t, e, n, i) {
                    var r = Wl.default.SDK_VERSION || null;
                    return new(ci() ? cc : iu)(t, e, n, r, i)
                }

                function wc(e) {
                    e.f || (e.f = !0, e.a.Ca(e.l));
                    var n = e.a;
                    return e.a.ka().o(function(t) {
                        throw e.a == n && e.reset(), t
                    })
                }

                function Ic(n) {
                    n.a.Ub() && wc(n).o(function(t) {
                        var e = new Co("unknown", null, null, null, new I("operation-not-supported-in-this-environment"));
                        Nc(t) && n.s(e)
                    }), n.a.Qb() || Pc(n.b)
                }

                function Tc(n, t) {
                    var e;
                    H(n.h, t) || n.h.push(t), n.f || (e = n.g).b.get(mc, e.a).then(function(t) {
                        return "pending" == t
                    }).then(function(t) {
                        t ? gc(n.g).then(function() {
                            wc(n).o(function(t) {
                                var e = new Co("unknown", null, null, null, new I("operation-not-supported-in-this-environment"));
                                Nc(t) && n.s(e)
                            })
                        }) : Ic(n)
                    }).o(function() {
                        Ic(n)
                    })
                }

                function Ec(t, e) {
                    G(t.h, function(t) {
                        return t == e
                    })
                }
                bc.prototype.reset = function() {
                    this.f = !1, this.a.Qa(this.l), this.a = yc(this.D, this.u, this.m), this.i = {}
                }, bc.prototype.s = function(t) {
                    if (!t) throw new I("invalid-auth-event");
                    if (6e5 <= w() - this.w && (this.i = {}, this.w = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;
                    for (var e = !1, n = 0; n < this.h.length; n++) {
                        var i = this.h[n];
                        if (i.Cb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.w = w())), e = !0;
                            break
                        }
                    }
                    return Pc(this.b), e
                };
                var Ac = new Di(2e3, 1e4),
                    kc = new Di(3e4, 6e4);

                function Sc(t, e, n, i, r, o, a) {
                    return t.a.Jb(e, n, i, function() {
                        t.f || (t.f = !0, t.a.Ca(t.l))
                    }, function() {
                        t.reset()
                    }, r, o, a)
                }

                function Nc(t) {
                    return !(!t || "auth/cordova-not-ready" != t.code)
                }

                function _c(e, t, n, i, r) {
                    var o, a;
                    return (a = e.g).b.set(mc, "pending", a.a).then(function() {
                        return e.a.Kb(t, n, i, r).o(function(t) {
                            if (Nc(t)) throw new I("operation-not-supported-in-this-environment");
                            return o = t, gc(e.g).then(function() {
                                throw o
                            })
                        }).then(function() {
                            return e.a.Xb() ? new pe(function() {}) : gc(e.g).then(function() {
                                return e.pa()
                            }).then(function() {}).o(function() {})
                        })
                    })
                }

                function Oc(t, e, n, i, r) {
                    return t.a.Lb(i, function(t) {
                        e.la(n, null, t, r)
                    }, Ac.get())
                }
                bc.prototype.pa = function() {
                    return this.b.pa()
                };
                var Rc = {};

                function Cc(t, e, n) {
                    var i = e + ":" + n;
                    return Rc[i] || (Rc[i] = new bc(t, e, n)), Rc[i]
                }

                function Dc() {
                    this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
                }

                function Pc(t) {
                    t.g || (t.g = !0, xc(t, !1, null, null))
                }

                function Lc(t) {
                    t.g && !t.i && xc(t, !1, null, null)
                }

                function Mc(t, e) {
                    if (t.b = function() {
                            return Ie(e)
                        }, t.f.length)
                        for (var n = 0; n < t.f.length; n++) t.f[n](e)
                }

                function xc(t, e, n, i) {
                    e ? i ? function(t, e) {
                        if (t.b = function() {
                                return Te(e)
                            }, t.c.length)
                            for (var n = 0; n < t.c.length; n++) t.c[n](e)
                    }(t, i) : Mc(t, n) : Mc(t, {
                        user: null
                    }), t.f = [], t.c = []
                }

                function jc() {}

                function Uc() {
                    this.Bb = !1, Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.Bb
                        },
                        set: function(t) {
                            this.Bb = t
                        },
                        enumerable: !1
                    })
                }

                function Vc(t, e) {
                    this.a = e, Fi(this, "verificationId", t)
                }

                function Fc(t, e, n, i) {
                    return new No(t).cb(e, n).then(function(t) {
                        return new Vc(t, i)
                    })
                }

                function qc(t) {
                    var e = Mr(t);
                    if (!(e && e.exp && e.auth_time && e.iat)) throw new I("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    qi(this, {
                        token: t,
                        expirationTime: Li(1e3 * e.exp),
                        authTime: Li(1e3 * e.auth_time),
                        issuedAtTime: Li(1e3 * e.iat),
                        signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
                        signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
                        claims: e
                    })
                }

                function Hc(t, e, n) {
                    var i = e && e[Gc];
                    if (!i) throw new I("argument-error", "Internal assert: Invalid MultiFactorResolver");
                    this.a = t, this.f = ct(e), this.g = n, this.c = new zr(null, i), this.b = [];
                    var r = this;
                    U(e[Kc] || [], function(t) {
                        (t = Bi(t)) && r.b.push(t)
                    }), Fi(this, "auth", this.a), Fi(this, "session", this.c), Fi(this, "hints", this.b)
                }
                Dc.prototype.reset = function() {
                    this.b = null, this.a && (this.a.cancel(), this.a = null)
                }, Dc.prototype.h = function(t, e) {
                    var n, i, r, o;
                    t ? (this.reset(), this.g = !0, n = t.c, i = t.b, r = t.a && "auth/web-storage-unsupported" == t.a.code, o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code, this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (xc(this, !0, null, t.a), Ie()) : e.Da(n, i) ? function(e, t, n) {
                        n = n.Da(t.c, t.b);
                        var i = t.g,
                            r = t.f,
                            o = t.i,
                            a = t.S(),
                            s = !!t.c.match(/Redirect$/);
                        n(i, r, a, o).then(function(t) {
                            xc(e, s, t, null)
                        }).o(function(t) {
                            xc(e, s, null, t)
                        })
                    }(this, t, e) : Te(new I("invalid-auth-event")) : (xc(this, !1, null, null), Ie())) : Te(new I("invalid-auth-event"))
                }, Dc.prototype.pa = function() {
                    var r = this;
                    return new pe(function(t, e) {
                        var n, i;
                        r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new I("timeout"), n.a && n.a.cancel(), n.a = bn(kc.get()).then(function() {
                            n.b || (n.g = !0, xc(n, !0, null, i))
                        }))
                    })
                }, jc.prototype.h = function(t, e) {
                    var n, i, r, o, a, s;
                    t ? (n = t.c, i = t.b, t.a ? (e.la(t.c, null, t.a, t.b), Ie()) : e.Da(n, i) ? (o = e, a = (r = t).b, s = r.c, o.Da(s, a)(r.g, r.f, r.S(), r.i).then(function(t) {
                        o.la(s, t, null, a)
                    }).o(function(t) {
                        o.la(s, null, t, a)
                    })) : Te(new I("invalid-auth-event"))) : Te(new I("invalid-auth-event"))
                }, Vc.prototype.confirm = function(t) {
                    return t = _o(this.verificationId, t), this.a(t)
                };
                var Kc = "mfaInfo",
                    Gc = "mfaPendingCredential";

                function Bc(t, e, n, i) {
                    I.call(this, "multi-factor-auth-required", i, e), this.b = new Hc(t, e, n), Fi(this, "resolver", this.b)
                }

                function Wc(t, e, n) {
                    if (t && m(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try {
                        return new Bc(e, t.serverResponse, n, t.message)
                    } catch (t) {}
                    return null
                }

                function Xc() {}

                function Jc(t) {
                    Fi(this, "factorId", t.ea), this.a = t
                }

                function Yc(t) {
                    if (Jc.call(this, t), this.a.ea != No.PROVIDER_ID) throw new I("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
                }

                function zc(t, e) {
                    for (var n in He.call(this, t), e) this[n] = e[n]
                }

                function $c(t, e) {
                    this.a = t, this.b = [], this.c = b(this.wc, this), tn(this.a, "userReloaded", this.c);
                    var i = [];
                    e && e.multiFactor && e.multiFactor.enrolledFactors && U(e.multiFactor.enrolledFactors, function(t) {
                        var e = null,
                            n = {};
                        if (t) {
                            t.uid && (n[Ji] = t.uid), t.displayName && (n[Wi] = t.displayName), t.enrollmentTime && (n[Xi] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (n[Yi] = t.phoneNumber);
                            try {
                                e = new zi(n)
                            } catch (t) {}
                            t = e
                        } else t = null;
                        t && i.push(t)
                    }), Zc(this, i)
                }

                function Zc(t, e) {
                    t.b = e, Fi(t, "enrolledFactors", e)
                }

                function Qc(t, e, n) {
                    if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
                }

                function th(t, e) {
                    return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e)
                }

                function eh(t) {
                    this.c = t, this.b = this.a = null
                }

                function nh(t) {
                    return t.b && 1e3 * t.b.c || 0
                }

                function ih(t, e) {
                    var n = e.refreshToken;
                    t.b = Lr(e[Ka] || ""), t.a = n
                }

                function rh(e, t) {
                    return i = e.c, r = t, new pe(function(e, n) {
                        "refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? za(i, i.u + "?key=" + encodeURIComponent(i.c), function(t) {
                            t ? t.error ? n(Js(t)) : t.access_token && t.refresh_token ? e(t) : n(new I("internal-error")) : n(new I("network-request-failed"))
                        }, "POST", Kn(r).toString(), i.g, i.m.get()) : n(new I("internal-error"))
                    }).then(function(t) {
                        return e.b = Lr(t.access_token), e.a = t.refresh_token, {
                            accessToken: e.b.toString(),
                            refreshToken: e.a
                        }
                    }).o(function(t) {
                        throw "auth/user-token-expired" == t.code && (e.a = null), t
                    });
                    var i, r
                }

                function oh(t, e) {
                    this.a = t || null, this.b = e || null, qi(this, {
                        lastSignInTime: Li(e || null),
                        creationTime: Li(t || null)
                    })
                }

                function ah(t, e, n, i, r, o) {
                    qi(this, {
                        uid: t,
                        displayName: i || null,
                        photoURL: r || null,
                        email: n || null,
                        phoneNumber: o || null,
                        providerId: e
                    })
                }

                function sh(t, e, n) {
                    var i;
                    this.N = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null, t = Wl.default.SDK_VERSION ? bi(Wl.default.SDK_VERSION) : null, this.a = new qa(this.l, N(E), t), this.b = new eh(this.a), ph(this, e[Ka]), ih(this.b, e), Fi(this, "refreshToken", this.b.a), gh(this, n || {}), dn.call(this), this.P = !1, this.s && Ti() && (this.i = Cc(this.s, this.l, this.m)), this.R = [], this.h = null, this.B = (i = this, new Qc(function() {
                        return i.I(!0)
                    }, function(t) {
                        return !(!t || "auth/network-request-failed" != t.code)
                    }, function() {
                        var t = nh(i.b) - w() - 3e5;
                        return 0 < t ? t : 0
                    })), this.Z = b(this.Ma, this);
                    var r = this;
                    this.oa = null, this.za = function(t) {
                        r.va(t.g)
                    }, this.aa = null, this.W = [], this.ya = function(t) {
                        ch(r, t.c)
                    }, this.$ = null, this.O = new $c(this, n), Fi(this, "multiFactor", this.O)
                }

                function uh(t, e) {
                    t.aa && rn(t.aa, "languageCodeChanged", t.za), (t.aa = e) && tn(e, "languageCodeChanged", t.za)
                }

                function ch(t, e) {
                    t.W = e, Ya(t.a, Wl.default.SDK_VERSION ? bi(Wl.default.SDK_VERSION, t.W) : null)
                }

                function hh(t, e) {
                    t.$ && rn(t.$, "frameworkChanged", t.ya), (t.$ = e) && tn(e, "frameworkChanged", t.ya)
                }

                function lh(e) {
                    try {
                        return Wl.default.app(e.m).auth()
                    } catch (t) {
                        throw new I("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!")
                    }
                }

                function fh(t) {
                    t.D || t.B.b || (t.B.start(), rn(t, "tokenChanged", t.Z), tn(t, "tokenChanged", t.Z))
                }

                function dh(t) {
                    rn(t, "tokenChanged", t.Z), t.B.stop()
                }

                function ph(t, e) {
                    t.xa = e, Fi(t, "_lat", e)
                }

                function vh(t) {
                    for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
                    return Ae(e).then(function() {
                        return t
                    })
                }

                function mh(t) {
                    t.i && !t.P && (t.P = !0, Tc(t.i, t))
                }

                function gh(t, e) {
                    qi(t, {
                        uid: e.uid,
                        displayName: e.displayName || null,
                        photoURL: e.photoURL || null,
                        email: e.email || null,
                        emailVerified: e.emailVerified || !1,
                        phoneNumber: e.phoneNumber || null,
                        isAnonymous: e.isAnonymous || !1,
                        tenantId: e.tenantId || null,
                        metadata: new oh(e.createdAt, e.lastLoginAt),
                        providerData: []
                    }), t.a.b = t.tenantId
                }

                function bh() {}

                function yh(t) {
                    return Ie().then(function() {
                        if (t.D) throw new I("app-deleted")
                    })
                }

                function wh(t) {
                    return F(t.providerData, function(t) {
                        return t.providerId
                    })
                }

                function Ih(t, e) {
                    e && (Th(t, e.providerId), t.providerData.push(e))
                }

                function Th(t, e) {
                    G(t.providerData, function(t) {
                        return t.providerId == e
                    })
                }

                function Eh(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && Fi(t, e, n)
                }

                function Ah(e, t) {
                    var n, i, r;
                    e != t && (qi(e, {
                        uid: t.uid,
                        displayName: t.displayName,
                        photoURL: t.photoURL,
                        email: t.email,
                        emailVerified: t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        isAnonymous: t.isAnonymous,
                        tenantId: t.tenantId,
                        providerData: []
                    }), t.metadata ? Fi(e, "metadata", new oh((r = t.metadata).a, r.b)) : Fi(e, "metadata", new oh), U(t.providerData, function(t) {
                        Ih(e, t)
                    }), n = e.b, i = t.b, n.b = i.b, n.a = i.a, Fi(e, "refreshToken", e.b.a), Zc(e.O, t.O.b))
                }

                function kh(r) {
                    return r.I().then(function(t) {
                        var e, n, i = r.isAnonymous;
                        return n = t, Ws((e = r).a, Es, {
                            idToken: n
                        }).then(b(e.Ic, e)).then(function() {
                            return i || Eh(r, "isAnonymous", !1), t
                        })
                    })
                }

                function Sh(t, e) {
                    e[Ka] && t.xa != e[Ka] && (ih(t.b, e), t.dispatchEvent(new zc("tokenChanged")), ph(t, e[Ka]), Eh(t, "refreshToken", t.b.a))
                }

                function Nh(t, e) {
                    return kh(t).then(function() {
                        if (H(wh(t), e)) return vh(t).then(function() {
                            throw new I("provider-already-linked")
                        })
                    })
                }

                function _h(t, e, n) {
                    return Hi({
                        user: t,
                        credential: Oo(e),
                        additionalUserInfo: e = Fr(e),
                        operationType: n
                    })
                }

                function Oh(t, e) {
                    return Sh(t, e), t.reload().then(function() {
                        return t
                    })
                }

                function Rh(n, i, t, e, r) {
                    if (!Ti()) return Te(new I("operation-not-supported-in-this-environment"));
                    if (n.h && !r) return Te(n.h);
                    var o = Vr(t.providerId),
                        a = Oi(n.uid + ":::"),
                        s = null;
                    (!ki() || hi()) && n.s && t.isOAuthProvider && (s = su(n.s, n.l, n.m, i, t, null, a, Wl.default.SDK_VERSION || null, null, null, n.tenantId));
                    var u = oi(s, o && o.ta, o && o.sa);
                    return e = e().then(function() {
                        if (Dh(n), !r) return n.I().then(function() {})
                    }).then(function() {
                        return Sc(n.i, u, i, t, a, !!s, n.tenantId)
                    }).then(function() {
                        return new pe(function(t, e) {
                            n.la(i, null, new I("cancelled-popup-request"), n.g || null), n.f = t, n.w = e, n.g = a, n.c = Oc(n.i, n, i, u, a)
                        })
                    }).then(function(t) {
                        return u && ri(u), t ? Hi(t) : null
                    }).o(function(t) {
                        throw u && ri(u), t
                    }), Ph(n, e, r)
                }

                function Ch(e, t, n, i, r) {
                    if (!Ti()) return Te(new I("operation-not-supported-in-this-environment"));
                    if (e.h && !r) return Te(e.h);
                    var o = null,
                        a = Oi(e.uid + ":::");
                    return i = i().then(function() {
                        if (Dh(e), !r) return e.I().then(function() {})
                    }).then(function() {
                        return e.fa = a, vh(e)
                    }).then(function(t) {
                        return e.ga && (t = (t = e.ga).b.set(xh, e.v(), t.a)), t
                    }).then(function() {
                        return _c(e.i, t, n, a, e.tenantId)
                    }).o(function(t) {
                        if (o = t, e.ga) return jh(e.ga);
                        throw o
                    }).then(function() {
                        if (o) throw o
                    }), Ph(e, i, r)
                }

                function Dh(t) {
                    if (!t.i || !t.P) {
                        if (t.i && !t.P) throw new I("internal-error");
                        throw new I("auth-domain-config-required")
                    }
                }

                function Ph(n, t, e) {
                    var i, r, o, a = (r = t, o = e, (i = n).h && !o ? (r.cancel(), Te(i.h)) : r.o(function(t) {
                        throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.h || i.dispatchEvent(new zc("userInvalidated")), i.h = t), t
                    }));
                    return n.N.push(a), a.ma(function() {
                        K(n.N, a)
                    }), a.o(function(t) {
                        var e = null;
                        throw t && "auth/multi-factor-auth-required" === t.code && (e = Wc(t.v(), lh(n), b(n.hc, n))), e || t
                    })
                }

                function Lh(t) {
                    if (!t.apiKey) return null;
                    var e = {
                            apiKey: t.apiKey,
                            authDomain: t.authDomain,
                            appName: t.appName
                        },
                        n = {};
                    if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
                    n[Ka] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null;
                    var i = new sh(e, n, t);
                    return t.providerData && U(t.providerData, function(t) {
                        t && Ih(i, Hi(t))
                    }), t.redirectEventId && (i.fa = t.redirectEventId), i
                }

                function Mh(t) {
                    this.a = t, this.b = Ku()
                }
                Hc.prototype.Pc = function(t) {
                    var n = this;
                    return t.ob(this.a.b, this.c).then(function(t) {
                        var e = ct(n.f);
                        return delete e[Kc], delete e[Gc], lt(e, t), n.g(e)
                    })
                }, e(Bc, I), Xc.prototype.ob = function(t, e, n) {
                    return e.type == $r ? (o = this, a = t, s = n, e.Fa().then(function(t) {
                        return t = {
                            idToken: t
                        }, void 0 !== s && (t.displayName = s), lt(t, {
                            phoneVerificationInfo: So(o.a)
                        }), Ws(a, Is, t)
                    })) : (i = this, r = t, e.Fa().then(function(t) {
                        return lt(t = {
                            mfaPendingCredential: t
                        }, {
                            phoneVerificationInfo: So(i.a)
                        }), Ws(r, Ts, t)
                    }));
                    var i, r, o, a, s
                }, e(Jc, Xc), e(Yc, Jc), e(zc, He), (t = $c.prototype).wc = function(t) {
                    var e, n;
                    Zc(this, (e = t.ed, n = [], U(e.mfaInfo || [], function(t) {
                        (t = Bi(t)) && n.push(t)
                    }), n))
                }, t.Ob = function() {
                    return this.a.I().then(function(t) {
                        return new zr(t, null)
                    })
                }, t.dc = function(e, n) {
                    var i = this,
                        r = this.a.a;
                    return this.Ob().then(function(t) {
                        return e.ob(r, t, n)
                    }).then(function(t) {
                        return Sh(i.a, t), i.a.reload()
                    })
                }, t.$c = function(t) {
                    var n = this,
                        i = "string" == typeof t ? t : t.uid,
                        e = this.a.a;
                    return this.a.I().then(function(t) {
                        return Ws(e, Bs, {
                            idToken: t,
                            mfaEnrollmentId: i
                        })
                    }).then(function(t) {
                        var e = V(n.b, function(t) {
                            return t.uid != i
                        });
                        return Zc(n, e), Sh(n.a, t), n.a.reload().o(function(t) {
                            if ("auth/user-token-expired" != t.code) throw t
                        })
                    })
                }, t.v = function() {
                    return {
                        multiFactor: {
                            enrolledFactors: F(this.b, function(t) {
                                return t.v()
                            })
                        }
                    }
                }, Qc.prototype.start = function() {
                    this.a = this.c,
                        function e(n, t) {
                            n.stop();
                            n.b = bn(th(n, t)).then(function() {
                                return e = l.document, n = null, Pi() || !e ? Ie() : new pe(function(t) {
                                    n = function() {
                                        Pi() && (e.removeEventListener("visibilitychange", n, !1), t())
                                    }, e.addEventListener("visibilitychange", n, !1)
                                }).o(function(t) {
                                    throw e.removeEventListener("visibilitychange", n, !1), t
                                });
                                var e, n
                            }).then(function() {
                                return n.h()
                            }).then(function() {
                                e(n, !0)
                            }).o(function(t) {
                                n.i(t) && e(n, !1)
                            })
                        }(this, !0)
                }, Qc.prototype.stop = function() {
                    this.b && (this.b.cancel(), this.b = null)
                }, eh.prototype.v = function() {
                    return {
                        apiKey: this.c.c,
                        refreshToken: this.a,
                        accessToken: this.b && this.b.toString(),
                        expirationTime: nh(this)
                    }
                }, eh.prototype.getToken = function(t) {
                    return t = !!t, this.b && !this.a ? Te(new I("user-token-expired")) : t || !this.b || w() > nh(this) - 3e4 ? this.a ? rh(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : Ie(null) : Ie({
                        accessToken: this.b.toString(),
                        refreshToken: this.a
                    })
                }, oh.prototype.v = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }, e(sh, dn), sh.prototype.va = function(t) {
                    this.oa = t, Ja(this.a, t)
                }, sh.prototype.ja = function() {
                    return this.oa
                }, sh.prototype.Ea = function() {
                    return W(this.W)
                }, sh.prototype.Ma = function() {
                    this.B.b && (this.B.stop(), this.B.start())
                }, Fi(sh.prototype, "providerId", "firebase"), (t = sh.prototype).reload = function() {
                    var t = this;
                    return Ph(this, yh(this).then(function() {
                        return kh(t).then(function() {
                            return vh(t)
                        }).then(bh)
                    }))
                }, t.mc = function(t) {
                    return this.I(t).then(function(t) {
                        return new qc(t)
                    })
                }, t.I = function(t) {
                    var e = this;
                    return Ph(this, yh(this).then(function() {
                        return e.b.getToken(t)
                    }).then(function(t) {
                        if (!t) throw new I("internal-error");
                        return t.accessToken != e.xa && (ph(e, t.accessToken), e.dispatchEvent(new zc("tokenChanged"))), Eh(e, "refreshToken", t.refreshToken), t.accessToken
                    }))
                }, t.Ic = function(t) {
                    if (!(t = t.users) || !t.length) throw new I("internal-error");
                    gh(this, {
                        uid: (t = t[0]).localId,
                        displayName: t.displayName,
                        photoURL: t.photoUrl,
                        email: t.email,
                        emailVerified: !!t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        lastLoginAt: t.lastLoginAt,
                        createdAt: t.createdAt,
                        tenantId: t.tenantId
                    });
                    for (var e, n = (e = (e = t).providerUserInfo) && e.length ? F(e, function(t) {
                            return new ah(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
                        }) : [], i = 0; i < n.length; i++) Ih(this, n[i]);
                    Eh(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new zc("userReloaded", {
                        ed: t
                    }))
                }, t.Jc = function(t) {
                    return Ui("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.pb(t)
                }, t.pb = function(t) {
                    var e = this,
                        n = null;
                    return Ph(this, t.c(this.a, this.uid).then(function(t) {
                        return Sh(e, t), n = _h(e, t, "reauthenticate"), e.h = null, e.reload()
                    }).then(function() {
                        return n
                    }), !0)
                }, t.Ac = function(t) {
                    return Ui("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.mb(t)
                }, t.mb = function(e) {
                    var n = this,
                        i = null;
                    return Ph(this, Nh(this, e.providerId).then(function() {
                        return n.I()
                    }).then(function(t) {
                        return e.b(n.a, t)
                    }).then(function(t) {
                        return i = _h(n, t, "link"), Oh(n, t)
                    }).then(function() {
                        return i
                    }))
                }, t.Bc = function(t, e) {
                    var n = this;
                    return Ph(this, Nh(this, "phone").then(function() {
                        return Fc(lh(n), t, e, b(n.mb, n))
                    }))
                }, t.Kc = function(t, e) {
                    var n = this;
                    return Ph(this, Ie().then(function() {
                        return Fc(lh(n), t, e, b(n.pb, n))
                    }), !0)
                }, t.xb = function(e) {
                    var n = this;
                    return Ph(this, this.I().then(function(t) {
                        return n.a.xb(t, e)
                    }).then(function(t) {
                        return Sh(n, t), n.reload()
                    }))
                }, t.cd = function(e) {
                    var n = this;
                    return Ph(this, this.I().then(function(t) {
                        return e.b(n.a, t)
                    }).then(function(t) {
                        return Sh(n, t), n.reload()
                    }))
                }, t.yb = function(e) {
                    var n = this;
                    return Ph(this, this.I().then(function(t) {
                        return n.a.yb(t, e)
                    }).then(function(t) {
                        return Sh(n, t), n.reload()
                    }))
                }, t.zb = function(e) {
                    if (void 0 === e.displayName && void 0 === e.photoURL) return yh(this);
                    var n = this;
                    return Ph(this, this.I().then(function(t) {
                        return n.a.zb(t, {
                            displayName: e.displayName,
                            photoUrl: e.photoURL
                        })
                    }).then(function(t) {
                        return Sh(n, t), Eh(n, "displayName", t.displayName || null), Eh(n, "photoURL", t.photoUrl || null), U(n.providerData, function(t) {
                            "password" === t.providerId && (Fi(t, "displayName", n.displayName), Fi(t, "photoURL", n.photoURL))
                        }), vh(n)
                    }).then(bh))
                }, t.ad = function(e) {
                    var n = this;
                    return Ph(this, kh(this).then(function(t) {
                        return H(wh(n), e) ? Ws(n.a, bs, {
                            idToken: t,
                            deleteProvider: [e]
                        }).then(function(t) {
                            var e = {};
                            return U(t.providerUserInfo || [], function(t) {
                                e[t.providerId] = !0
                            }), U(wh(n), function(t) {
                                e[t] || Th(n, t)
                            }), e[No.PROVIDER_ID] || Fi(n, "phoneNumber", null), vh(n)
                        }) : vh(n).then(function() {
                            throw new I("no-such-provider")
                        })
                    }))
                }, t.delete = function() {
                    var e = this;
                    return Ph(this, this.I().then(function(t) {
                        return Ws(e.a, gs, {
                            idToken: t
                        })
                    }).then(function() {
                        e.dispatchEvent(new zc("userDeleted"))
                    })).then(function() {
                        for (var t = 0; t < e.N.length; t++) e.N[t].cancel("app-deleted");
                        uh(e, null), hh(e, null), e.N = [], e.D = !0, dh(e), Fi(e, "refreshToken", null), e.i && Ec(e.i, e)
                    })
                }, t.Cb = function(t, e) {
                    return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.fa || null) == e || "reauthViaRedirect" == t && (this.fa || null) == e)
                }, t.la = function(t, e, n, i) {
                    "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w)
                }, t.Da = function(t, e) {
                    return "linkViaPopup" == t && e == (this.g || null) ? b(this.Hb, this) : "reauthViaPopup" == t && e == (this.g || null) ? b(this.Ib, this) : "linkViaRedirect" == t && (this.fa || null) == e ? b(this.Hb, this) : "reauthViaRedirect" == t && (this.fa || null) == e ? b(this.Ib, this) : null
                }, t.Cc = function(t) {
                    var e = this;
                    return Rh(this, "linkViaPopup", t, function() {
                        return Nh(e, t.providerId).then(function() {
                            return vh(e)
                        })
                    }, !1)
                }, t.Lc = function(t) {
                    return Rh(this, "reauthViaPopup", t, function() {
                        return Ie()
                    }, !0)
                }, t.Dc = function(t) {
                    var e = this;
                    return Ch(this, "linkViaRedirect", t, function() {
                        return Nh(e, t.providerId)
                    }, !1)
                }, t.Mc = function(t) {
                    return Ch(this, "reauthViaRedirect", t, function() {
                        return Ie()
                    }, !0)
                }, t.Hb = function(e, n, t, i) {
                    var r = this;
                    this.c && (this.c.cancel(), this.c = null);
                    var o = null;
                    return t = this.I().then(function(t) {
                        return hs(r.a, {
                            requestUri: e,
                            postBody: i,
                            sessionId: n,
                            idToken: t
                        })
                    }).then(function(t) {
                        return o = _h(r, t, "link"), Oh(r, t)
                    }).then(function() {
                        return o
                    }), Ph(this, t)
                }, t.Ib = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(), this.c = null);
                    var o = null;
                    return Ph(this, Ie().then(function() {
                        return to(ls(r.a, {
                            requestUri: t,
                            sessionId: e,
                            postBody: i,
                            tenantId: n
                        }), r.uid)
                    }).then(function(t) {
                        return o = _h(r, t, "reauthenticate"), Sh(r, t), r.h = null, r.reload()
                    }).then(function() {
                        return o
                    }), !0)
                }, t.qb = function(e) {
                    var n = this,
                        i = null;
                    return Ph(this, this.I().then(function(t) {
                        return i = t, void 0 === e || ut(e) ? {} : Rr(new wr(e))
                    }).then(function(t) {
                        return n.a.qb(i, t)
                    }).then(function(t) {
                        if (n.email != t) return n.reload()
                    }).then(function() {}))
                }, t.Ab = function(e, n) {
                    var i = this,
                        r = null;
                    return Ph(this, this.I().then(function(t) {
                        return r = t, void 0 === n || ut(n) ? {} : Rr(new wr(n))
                    }).then(function(t) {
                        return i.a.Ab(r, e, t)
                    }).then(function(t) {
                        if (i.email != t) return i.reload()
                    }).then(function() {}))
                }, t.hc = function(t) {
                    var e = null,
                        n = this;
                    return Ph(this, t = to(Ie(t), n.uid).then(function(t) {
                        return e = _h(n, t, "reauthenticate"), Sh(n, t), n.h = null, n.reload()
                    }).then(function() {
                        return e
                    }), !0)
                }, t.toJSON = function() {
                    return this.v()
                }, t.v = function() {
                    var e = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.s,
                        stsTokenManager: this.b.v(),
                        redirectEventId: this.fa || null
                    };
                    return this.metadata && lt(e, this.metadata.v()), U(this.providerData, function(t) {
                        e.providerData.push(function(t) {
                            var e, n = {};
                            for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                            return n
                        }(t))
                    }), lt(e, this.O.v()), e
                };
                var xh = {
                    name: "redirectUser",
                    F: "session"
                };

                function jh(t) {
                    return Wu(t.b, xh, t.a)
                }

                function Uh(t) {
                    var e, n, i, r;
                    this.a = t, this.b = Ku(), this.c = null, this.f = (n = qh("local"), i = qh("session"), r = qh("none"), function(n, i, r) {
                        var o = Bu(i, r),
                            a = Gu(n, i.F);
                        return n.get(i, r).then(function(t) {
                            var e = null;
                            try {
                                e = _i(l.localStorage.getItem(o))
                            } catch (t) {}
                            if (e && !t) return l.localStorage.removeItem(o), n.set(i, e, r);
                            e && t && "localStorage" != a.type && l.localStorage.removeItem(o)
                        })
                    }((e = this).b, n, e.a).then(function() {
                        return e.b.get(i, e.a)
                    }).then(function(t) {
                        return t ? i : e.b.get(r, e.a).then(function(t) {
                            return t ? r : e.b.get(n, e.a).then(function(t) {
                                return t ? n : e.b.get(Fh, e.a).then(function(t) {
                                    return t ? qh(t) : n
                                })
                            })
                        })
                    }).then(function(t) {
                        return e.c = t, Vh(e, t.F)
                    }).o(function() {
                        e.c || (e.c = n)
                    })), this.b.addListener(qh("local"), this.a, b(this.g, this))
                }

                function Vh(t, e) {
                    var n, s, i = [];
                    for (n in qu) qu[n] !== e && i.push(Wu(t.b, qh(qu[n]), t.a));
                    return i.push(Wu(t.b, Fh, t.a)), s = i, new pe(function(n, e) {
                        var i = s.length,
                            r = [];
                        if (i)
                            for (var t = function(t, e) {
                                    i--, r[t] = e, 0 == i && n(r)
                                }, o = function(t) {
                                    e(t)
                                }, a = 0; a < s.length; a++) Ee(s[a], y(t, a), o);
                        else n(r)
                    })
                }
                Uh.prototype.g = function() {
                    var e = this,
                        n = qh("local");
                    Bh(this, function() {
                        return Ie().then(function() {
                            return e.c && "local" != e.c.F ? e.b.get(n, e.a) : null
                        }).then(function(t) {
                            if (t) return Vh(e, "local").then(function() {
                                e.c = n
                            })
                        })
                    })
                };
                var Fh = {
                    name: "persistence",
                    F: "session"
                };

                function qh(t) {
                    return {
                        name: "authUser",
                        F: t
                    }
                }

                function Hh(t, e) {
                    return Bh(t, function() {
                        return t.b.set(t.c, e.v(), t.a)
                    })
                }

                function Kh(t) {
                    return Bh(t, function() {
                        return Wu(t.b, t.c, t.a)
                    })
                }

                function Gh(t, e) {
                    return Bh(t, function() {
                        return t.b.get(t.c, t.a).then(function(t) {
                            return t && e && (t.authDomain = e), Lh(t || {})
                        })
                    })
                }

                function Bh(t, e) {
                    return t.f = t.f.then(e, e), t.f
                }

                function Wh(t) {
                    if (this.l = !1, Fi(this, "settings", new Uc), Fi(this, "app", t), !tl(this).options || !tl(this).options.apiKey) throw new I("invalid-api-key");
                    var n, e, i, r, o, a, s, u;
                    t = Wl.default.SDK_VERSION ? bi(Wl.default.SDK_VERSION) : null, this.b = new qa(tl(this).options && tl(this).options.apiKey, N(E), t), this.P = [], this.m = [], this.O = [], this.$b = Wl.default.INTERNAL.createSubscribe(b(this.xc, this)), this.W = void 0, this.ac = Wl.default.INTERNAL.createSubscribe(b(this.yc, this)), Zh(this, null), this.i = new Uh(tl(this).options.apiKey + ":" + tl(this).name), this.B = new Mh(tl(this).options.apiKey + ":" + tl(this).name), this.Z = rl(this, (e = tl(n = this).options.authDomain, i = function(e) {
                        var t = function(t, e) {
                            return t.b.get(xh, t.a).then(function(t) {
                                return t && e && (t.authDomain = e), Lh(t || {})
                            })
                        }(e.B, tl(e).options.authDomain).then(function(t) {
                            return (e.D = t) && (t.ga = e.B), jh(e.B)
                        });
                        return rl(e, t)
                    }(n).then(function() {
                        return Gh(n.i, e)
                    }).then(function(e) {
                        return e ? (e.ga = n.B, n.D && (n.D.fa || null) == (e.fa || null) ? e : e.reload().then(function() {
                            return Hh(n.i, e).then(function() {
                                return e
                            })
                        }).o(function(t) {
                            return "auth/network-request-failed" == t.code ? e : Kh(n.i)
                        })) : null
                    }).then(function(t) {
                        Zh(n, t || null)
                    }), rl(n, i))), this.h = rl(this, (r = this).Z.then(function() {
                        return zh(r)
                    }).o(function() {}).then(function() {
                        if (!r.l) return r.oa()
                    }).o(function() {}).then(function() {
                        var t;
                        r.l || (r.aa = !0, (t = r.i).b.addListener(qh("local"), t.a, r.oa))
                    })), this.aa = !1, this.oa = b(this.Xc, this), this.Ma = b(this.ca, this), this.xa = b(this.jc, this), this.ya = b(this.uc, this), this.za = b(this.vc, this), this.a = null, a = tl(o = this).options.authDomain, s = tl(o).options.apiKey, a && Ti() && (o.Zb = o.Z.then(function() {
                        var t;
                        if (!o.l) return o.a = Cc(a, s, tl(o).name), Tc(o.a, o), el(o) && mh(el(o)), o.D && (mh(o.D), (t = o.D).va(o.ja()), uh(t, o), ch(t = o.D, o.N), hh(t, o), o.D = null), o.a
                    })), this.INTERNAL = {}, this.INTERNAL.delete = b(this.delete, this), this.INTERNAL.logFramework = b(this.Ec, this), this.s = 0, dn.call(this), u = this, Object.defineProperty(u, "lc", {
                        get: function() {
                            return this.ja()
                        },
                        set: function(t) {
                            this.va(t)
                        },
                        enumerable: !1
                    }), u.$ = null, Object.defineProperty(u, "ti", {
                        get: function() {
                            return this.S()
                        },
                        set: function(t) {
                            this.ub(t)
                        },
                        enumerable: !1
                    }), u.R = null, this.N = []
                }

                function Xh(t) {
                    He.call(this, "languageCodeChanged"), this.g = t
                }

                function Jh(t) {
                    He.call(this, "frameworkChanged"), this.c = t
                }

                function Yh(t) {
                    return t.Zb || Te(new I("auth-domain-config-required"))
                }

                function zh(t) {
                    if (!Ti()) return Te(new I("operation-not-supported-in-this-environment"));
                    var e = Yh(t).then(function() {
                        return t.a.pa()
                    }).then(function(t) {
                        return t ? Hi(t) : null
                    });
                    return rl(t, e)
                }

                function $h(o, a) {
                    var s = {};
                    return s.apiKey = tl(o).options.apiKey, s.authDomain = tl(o).options.authDomain, s.appName = tl(o).name, o.Z.then(function() {
                        return t = s, e = a, n = o.B, i = o.Ea(), r = new sh(t, e), n && (r.ga = n), i && ch(r, i), r.reload().then(function() {
                            return r
                        });
                        var t, e, n, i, r
                    }).then(function(t) {
                        return el(o) && t.uid == el(o).uid ? Ah(el(o), t) : (Zh(o, t), mh(t)), o.ca(t)
                    }).then(function() {
                        il(o)
                    })
                }

                function Zh(t, e) {
                    var n, i;
                    el(t) && (n = el(t), i = t.Ma, G(n.R, function(t) {
                        return t == i
                    }), rn(el(t), "tokenChanged", t.xa), rn(el(t), "userDeleted", t.ya), rn(el(t), "userInvalidated", t.za), dh(el(t))), e && (e.R.push(t.Ma), tn(e, "tokenChanged", t.xa), tn(e, "userDeleted", t.ya), tn(e, "userInvalidated", t.za), 0 < t.s && fh(e)), Fi(t, "currentUser", e), e && (e.va(t.ja()), uh(e, t), ch(e, t.N), hh(e, t))
                }

                function Qh(n, t) {
                    var e = null,
                        i = null;
                    return rl(n, t.then(function(t) {
                        return e = Oo(t), i = Fr(t), $h(n, t)
                    }, function(t) {
                        var e = null;
                        throw t && "auth/multi-factor-auth-required" === t.code && (e = Wc(t.v(), n, b(n.ic, n))), e || t
                    }).then(function() {
                        return Hi({
                            user: el(n),
                            credential: e,
                            additionalUserInfo: i,
                            operationType: "signIn"
                        })
                    }))
                }

                function tl(t) {
                    return t.app
                }

                function el(t) {
                    return t.currentUser
                }

                function nl(t) {
                    return el(t) && el(t)._lat || null
                }

                function il(t) {
                    if (t.aa) {
                        for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](nl(t));
                        if (t.W !== t.getUid() && t.O.length)
                            for (t.W = t.getUid(), e = 0; e < t.O.length; e++) t.O[e] && t.O[e](nl(t))
                    }
                }

                function rl(t, e) {
                    return t.P.push(e), e.ma(function() {
                        K(t.P, e)
                    }), e
                }

                function ol() {}

                function al() {
                    this.a = {}, this.b = 1e12
                }
                Uh.prototype.tb = function(e) {
                    var n = null,
                        i = this;
                    return function(t) {
                        var e = new I("invalid-persistence-type"),
                            n = new I("unsupported-persistence-type");
                        t: {
                            for (i in qu)
                                if (qu[i] == t) {
                                    var i = !0;
                                    break t
                                }
                            i = !1
                        }
                        if (!i || "string" != typeof t) throw e;
                        switch (fi()) {
                            case "ReactNative":
                                if ("session" === t) throw n;
                                break;
                            case "Node":
                                if ("none" !== t) throw n;
                                break;
                            case "Worker":
                                if ("session" === t || !wu() && "none" !== t) throw n;
                                break;
                            default:
                                if (!Ii() && "none" !== t) throw n
                        }
                    }(e), Bh(this, function() {
                        return e != i.c.F ? i.b.get(i.c, i.a).then(function(t) {
                            return n = t, Vh(i, e)
                        }).then(function() {
                            if (i.c = qh(e), n) return i.b.set(i.c, n, i.a)
                        }) : Ie()
                    })
                }, e(Wh, dn), e(Xh, He), e(Jh, He), (t = Wh.prototype).tb = function(t) {
                    return t = this.i.tb(t), rl(this, t)
                }, t.va = function(t) {
                    this.$ === t || this.l || (this.$ = t, Ja(this.b, this.$), this.dispatchEvent(new Xh(this.ja())))
                }, t.ja = function() {
                    return this.$
                }, t.dd = function() {
                    var t = l.navigator;
                    this.va(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                }, t.Ec = function(t) {
                    this.N.push(t), Ya(this.b, Wl.default.SDK_VERSION ? bi(Wl.default.SDK_VERSION, this.N) : null), this.dispatchEvent(new Jh(this.N))
                }, t.Ea = function() {
                    return W(this.N)
                }, t.ub = function(t) {
                    this.R === t || this.l || (this.R = t, this.b.b = this.R)
                }, t.S = function() {
                    return this.R
                }, t.toJSON = function() {
                    return {
                        apiKey: tl(this).options.apiKey,
                        authDomain: tl(this).options.authDomain,
                        appName: tl(this).name,
                        currentUser: el(this) && el(this).v()
                    }
                }, t.Cb = function(t, e) {
                    switch (t) {
                        case "unknown":
                        case "signInViaRedirect":
                            return !0;
                        case "signInViaPopup":
                            return this.g == e && !!this.f;
                        default:
                            return !1
                    }
                }, t.la = function(t, e, n, i) {
                    "signInViaPopup" == t && this.g == i && (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w)
                }, t.Da = function(t, e) {
                    return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? b(this.gc, this) : null
                }, t.gc = function(t, e, n, i) {
                    var r = this,
                        o = {
                            requestUri: t,
                            postBody: i,
                            sessionId: e,
                            tenantId: n
                        };
                    return this.c && (this.c.cancel(), this.c = null), r.Z.then(function() {
                        return Qh(r, cs(r.b, o))
                    })
                }, t.Vc = function(e) {
                    if (!Ti()) return Te(new I("operation-not-supported-in-this-environment"));
                    var n = this,
                        t = Vr(e.providerId),
                        i = Oi(),
                        r = null;
                    (!ki() || hi()) && tl(this).options.authDomain && e.isOAuthProvider && (r = su(tl(this).options.authDomain, tl(this).options.apiKey, tl(this).name, "signInViaPopup", e, null, i, Wl.default.SDK_VERSION || null, null, null, this.S()));
                    var o = oi(r, t && t.ta, t && t.sa);
                    return rl(this, t = Yh(this).then(function(t) {
                        return Sc(t, o, "signInViaPopup", e, i, !!r, n.S())
                    }).then(function() {
                        return new pe(function(t, e) {
                            n.la("signInViaPopup", null, new I("cancelled-popup-request"), n.g), n.f = t, n.w = e, n.g = i, n.c = Oc(n.a, n, "signInViaPopup", o, i)
                        })
                    }).then(function(t) {
                        return o && ri(o), t ? Hi(t) : null
                    }).o(function(t) {
                        throw o && ri(o), t
                    }))
                }, t.Wc = function(t) {
                    if (!Ti()) return Te(new I("operation-not-supported-in-this-environment"));
                    var e = this;
                    return rl(this, Yh(this).then(function() {
                        return Bh(t = e.i, function() {
                            return t.b.set(Fh, t.c.F, t.a)
                        });
                        var t
                    }).then(function() {
                        return _c(e.a, "signInViaRedirect", t, void 0, e.S())
                    }))
                }, t.pa = function() {
                    var e = this;
                    return zh(this).then(function(t) {
                        return e.a && Lc(e.a.b), t
                    }).o(function(t) {
                        throw e.a && Lc(e.a.b), t
                    })
                }, t.bd = function(t) {
                    if (!t) return Te(new I("null-user"));
                    if (this.R != t.tenantId) return Te(new I("tenant-id-mismatch"));
                    var e = this,
                        n = {};
                    n.apiKey = tl(this).options.apiKey, n.authDomain = tl(this).options.authDomain, n.appName = tl(this).name;
                    var i, r, o, a, s, u, c = (i = t, r = n, o = e.B, a = e.Ea(), s = i.b, (u = {})[Ka] = s.b && s.b.toString(), u.refreshToken = s.a, r = new sh(r || {
                        apiKey: i.l,
                        authDomain: i.s,
                        appName: i.m
                    }, u), o && (r.ga = o), a && ch(r, a), Ah(r, i), r);
                    return rl(this, this.h.then(function() {
                        if (tl(e).options.apiKey != t.l) return c.reload()
                    }).then(function() {
                        return el(e) && t.uid == el(e).uid ? (Ah(el(e), t), e.ca(t)) : (Zh(e, c), mh(c), e.ca(c))
                    }).then(function() {
                        il(e)
                    }))
                }, t.wb = function() {
                    var t = this,
                        e = this.h.then(function() {
                            return t.a && Lc(t.a.b), el(t) ? (Zh(t, null), Kh(t.i).then(function() {
                                il(t)
                            })) : Ie()
                        });
                    return rl(this, e)
                }, t.Xc = function() {
                    var i = this;
                    return Gh(this.i, tl(this).options.authDomain).then(function(t) {
                        if (!i.l) {
                            var e, n;
                            if ((n = el(i) && t) && (n = el(i).uid, e = t.uid, n = null != n && "" !== n && null != e && "" !== e && n == e), n) return Ah(el(i), t), el(i).I();
                            (el(i) || t) && (Zh(i, t), t && (mh(t), t.ga = i.B), i.a && Tc(i.a, i), il(i))
                        }
                    })
                }, t.ca = function(t) {
                    return Hh(this.i, t)
                }, t.jc = function() {
                    il(this), this.ca(el(this))
                }, t.uc = function() {
                    this.wb()
                }, t.vc = function() {
                    this.wb()
                }, t.ic = function(t) {
                    var e = this;
                    return this.h.then(function() {
                        return Qh(e, Ie(t))
                    })
                }, t.xc = function(t) {
                    var e = this;
                    this.addAuthTokenListener(function() {
                        t.next(el(e))
                    })
                }, t.yc = function(t) {
                    var e, n, i = this;
                    n = function() {
                        t.next(el(i))
                    }, (e = this).O.push(n), rl(e, e.h.then(function() {
                        !e.l && H(e.O, n) && e.W !== e.getUid() && (e.W = e.getUid(), n(nl(e)))
                    }))
                }, t.Gc = function(t, e, n) {
                    var i = this;
                    return this.aa && Promise.resolve().then(function() {
                        "function" == typeof t ? t(el(i)) : "function" == typeof t.next && t.next(el(i))
                    }), this.$b(t, e, n)
                }, t.Fc = function(t, e, n) {
                    var i = this;
                    return this.aa && Promise.resolve().then(function() {
                        i.W = i.getUid(), "function" == typeof t ? t(el(i)) : "function" == typeof t.next && t.next(el(i))
                    }), this.ac(t, e, n)
                }, t.kc = function(t) {
                    var e = this,
                        n = this.h.then(function() {
                            return el(e) ? el(e).I(t).then(function(t) {
                                return {
                                    accessToken: t
                                }
                            }) : null
                        });
                    return rl(this, n)
                }, t.Rc = function(t) {
                    var n = this;
                    return this.h.then(function() {
                        return Qh(n, Ws(n.b, Fs, {
                            token: t
                        }))
                    }).then(function(t) {
                        var e = t.user;
                        return Eh(e, "isAnonymous", !1), n.ca(e), t
                    })
                }, t.Sc = function(t, e) {
                    var n = this;
                    return this.h.then(function() {
                        return Qh(n, Ws(n.b, qs, {
                            email: t,
                            password: e
                        }))
                    })
                }, t.cc = function(t, e) {
                    var n = this;
                    return this.h.then(function() {
                        return Qh(n, Ws(n.b, vs, {
                            email: t,
                            password: e
                        }))
                    })
                }, t.Ya = function(t) {
                    var e = this;
                    return this.h.then(function() {
                        return Qh(e, t.ia(e.b))
                    })
                }, t.Qc = function(t) {
                    return Ui("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.Ya(t)
                }, t.vb = function() {
                    var n = this;
                    return this.h.then(function() {
                        var t = el(n);
                        if (t && t.isAnonymous) {
                            var e = Hi({
                                providerId: null,
                                isNewUser: !1
                            });
                            return Hi({
                                user: t,
                                credential: null,
                                additionalUserInfo: e,
                                operationType: "signIn"
                            })
                        }
                        return Qh(n, n.b.vb()).then(function(t) {
                            var e = t.user;
                            return Eh(e, "isAnonymous", !0), n.ca(e), t
                        })
                    })
                }, t.getUid = function() {
                    return el(this) && el(this).uid || null
                }, t.bc = function(t) {
                    this.addAuthTokenListener(t), this.s++, 0 < this.s && el(this) && fh(el(this))
                }, t.Nc = function(e) {
                    var n = this;
                    U(this.m, function(t) {
                        t == e && n.s--
                    }), this.s < 0 && (this.s = 0), 0 == this.s && el(this) && dh(el(this)), this.removeAuthTokenListener(e)
                }, t.addAuthTokenListener = function(t) {
                    var e = this;
                    this.m.push(t), rl(this, this.h.then(function() {
                        e.l || H(e.m, t) && t(nl(e))
                    }))
                }, t.removeAuthTokenListener = function(e) {
                    G(this.m, function(t) {
                        return t == e
                    })
                }, t.delete = function() {
                    this.l = !0;
                    for (var t = 0; t < this.P.length; t++) this.P[t].cancel("app-deleted");
                    return this.P = [], this.i && (t = this.i).b.removeListener(qh("local"), t.a, this.oa), this.a && (Ec(this.a, this), Lc(this.a.b)), Promise.resolve()
                }, t.fc = function(t) {
                    return rl(this, Ws(this.b, ms, {
                        identifier: t,
                        continueUri: Ei() ? ei() : "http://localhost"
                    }).then(function(t) {
                        return t.signinMethods || []
                    }))
                }, t.zc = function(t) {
                    return !!Eo(t)
                }, t.sb = function(e, n) {
                    var i = this;
                    return rl(this, Ie().then(function() {
                        var t = new wr(n);
                        if (!t.c) throw new I("argument-error", Er + " must be true when sending sign in link to email");
                        return Rr(t)
                    }).then(function(t) {
                        return i.b.sb(e, t)
                    }).then(function() {}))
                }, t.fd = function(t) {
                    return this.Pa(t).then(function(t) {
                        return t.data.email
                    })
                }, t.jb = function(t, e) {
                    return rl(this, this.b.jb(t, e).then(function() {}))
                }, t.Pa = function(t) {
                    return rl(this, this.b.Pa(t).then(function(t) {
                        return new $i(t)
                    }))
                }, t.fb = function(t) {
                    return rl(this, this.b.fb(t).then(function() {}))
                }, t.rb = function(e, t) {
                    var n = this;
                    return rl(this, Ie().then(function() {
                        return void 0 === t || ut(t) ? {} : Rr(new wr(t))
                    }).then(function(t) {
                        return n.b.rb(e, t)
                    }).then(function() {}))
                }, t.Uc = function(t, e) {
                    return rl(this, Fc(this, t, e, b(this.Ya, this)))
                }, t.Tc = function(n, i) {
                    var r = this;
                    return rl(this, Ie().then(function() {
                        var t = i || ei(),
                            e = To(n, t);
                        if (!(t = Eo(t))) throw new I("argument-error", "Invalid email link!");
                        if (t.tenantId !== r.S()) throw new I("tenant-id-mismatch");
                        return r.Ya(e)
                    }))
                }, ol.prototype.render = function() {}, ol.prototype.reset = function() {}, ol.prototype.getResponse = function() {}, ol.prototype.execute = function() {};
                var sl = null;

                function ul(t, e) {
                    return (e = cl(e)) && t.a[e] || null
                }

                function cl(t) {
                    return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
                }

                function hl(t, e) {
                    this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = ee(t);
                    var n = this;
                    this.i = function() {
                        n.execute()
                    }, this.h ? this.execute() : tn(this.f, "click", this.i)
                }

                function ll(t) {
                    if (t.g) throw Error("reCAPTCHA mock was already deleted!")
                }

                function fl() {}

                function dl() {}
                al.prototype.render = function(t, e) {
                    return this.a[this.b.toString()] = new hl(t, e), this.b++
                }, al.prototype.reset = function(t) {
                    var e = ul(this, t);
                    t = cl(t), e && t && (e.delete(), delete this.a[t])
                }, al.prototype.getResponse = function(t) {
                    return (t = ul(this, t)) ? t.getResponse() : null
                }, al.prototype.execute = function(t) {
                    (t = ul(this, t)) && t.execute()
                }, hl.prototype.getResponse = function() {
                    return ll(this), this.b
                }, hl.prototype.execute = function() {
                    ll(this);
                    var n = this;
                    this.a || (this.a = setTimeout(function() {
                        n.b = function() {
                            for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                            return e.join("")
                        }();
                        var t = n.c.callback,
                            e = n.c["expired-callback"];
                        if (t) try {
                            t(n.b)
                        } catch (t) {}
                        n.a = setTimeout(function() {
                            if (n.a = null, n.b = null, e) try {
                                e()
                            } catch (t) {}
                            n.h && n.execute()
                        }, 6e4)
                    }, 500))
                }, hl.prototype.delete = function() {
                    ll(this), this.g = !0, clearTimeout(this.a), this.a = null, rn(this.f, "click", this.i)
                }, Fi(fl, "FACTOR_ID", "phone"), dl.prototype.g = function() {
                    return Ie(sl = sl || new al)
                }, dl.prototype.c = function() {};
                var pl = null;

                function vl() {
                    this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var ml = new dt(mt, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                    gl = new Di(3e4, 6e4);
                vl.prototype.g = function(r) {
                    var o = this;
                    return new pe(function(t, e) {
                        var i = setTimeout(function() {
                            e(new I("network-request-failed"))
                        }, gl.get());
                        !l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function() {
                            var n;
                            l.grecaptcha ? (o.f = r, n = l.grecaptcha.render, l.grecaptcha.render = function(t, e) {
                                return t = n(t, e), o.b++, t
                            }, clearTimeout(i), t(l.grecaptcha)) : (clearTimeout(i), e(new I("internal-error"))), delete l[o.a]
                        }, Ie(La(wt(ml, {
                            onload: o.a,
                            hl: r || ""
                        }))).o(function() {
                            clearTimeout(i), e(new I("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                        })) : (clearTimeout(i), t(l.grecaptcha))
                    })
                }, vl.prototype.c = function() {
                    this.b--
                };
                var bl = null;

                function yl(t, e, n, i, r, o, a) {
                    if (Fi(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.u = e, this.g = null, a = a ? pl = pl || new dl : bl = bl || new vl, this.m = a, this.a = n || {
                            theme: "light",
                            type: "image"
                        }, this.h = [], this.a[Tl]) throw new I("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[El], !l.document) throw new I("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!ee(e) || !this.i && ee(e).hasChildNodes()) throw new I("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                    this.s = new qa(t, o || null, r || null), this.w = i || function() {
                        return null
                    };
                    var s = this;
                    this.l = [];
                    var u = this.a[wl];
                    this.a[wl] = function(t) {
                        var e;
                        Al(s, t), "function" == typeof u ? u(t) : "string" != typeof u || "function" == typeof(e = wi(u, l)) && e(t)
                    };
                    var c = this.a[Il];
                    this.a[Il] = function() {
                        var t;
                        Al(s, null), "function" == typeof c ? c() : "string" != typeof c || "function" == typeof(t = wi(c, l)) && t()
                    }
                }
                var wl = "callback",
                    Il = "expired-callback",
                    Tl = "sitekey",
                    El = "size";

                function Al(t, e) {
                    for (var n = 0; n < t.l.length; n++) try {
                        t.l[n](e)
                    } catch (t) {}
                }

                function kl(t, e) {
                    return t.h.push(e), e.ma(function() {
                        K(t.h, e)
                    }), e
                }

                function Sl(t) {
                    if (t.D) throw new I("internal-error", "RecaptchaVerifier instance has been destroyed.")
                }

                function Nl(t, e, n) {
                    var i = !1;
                    try {
                        this.b = n || Wl.default.app()
                    } catch (t) {
                        throw new I("argument-error", "No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey) throw new I("invalid-api-key");
                    n = this.b.options.apiKey;
                    var r = this,
                        o = null;
                    try {
                        o = this.b.auth().Ea()
                    } catch (t) {}
                    try {
                        i = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (t) {}
                    o = Wl.default.SDK_VERSION ? bi(Wl.default.SDK_VERSION, o) : null, yl.call(this, n, t, e, function() {
                        try {
                            var e = r.b.auth().ja()
                        } catch (t) {
                            e = null
                        }
                        return e
                    }, o, N(E), i)
                }

                function _l(t, e, n, i) {
                    t: {
                        n = Array.prototype.slice.call(n);
                        for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional) o = !0;
                            else {
                                if (o) throw new I("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                r++
                            }
                        if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else {
                            for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r], !e[r].K(n[r]) && !o) {
                                    if (e = e[r], r < 0 || r >= Ol.length) throw new I("internal-error", "Argument validator received an unsupported number of arguments.");
                                    n = Ol[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.J + ".";
                                    break t
                                }
                            i = null
                        }
                    }
                    if (i) throw new I("argument-error", t + " failed: " + i)
                }(t = yl.prototype).Ga = function() {
                    var e = this;
                    return this.f ? this.f : this.f = kl(this, Ie().then(function() {
                        if (Ei() && !li()) return ui();
                        throw new I("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    }).then(function() {
                        return e.m.g(e.w())
                    }).then(function(t) {
                        return e.g = t, Ws(e.s, Os, {})
                    }).then(function(t) {
                        e.a[Tl] = t.recaptchaSiteKey
                    }).o(function(t) {
                        throw e.f = null, t
                    }))
                }, t.render = function() {
                    Sl(this);
                    var n = this;
                    return kl(this, this.Ga().then(function() {
                        var t, e;
                        return null === n.c && (e = n.u, n.i || (t = ee(e), e = ae("DIV"), t.appendChild(e)), n.c = n.g.render(e, n.a)), n.c
                    }))
                }, t.verify = function() {
                    Sl(this);
                    var r = this;
                    return kl(this, this.render().then(function(e) {
                        return new pe(function(n) {
                            var i, t = r.g.getResponse(e);
                            t ? n(t) : (i = function(t) {
                                var e;
                                t && (e = i, G(r.l, function(t) {
                                    return t == e
                                }), n(t))
                            }, r.l.push(i), r.i && r.g.execute(r.c))
                        })
                    }))
                }, t.reset = function() {
                    Sl(this), null !== this.c && this.g.reset(this.c)
                }, t.clear = function() {
                    Sl(this), this.D = !0, this.m.c();
                    for (var t, e = 0; e < this.h.length; e++) this.h[e].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        e = ee(this.u);
                        for (; t = e.firstChild;) e.removeChild(t)
                    }
                }, e(Nl, yl);
                var Ol = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                function Rl(t, e) {
                    return {
                        name: t || "",
                        J: "a valid string",
                        optional: !!e,
                        K: function(t) {
                            return "string" == typeof t
                        }
                    }
                }

                function Cl(t, e) {
                    return {
                        name: t || "",
                        J: "a boolean",
                        optional: !!e,
                        K: function(t) {
                            return "boolean" == typeof t
                        }
                    }
                }

                function Dl(t, e) {
                    return {
                        name: t || "",
                        J: "a valid object",
                        optional: !!e,
                        K: m
                    }
                }

                function Pl(t, e) {
                    return {
                        name: t || "",
                        J: "a function",
                        optional: !!e,
                        K: function(t) {
                            return "function" == typeof t
                        }
                    }
                }

                function Ll(t, e) {
                    return {
                        name: t || "",
                        J: "null",
                        optional: !!e,
                        K: function(t) {
                            return null === t
                        }
                    }
                }

                function Ml(n) {
                    return {
                        name: n ? n + "Credential" : "credential",
                        J: n ? "a valid " + n + " credential" : "a valid credential",
                        optional: !1,
                        K: function(t) {
                            if (!t) return !1;
                            var e = !n || t.providerId === n;
                            return !(!t.ia || !e)
                        }
                    }
                }

                function xl() {
                    return {
                        name: "multiFactorAssertion",
                        J: "a valid multiFactorAssertion",
                        optional: !1,
                        K: function(t) {
                            return !!t && !!t.ob
                        }
                    }
                }

                function jl() {
                    return {
                        name: "authProvider",
                        J: "a valid Auth provider",
                        optional: !1,
                        K: function(t) {
                            return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                        }
                    }
                }

                function Ul(t, e) {
                    return m(t) && "string" == typeof t.type && t.type === e && "function" == typeof t.Fa
                }

                function Vl(t) {
                    return m(t) && "string" == typeof t.uid
                }

                function Fl() {
                    return {
                        name: "applicationVerifier",
                        J: "an implementation of firebase.auth.ApplicationVerifier",
                        optional: !1,
                        K: function(t) {
                            return !(!t || "string" != typeof t.type || "function" != typeof t.verify)
                        }
                    }
                }

                function ql(e, n, t, i) {
                    return {
                        name: t || "",
                        J: e.J + " or " + n.J,
                        optional: !!i,
                        K: function(t) {
                            return e.K(t) || n.K(t)
                        }
                    }
                }

                function Hl(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        t[i] = Bl(i, t[n], e[n].j)
                    }
                }

                function Kl(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, {
                            get: y(function(t) {
                                return this[t]
                            }, n),
                            set: y(function(t, e, n, i) {
                                _l(t, [n], [i], !0), this[e] = i
                            }, i, n, e[n].gb),
                            enumerable: !0
                        })
                    }
                }

                function Gl(t, e, n, i) {
                    t[e] = Bl(e, n, i)
                }

                function Bl(t, e, n) {
                    function i() {
                        var t = Array.prototype.slice.call(arguments);
                        return _l(a, n, t), e.apply(this, t)
                    }
                    if (!n) return e;
                    var r, o, a = (o = (o = t).split("."))[o.length - 1];
                    for (r in e) i[r] = e[r];
                    for (r in e.prototype) i.prototype[r] = e.prototype[r];
                    return i
                }
                Hl(Wh.prototype, {
                        fb: {
                            name: "applyActionCode",
                            j: [Rl("code")]
                        },
                        Pa: {
                            name: "checkActionCode",
                            j: [Rl("code")]
                        },
                        jb: {
                            name: "confirmPasswordReset",
                            j: [Rl("code"), Rl("newPassword")]
                        },
                        cc: {
                            name: "createUserWithEmailAndPassword",
                            j: [Rl("email"), Rl("password")]
                        },
                        fc: {
                            name: "fetchSignInMethodsForEmail",
                            j: [Rl("email")]
                        },
                        pa: {
                            name: "getRedirectResult",
                            j: []
                        },
                        zc: {
                            name: "isSignInWithEmailLink",
                            j: [Rl("emailLink")]
                        },
                        Fc: {
                            name: "onAuthStateChanged",
                            j: [ql(Dl(), Pl(), "nextOrObserver"), Pl("opt_error", !0), Pl("opt_completed", !0)]
                        },
                        Gc: {
                            name: "onIdTokenChanged",
                            j: [ql(Dl(), Pl(), "nextOrObserver"), Pl("opt_error", !0), Pl("opt_completed", !0)]
                        },
                        rb: {
                            name: "sendPasswordResetEmail",
                            j: [Rl("email"), ql(Dl("opt_actionCodeSettings", !0), Ll(null, !0), "opt_actionCodeSettings", !0)]
                        },
                        sb: {
                            name: "sendSignInLinkToEmail",
                            j: [Rl("email"), Dl("actionCodeSettings")]
                        },
                        tb: {
                            name: "setPersistence",
                            j: [Rl("persistence")]
                        },
                        Qc: {
                            name: "signInAndRetrieveDataWithCredential",
                            j: [Ml()]
                        },
                        vb: {
                            name: "signInAnonymously",
                            j: []
                        },
                        Ya: {
                            name: "signInWithCredential",
                            j: [Ml()]
                        },
                        Rc: {
                            name: "signInWithCustomToken",
                            j: [Rl("token")]
                        },
                        Sc: {
                            name: "signInWithEmailAndPassword",
                            j: [Rl("email"), Rl("password")]
                        },
                        Tc: {
                            name: "signInWithEmailLink",
                            j: [Rl("email"), Rl("emailLink", !0)]
                        },
                        Uc: {
                            name: "signInWithPhoneNumber",
                            j: [Rl("phoneNumber"), Fl()]
                        },
                        Vc: {
                            name: "signInWithPopup",
                            j: [jl()]
                        },
                        Wc: {
                            name: "signInWithRedirect",
                            j: [jl()]
                        },
                        bd: {
                            name: "updateCurrentUser",
                            j: [ql({
                                name: "user",
                                J: "an instance of Firebase User",
                                optional: !1,
                                K: function(t) {
                                    return !!(t && t instanceof sh)
                                }
                            }, Ll(), "user")]
                        },
                        wb: {
                            name: "signOut",
                            j: []
                        },
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        },
                        dd: {
                            name: "useDeviceLanguage",
                            j: []
                        },
                        fd: {
                            name: "verifyPasswordResetCode",
                            j: [Rl("code")]
                        }
                    }), Kl(Wh.prototype, {
                        lc: {
                            name: "languageCode",
                            gb: ql(Rl(), Ll(), "languageCode")
                        },
                        ti: {
                            name: "tenantId",
                            gb: ql(Rl(), Ll(), "tenantId")
                        }
                    }), (Wh.Persistence = qu).LOCAL = "local", Wh.Persistence.SESSION = "session", Wh.Persistence.NONE = "none", Hl(sh.prototype, {
                        delete: {
                            name: "delete",
                            j: []
                        },
                        mc: {
                            name: "getIdTokenResult",
                            j: [Cl("opt_forceRefresh", !0)]
                        },
                        I: {
                            name: "getIdToken",
                            j: [Cl("opt_forceRefresh", !0)]
                        },
                        Ac: {
                            name: "linkAndRetrieveDataWithCredential",
                            j: [Ml()]
                        },
                        mb: {
                            name: "linkWithCredential",
                            j: [Ml()]
                        },
                        Bc: {
                            name: "linkWithPhoneNumber",
                            j: [Rl("phoneNumber"), Fl()]
                        },
                        Cc: {
                            name: "linkWithPopup",
                            j: [jl()]
                        },
                        Dc: {
                            name: "linkWithRedirect",
                            j: [jl()]
                        },
                        Jc: {
                            name: "reauthenticateAndRetrieveDataWithCredential",
                            j: [Ml()]
                        },
                        pb: {
                            name: "reauthenticateWithCredential",
                            j: [Ml()]
                        },
                        Kc: {
                            name: "reauthenticateWithPhoneNumber",
                            j: [Rl("phoneNumber"), Fl()]
                        },
                        Lc: {
                            name: "reauthenticateWithPopup",
                            j: [jl()]
                        },
                        Mc: {
                            name: "reauthenticateWithRedirect",
                            j: [jl()]
                        },
                        reload: {
                            name: "reload",
                            j: []
                        },
                        qb: {
                            name: "sendEmailVerification",
                            j: [ql(Dl("opt_actionCodeSettings", !0), Ll(null, !0), "opt_actionCodeSettings", !0)]
                        },
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        },
                        ad: {
                            name: "unlink",
                            j: [Rl("provider")]
                        },
                        xb: {
                            name: "updateEmail",
                            j: [Rl("email")]
                        },
                        yb: {
                            name: "updatePassword",
                            j: [Rl("password")]
                        },
                        cd: {
                            name: "updatePhoneNumber",
                            j: [Ml("phone")]
                        },
                        zb: {
                            name: "updateProfile",
                            j: [Dl("profile")]
                        },
                        Ab: {
                            name: "verifyBeforeUpdateEmail",
                            j: [Rl("email"), ql(Dl("opt_actionCodeSettings", !0), Ll(null, !0), "opt_actionCodeSettings", !0)]
                        }
                    }), Hl(al.prototype, {
                        execute: {
                            name: "execute"
                        },
                        render: {
                            name: "render"
                        },
                        reset: {
                            name: "reset"
                        },
                        getResponse: {
                            name: "getResponse"
                        }
                    }), Hl(ol.prototype, {
                        execute: {
                            name: "execute"
                        },
                        render: {
                            name: "render"
                        },
                        reset: {
                            name: "reset"
                        },
                        getResponse: {
                            name: "getResponse"
                        }
                    }), Hl(pe.prototype, {
                        ma: {
                            name: "finally"
                        },
                        o: {
                            name: "catch"
                        },
                        then: {
                            name: "then"
                        }
                    }), Kl(Uc.prototype, {
                        appVerificationDisabled: {
                            name: "appVerificationDisabledForTesting",
                            gb: Cl("appVerificationDisabledForTesting")
                        }
                    }), Hl(Vc.prototype, {
                        confirm: {
                            name: "confirm",
                            j: [Rl("verificationCode")]
                        }
                    }), Gl(Qr, "fromJSON", function(t) {
                        t = "string" == typeof t ? JSON.parse(t) : t;
                        for (var e, n = [ao, wo, ko, io], i = 0; i < n.length; i++)
                            if (e = n[i](t)) return e;
                        return null
                    }, [ql(Rl(), Dl(), "json")]), Gl(Io, "credential", function(t, e) {
                        return new yo(t, e)
                    }, [Rl("email"), Rl("password")]), Hl(yo.prototype, {
                        v: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(ho.prototype, {
                        Aa: {
                            name: "addScope",
                            j: [Rl("scope")]
                        },
                        Ia: {
                            name: "setCustomParameters",
                            j: [Dl("customOAuthParameters")]
                        }
                    }), Gl(ho, "credential", lo, [ql(Rl(), Dl(), "token")]), Gl(Io, "credentialWithLink", To, [Rl("email"), Rl("emailLink")]), Hl(fo.prototype, {
                        Aa: {
                            name: "addScope",
                            j: [Rl("scope")]
                        },
                        Ia: {
                            name: "setCustomParameters",
                            j: [Dl("customOAuthParameters")]
                        }
                    }), Gl(fo, "credential", po, [ql(Rl(), Dl(), "token")]), Hl(vo.prototype, {
                        Aa: {
                            name: "addScope",
                            j: [Rl("scope")]
                        },
                        Ia: {
                            name: "setCustomParameters",
                            j: [Dl("customOAuthParameters")]
                        }
                    }), Gl(vo, "credential", mo, [ql(Rl(), ql(Dl(), Ll()), "idToken"), ql(Rl(), Ll(), "accessToken", !0)]), Hl(go.prototype, {
                        Ia: {
                            name: "setCustomParameters",
                            j: [Dl("customOAuthParameters")]
                        }
                    }), Gl(go, "credential", bo, [ql(Rl(), Dl(), "token"), Rl("secret", !0)]), Hl(co.prototype, {
                        Aa: {
                            name: "addScope",
                            j: [Rl("scope")]
                        },
                        credential: {
                            name: "credential",
                            j: [ql(Rl(), ql(Dl(), Ll()), "optionsOrIdToken"), ql(Rl(), Ll(), "accessToken", !0)]
                        },
                        Ia: {
                            name: "setCustomParameters",
                            j: [Dl("customOAuthParameters")]
                        }
                    }), Hl(ro.prototype, {
                        v: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(eo.prototype, {
                        v: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Gl(No, "credential", _o, [Rl("verificationId"), Rl("verificationCode")]), Hl(No.prototype, {
                        cb: {
                            name: "verifyPhoneNumber",
                            j: [ql(Rl(), {
                                name: "phoneInfoOptions",
                                J: "valid phone info options",
                                optional: !1,
                                K: function(t) {
                                    return !!t && (t.session && t.phoneNumber ? Ul(t.session, $r) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? Ul(t.session, Zr) && Vl(t.multiFactorHint) : t.session && t.multiFactorUid ? Ul(t.session, Zr) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber)
                                }
                            }, "phoneInfoOptions"), Fl()]
                        }
                    }), Hl(Ao.prototype, {
                        v: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(I.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(jo.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(xo.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(Bc.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [Rl(null, !0)]
                        }
                    }), Hl(Hc.prototype, {
                        Pc: {
                            name: "resolveSignIn",
                            j: [xl()]
                        }
                    }), Hl($c.prototype, {
                        Ob: {
                            name: "getSession",
                            j: []
                        },
                        dc: {
                            name: "enroll",
                            j: [xl(), Rl("displayName", !0)]
                        },
                        $c: {
                            name: "unenroll",
                            j: [ql({
                                name: "multiFactorInfo",
                                J: "a valid multiFactorInfo",
                                optional: !1,
                                K: Vl
                            }, Rl(), "multiFactorInfoIdentifier")]
                        }
                    }), Hl(Nl.prototype, {
                        clear: {
                            name: "clear",
                            j: []
                        },
                        render: {
                            name: "render",
                            j: []
                        },
                        verify: {
                            name: "verify",
                            j: []
                        }
                    }), Gl(lr, "parseLink", yr, [Rl("link")]), Gl(fl, "assertion", function(t) {
                        return new Yc(t)
                    }, [Ml("phone")]),
                    function() {
                        if (void 0 === Wl.default || !Wl.default.INTERNAL || !Wl.default.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                        var t = {
                            ActionCodeInfo: {
                                Operation: {
                                    EMAIL_SIGNIN: Qi,
                                    PASSWORD_RESET: "PASSWORD_RESET",
                                    RECOVER_EMAIL: "RECOVER_EMAIL",
                                    REVERT_SECOND_FACTOR_ADDITION: Zi,
                                    VERIFY_AND_CHANGE_EMAIL: tr,
                                    VERIFY_EMAIL: "VERIFY_EMAIL"
                                }
                            },
                            Auth: Wh,
                            AuthCredential: Qr,
                            Error: I
                        };
                        Gl(t, "EmailAuthProvider", Io, []), Gl(t, "FacebookAuthProvider", ho, []), Gl(t, "GithubAuthProvider", fo, []), Gl(t, "GoogleAuthProvider", vo, []), Gl(t, "TwitterAuthProvider", go, []), Gl(t, "OAuthProvider", co, [Rl("providerId")]), Gl(t, "SAMLAuthProvider", uo, [Rl("providerId")]), Gl(t, "PhoneAuthProvider", No, [{
                            name: "auth",
                            J: "an instance of Firebase Auth",
                            optional: !0,
                            K: function(t) {
                                return !!(t && t instanceof Wh)
                            }
                        }]), Gl(t, "RecaptchaVerifier", Nl, [ql(Rl(), {
                            name: "",
                            J: "an HTML element",
                            optional: !1,
                            K: function(t) {
                                return !!(t && t instanceof Element)
                            }
                        }, "recaptchaContainer"), Dl("recaptchaParameters", !0), {
                            name: "app",
                            J: "an instance of Firebase App",
                            optional: !0,
                            K: function(t) {
                                return !!(t && t instanceof Wl.default.app.App)
                            }
                        }]), Gl(t, "ActionCodeURL", lr, []), Gl(t, "PhoneMultiFactorGenerator", fl, []), Wl.default.INTERNAL.registerComponent({
                            name: "auth",
                            instanceFactory: function(t) {
                                return new Wh(t = t.getProvider("app").getImmediate())
                            },
                            multipleInstances: !1,
                            serviceProps: t,
                            instantiationMode: "LAZY",
                            type: "PUBLIC"
                        }), Wl.default.INTERNAL.registerComponent({
                            name: "auth-internal",
                            instanceFactory: function(t) {
                                return {
                                    getUid: b((t = t.getProvider("auth").getImmediate()).getUid, t),
                                    getToken: b(t.kc, t),
                                    addAuthTokenListener: b(t.bc, t),
                                    removeAuthTokenListener: b(t.Nc, t)
                                }
                            },
                            multipleInstances: !1,
                            instantiationMode: "LAZY",
                            type: "PRIVATE"
                        }), Wl.default.registerVersion("@firebase/auth", "0.14.9"), Wl.default.INTERNAL.extendNamespace({
                            User: sh
                        })
                    }()
            }).apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-auth.js.map