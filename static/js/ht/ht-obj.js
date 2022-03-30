!(function (B, L, h) {
  "use strict";
  function W() {
    var y = [],
      Y = [];
    return function () {
      return 0 === arguments.length
        ? Y.join("") + o.apply(String, y)
        : (y.length + arguments.length > 1024 &&
            (Y.push(o.apply(String, y)), (y.length = 0)),
          Array.prototype.push.apply(y, arguments),
          void 0);
    };
  }
  function x(E, Z, v, K, Y) {
    var t,
      w,
      b = 8 * Y - K - 1,
      N = (1 << b) - 1,
      J = N >> 1,
      F = -7,
      P = v ? Y - 1 : 0,
      m = v ? -1 : 1,
      o = E[Z + P];
    for (
      P += m, t = o & ((1 << -F) - 1), o >>= -F, F += b;
      F > 0;
      t = 256 * t + E[Z + P], P += m, F -= 8
    );
    for (
      w = t & ((1 << -F) - 1), t >>= -F, F += K;
      F > 0;
      w = 256 * w + E[Z + P], P += m, F -= 8
    );
    if (0 === t) t = 1 - J;
    else {
      if (t === N) return w ? 0 / 0 : (1 / 0) * (o ? -1 : 1);
      (w += Math.pow(2, K)), (t -= J);
    }
    return (o ? -1 : 1) * w * Math.pow(2, t - K);
  }
  var V = "ht",
    O = B[V],
    t = null,
    G = Math,
    _ = G.abs,
    n = G.max,
    d = Number.MAX_VALUE,
    I = O.Default,
    f = I.getInternal(),
    F = I.clone,
    X = f.vec3TransformMat4,
    g = [0, 0],
    R = f.appendArray,
    j = (function () {
      function b(T, a, e, r) {
        if (T) {
          var Q = T[r];
          if (Q) {
            e.ignoreColor || (a.color = Q.kd),
              !e.ignoreTransparent &&
                Q.d > 0 &&
                Q.d < 1 &&
                ((a.transparent = !0), (a.opacity = Q.d));
            var o;
            if (!e.ignoreImage && (o = Q.map_kd)) {
              o = o.split(" ");
              for (var E = -1, w = 0; w < o.length; w++)
                "-o" === o[w]
                  ? ((a.uvOffset = [
                      parseFloat(o[w + 1]),
                      parseFloat(o[w + 2]),
                    ]),
                    (w += 3),
                    (E = w))
                  : "-s" === o[w] &&
                    ((a.uvScale = [parseFloat(o[w + 1]), parseFloat(o[w + 2])]),
                    (w += 3),
                    (E = w));
              a.image = (e.prefix || "") + o.splice(E + 1).join(" ");
            }
          }
        }
      }
      var S =
          /v( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
        V = /vt( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
        Q =
          /vn( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
        W = /^[og]\s*(.+)?/,
        c = function (Y, m) {
          return (m = parseInt(m)), m >= 0 ? Y[m - 1] : Y[m + Y.length];
        },
        H = function (q, w, S, h, Q) {
          if (q.lvs) {
            var o = c(w, h),
              P = c(w, Q),
              D = S.matrix,
              Y = q.lvs;
            D ? (R(Y, X(F(o), D)), R(Y, X(F(P), D))) : (R(Y, o), R(Y, P));
          }
        },
        i = function (x, U, H, e, d, h) {
          if (x.vs) {
            var n = c(U, e),
              A = c(U, d),
              q = c(U, h),
              v = H.matrix,
              W = x.vs;
            if (H.flipFace) {
              var I = A;
              (A = q), (q = I);
            }
            v
              ? (R(W, X(F(n), v)), R(W, X(F(A), v)), R(W, X(F(q), v)))
              : (R(W, n), R(W, A), R(W, q));
          }
        },
        k = function (L, u, w, i, l, Z) {
          if (L.vs) {
            var S = w.flipY,
              R = i === h ? g : c(u, i),
              q = l === h ? g : c(u, l),
              H = Z === h ? g : c(u, Z);
            if (w.flipFace) {
              var D = q;
              (q = H), (H = D);
            }
            L.uv.push(
              R[0],
              S ? 1 - R[1] : R[1],
              q[0],
              S ? 1 - q[1] : q[1],
              H[0],
              S ? 1 - H[1] : H[1]
            );
          }
        },
        p = function (Z, b, y, h, Y, d) {
          if (Z.vs) {
            var C = c(b, h),
              O = c(b, Y),
              J = c(b, d),
              t = y.normalMatrix,
              T = Z.ns;
            if (y.flipFace) {
              var v = O;
              (O = J), (J = v);
            }
            t
              ? (R(T, X(F(C), t)), R(T, X(F(O), t)), R(T, X(F(J), t)))
              : (R(T, C), R(T, O), R(T, J));
          }
        },
        A = function (j, E, w, C) {
          for (var L = C.length - 1, _ = 0; L > _; ++_)
            H(j, E, w, C[_], C[_ + 1]);
          H(j, E, w, C[L], C[0]);
        },
        M = function (R, a, x, U, d, n, L, G) {
          var B = U && U.length && G;
          n[3] === h
            ? (i(R, a, d, n[0], n[1], n[2]),
              L
                ? k(R, x, d, L[0], L[1], L[2])
                : R.uv && R.uv.length && k(R, x, d),
              B && p(R, U, d, G[0], G[1], G[2]))
            : (i(R, a, d, n[0], n[1], n[3]),
              i(R, a, d, n[1], n[2], n[3]),
              L
                ? (k(R, x, d, L[0], L[1], L[3]), k(R, x, d, L[1], L[2], L[3]))
                : R.uv && R.uv.length && (k(R, x, d), k(R, x, d)),
              B &&
                (p(R, U, d, G[0], G[1], G[3]), p(R, U, d, G[1], G[2], G[3])));
        },
        z = function (T, j, J, i) {
          var $,
            u,
            p,
            H,
            q,
            I,
            t,
            v,
            A = d,
            e = d,
            k = d,
            W = -d,
            F = -d,
            B = -d;
          for ($ in T)
            for (I = T[$].vs, v = I.length, u = 0; v > u; u += 3)
              (p = I[u + 0]),
                (H = I[u + 1]),
                (q = I[u + 2]),
                A > p && (A = p),
                e > H && (e = H),
                k > q && (k = q),
                p > W && (W = p),
                H > F && (F = H),
                q > B && (B = q);
          var y;
          if (J) {
            var E = A + (W - A) / 2,
              X = e + (F - e) / 2,
              D = k + (B - k) / 2;
            for ($ in T) {
              for (I = T[$].vs, v = I.length, u = 0; v > u; u += 3)
                (I[u + 0] -= E), (I[u + 1] -= X), (I[u + 2] -= D);
              if ((t = T[$].lvs))
                for (v = t.length, u = 0; v > u; u += 3)
                  (t[u + 0] -= E), (t[u + 1] -= X), (t[u + 2] -= D);
            }
            y = [E, X, D];
          }
          var o, N, r;
          J
            ? ((o = W - A), (N = F - e), (r = B - k))
            : ((o = 2 * n(_(A), _(W))),
              (N = 2 * n(_(e), _(F))),
              (r = 2 * n(_(k), _(B)))),
            0 === o && (o = Math.min(N, r) / 1e3 || 0.001),
            0 === N && (N = Math.min(o, r) / 1e3 || 0.001),
            0 === r && (r = Math.min(o, N) / 1e3 || 0.001),
            (i.rawS3 = [o, N, r]);
          for ($ in T) {
            if (((I = T[$].vs), (t = T[$].lvs), j)) {
              for (v = I.length, u = 0; v > u; u += 3)
                o && (I[u + 0] /= o),
                  N && (I[u + 1] /= N),
                  r && (I[u + 2] /= r);
              if (t)
                for (v = t.length, u = 0; v > u; u += 3)
                  o && (t[u + 0] /= o),
                    N && (t[u + 1] /= N),
                    r && (t[u + 2] /= r);
              var V = T[$].ns;
              if (V) {
                v = V.length;
                var Z = new O.Math.Vector3();
                for (u = 0; v > u; u += 3)
                  Z.set(V[u + 0] * o, V[u + 1] * N, V[u + 2] * r).normalize(),
                    (V[u + 0] = Z.x),
                    (V[u + 1] = Z.y),
                    (V[u + 2] = Z.z);
              }
            }
            (T[$].rawS3 = i.rawS3), y && (T[$].center = y);
          }
        };
      return function (C, R, w) {
        if (!C) return t;
        (f.isString(R) || R instanceof ArrayBuffer) && (R = Z(R)),
          w || (w = {}),
          w.flipY == t && (w.flipY = !0),
          (w.s3 || w.r3 || w.t3 || w.mat) &&
            (w.matrix = f.createWorldMatrix(
              w.mat,
              w.s3,
              w.r3,
              w.rotationMode,
              w.t3
            ));
        var l,
          v,
          u,
          d,
          L = O.Style["wf.loadQuadWireframe"],
          E = [],
          B = [],
          X = w.ignoreNormal ? t : [],
          F = w.reverseFlipMtls,
          K = { vs: [], uv: [], ns: X ? [] : t },
          m = { htdefault: K },
          a = new T(C),
          H = "",
          s = "";
        for (
          X && w.matrix && (w.normalMatrix = f.createNormalMatrix(w.matrix));
          null != (v = a.stepNext());

        )
          if (((v = v.trim()), 0 !== v.length && "#" !== v.charAt(0)))
            if (v.indexOf("\\") !== v.length - 1) {
              if (
                (H && ((v = H + v), (H = "")),
                v.indexOf("#QNAN0") >= 0 && (v = v.replace(/#QNAN0/gi, "0")),
                (u = S.exec(v)))
              )
                E.push([parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])]);
              else if ((u = V.exec(v)))
                B.push([parseFloat(u[1]), parseFloat(u[2])]);
              else if (X && (u = Q.exec(v)))
                w.flipFace
                  ? X.push([
                      parseFloat(-u[1]),
                      parseFloat(-u[2]),
                      parseFloat(-u[3]),
                    ])
                  : X.push([
                      parseFloat(u[1]),
                      parseFloat(u[2]),
                      parseFloat(u[3]),
                    ]);
              else if ("f" === v[0]) {
                var U = v.split(/\s+/);
                if (U.length < 4) continue;
                var P,
                  l,
                  D,
                  g = [],
                  i = [],
                  n = [];
                for (l = 1, D = U.length; D > l; l++)
                  (P = U[l].split("/")),
                    g.push(parseInt(P[0], 10)),
                    P.length > 1 &&
                      P[1].length > 0 &&
                      n.push(parseInt(P[1], 10)),
                    P.length > 2 &&
                      P[2].length > 0 &&
                      i.push(parseInt(P[2], 10));
                for (l = 0, D = g.length - 2; D > l; l++)
                  M(
                    K,
                    E,
                    B,
                    X,
                    w,
                    [g[0], g[l + 1], g[l + 2]],
                    n.length ? [n[0], n[l + 1], n[l + 2]] : t,
                    i.length ? [i[0], i[l + 1], i[l + 2]] : t
                  );
                L && A(K, E, w, g);
              } else if (w.part && null !== (u = W.exec(v)))
                s = (" " + u[0].substr(1).trim()).substr(1);
              else if (/^usemtl /.test(v)) {
                var $ = v.substring(7).trim();
                $.split(" ").forEach(function (Y) {
                  var D = w.part ? s + "_" + Y : Y;
                  (K = m[D]) ||
                    ((K = m[D] =
                      {
                        name: D,
                        vs: [],
                        uv: [],
                        ns: X ? [] : t,
                        lvs: L ? [] : t,
                      }),
                    w.ignoreMtls && w.ignoreMtls.indexOf(Y) >= 0 && delete K.vs,
                    (w.reverseFlip || "*" === F || (F && F.indexOf(Y) >= 0)) &&
                      (K.reverseFlip = !0),
                    b(R, K, w, Y));
                });
              }
            } else H += v.substring(0, v.length - 1);
        var p = [];
        for (var G in m) {
          var o = m[G].vs;
          if (o && 0 !== o.length) {
            var J = m[G].uv;
            if (J)
              for (var j = (2 * o.length) / 3 - J.length; j-- > 0; ) J.push(0);
          } else p.push(G);
        }
        p.forEach(function (c) {
          delete m[c];
        }),
          z(m, w.cube, w.center, w);
        var c = w.shape3d;
        if (c) {
          var q = [];
          for (var d in m) {
            var K = m[d];
            (q.rawS3 = K.rawS3), K.center && (q.center = K.center), q.push(K);
          }
          I.setShape3dModel(c, q);
        }
        return m;
      };
    })(),
    Z = function (F) {
      var l = {};
      if (F)
        for (
          var D, h, n, _, y, X, b = new T(F), Y = /\s+/;
          null != (h = b.stepNext());

        )
          (h = h.trim()),
            0 !== h.length &&
              "#" !== h.charAt(0) &&
              ((n = h.indexOf(" ")),
              (_ = (n ? h.substring(0, n) : h).toLowerCase()),
              (y = (n ? h.substring(n + 1) : "").trim()),
              "newmtl" === _
                ? (l[y] = D = { name: y })
                : D &&
                  ("ka" === _ || "kd" === _ || "ks" === _
                    ? ((X = y.split(Y, 3)),
                      (D[_] = [
                        parseFloat(X[0]),
                        parseFloat(X[1]),
                        parseFloat(X[2]),
                        1,
                      ]))
                    : (D[_] = "ns" === _ || "d" === _ ? parseFloat(y) : y)));
      return l;
    },
    T = function (w) {
      var J = this;
      if (w instanceof ArrayBuffer) {
        J.isBuffer = !0;
        var b = 0,
          X = new Uint8Array(w),
          $ = X.length,
          y = X.length;
        J.stepNext = function () {
          for (var W, E, G = b; $ > b; )
            if (((W = X[b]), (E = W >> 4), 12 === E || 13 == E)) b += 2;
            else if (14 === E) b += 3;
            else if ((b++, 10 === W))
              return String.fromCharCode.apply(null, X.subarray(G, b));
          return b > G
            ? String.fromCharCode.apply(null, X.subarray(G, b))
            : null;
        };
      } else {
        J.isBuffer = !1;
        var F = w.split("\n"),
          c = 0,
          y = F.length;
        J.stepNext = function () {
          return y > c ? F[c++] : null;
        };
      }
    };
  (T.prototype = {}),
    (T.prototype.constructor = T),
    f.addMethod(I, {
      loadObj: function (W, h, Z) {
        Z = Z || {};
        var R = !1;
        /(MSIE |Trident\/|Edge\/)/.test(B.navigator.userAgent) && (R = !0);
        var l = function (W) {
          var i,
            J = Z.finishFunc,
            D = Z.shape3d,
            e = W ? j(W[0], W[1], Z) : null;
          if (e) {
            if (D) i = I.getShape3dModel(D);
            else {
              i = [];
              for (var A in e) {
                var V = e[A];
                (i.rawS3 = V.rawS3), i.push(V);
              }
            }
            J && J(e, i, i.rawS3);
          } else J && J(null);
        };
        if (R) {
          Z.responseType = "arraybuffer";
          var O = function (k) {
            I.xhrLoad(
              W,
              function (L) {
                l([L, k]);
              },
              Z
            );
          };
          h
            ? I.xhrLoad(
                h,
                function (m) {
                  O(m);
                },
                Z
              )
            : O();
        } else I.xhrLoad(h ? [W, h] : [W], l, Z);
      },
      parseObj: function (d, P, p) {
        return j(d, P, p);
      },
    });
  var b = (O.ByteBuffer = function (C, H, n) {
      if (
        ("undefined" == typeof C && (C = b.DEFAULT_CAPACITY),
        "undefined" == typeof H && (H = b.DEFAULT_ENDIAN),
        "undefined" == typeof n && (n = b.DEFAULT_NOASSERT),
        !n)
      ) {
        if (((C = 0 | C), 0 > C)) throw RangeError("Illegal capacity");
        (H = !!H), (n = !!n);
      }
      (this.buffer = 0 === C ? e : new ArrayBuffer(C)),
        (this.view = 0 === C ? null : new Uint8Array(this.buffer)),
        (this.offset = 0),
        (this.markedOffset = -1),
        (this.limit = C),
        (this.littleEndian = H),
        (this.noAssert = n);
    }),
    e = new ArrayBuffer(0);
  (b.LITTLE_ENDIAN = !0),
    (b.BIG_ENDIAN = !1),
    (b.DEFAULT_CAPACITY = 16),
    (b.DEFAULT_ENDIAN = b.BIG_ENDIAN),
    (b.DEFAULT_NOASSERT = !1),
    (b.METRICS_BYTES = "b");
  var o = String.fromCharCode,
    C = b.prototype;
  (C.readUint8 = function (Z) {
    var y = "undefined" == typeof Z;
    if ((y && (Z = this.offset), !this.noAssert)) {
      if ("number" != typeof Z || 0 !== Z % 1)
        throw TypeError("Illegal offset: " + Z + " (not an integer)");
      if (((Z >>>= 0), 0 > Z || Z + 1 > this.buffer.byteLength))
        throw RangeError(
          "Illegal offset: 0 <= " +
            Z +
            " (+" +
            1 +
            ") <= " +
            this.buffer.byteLength
        );
    }
    var V = this.view[Z];
    return y && (this.offset += 1), V;
  }),
    (C.readUint16 = function (u) {
      var U = "undefined" == typeof u;
      if ((U && (u = this.offset), !this.noAssert)) {
        if ("number" != typeof u || 0 !== u % 1)
          throw TypeError("Illegal offset: " + u + " (not an integer)");
        if (((u >>>= 0), 0 > u || u + 2 > this.buffer.byteLength))
          throw RangeError(
            "Illegal offset: 0 <= " +
              u +
              " (+" +
              2 +
              ") <= " +
              this.buffer.byteLength
          );
      }
      var k = 0;
      return (
        this.littleEndian
          ? ((k = this.view[u]), (k |= this.view[u + 1] << 8))
          : ((k = this.view[u] << 8), (k |= this.view[u + 1])),
        U && (this.offset += 2),
        k
      );
    }),
    (C.readUint24 = function (P) {
      var p = "undefined" == typeof P;
      if ((p && (P = this.offset), !this.noAssert)) {
        if ("number" != typeof P || 0 !== P % 1)
          throw TypeError("Illegal offset: " + P + " (not an integer)");
        if (((P >>>= 0), 0 > P || P + 4 > this.buffer.byteLength))
          throw RangeError(
            "Illegal offset: 0 <= " +
              P +
              " (+" +
              4 +
              ") <= " +
              this.buffer.byteLength
          );
      }
      var I = 0;
      return (
        this.littleEndian
          ? ((I = this.view[P + 2] << 16),
            (I |= this.view[P + 1] << 8),
            (I |= this.view[P]))
          : ((I = this.view[P + 1] << 8),
            (I |= this.view[P + 2]),
            (I += (this.view[P] << 16) >>> 0)),
        (I |= 0),
        p && (this.offset += 3),
        I
      );
    }),
    (C.readUint32 = function (l) {
      var u = "undefined" == typeof l;
      if ((u && (l = this.offset), !this.noAssert)) {
        if ("number" != typeof l || 0 !== l % 1)
          throw TypeError("Illegal offset: " + l + " (not an integer)");
        if (((l >>>= 0), 0 > l || l + 4 > this.buffer.byteLength))
          throw RangeError(
            "Illegal offset: 0 <= " +
              l +
              " (+" +
              4 +
              ") <= " +
              this.buffer.byteLength
          );
      }
      var X = 0;
      return (
        this.littleEndian
          ? ((X = this.view[l + 2] << 16),
            (X |= this.view[l + 1] << 8),
            (X |= this.view[l]),
            (X += (this.view[l + 3] << 24) >>> 0))
          : ((X = this.view[l + 1] << 16),
            (X |= this.view[l + 2] << 8),
            (X |= this.view[l + 3]),
            (X += (this.view[l] << 24) >>> 0)),
        u && (this.offset += 4),
        X
      );
    }),
    (C.readFloat32 = function (e) {
      var o = "undefined" == typeof e;
      if ((o && (e = this.offset), !this.noAssert)) {
        if ("number" != typeof e || 0 !== e % 1)
          throw TypeError("Illegal offset: " + e + " (not an integer)");
        if (((e >>>= 0), 0 > e || e + 4 > this.buffer.byteLength))
          throw RangeError(
            "Illegal offset: 0 <= " +
              e +
              " (+" +
              4 +
              ") <= " +
              this.buffer.byteLength
          );
      }
      var O = x(this.view, e, this.littleEndian, 23, 4);
      return o && (this.offset += 4), O;
    });
  var a = (function () {
    var F = {};
    return (
      (F.MAX_CODEPOINT = 1114111),
      (F.decodeUTF8 = function (r, k) {
        for (
          var q,
            n,
            g,
            y,
            _ = function (l) {
              l = l.slice(0, l.indexOf(null));
              var D = Error(l.toString());
              throw ((D.name = "TruncatedError"), (D.bytes = l), D);
            };
          null !== (q = r());

        )
          if (0 === (128 & q)) k(q);
          else if (192 === (224 & q))
            null === (n = r()) && _([q, n]), k(((31 & q) << 6) | (63 & n));
          else if (224 === (240 & q))
            (null === (n = r()) || null === (g = r())) && _([q, n, g]),
              k(((15 & q) << 12) | ((63 & n) << 6) | (63 & g));
          else {
            if (240 !== (248 & q))
              throw RangeError("Illegal starting byte: " + q);
            (null === (n = r()) || null === (g = r()) || null === (y = r())) &&
              _([q, n, g, y]),
              k(
                ((7 & q) << 18) | ((63 & n) << 12) | ((63 & g) << 6) | (63 & y)
              );
          }
      }),
      (F.UTF16toUTF8 = function (O, S) {
        for (var c, i = null; ; ) {
          if (null === (c = null !== i ? i : O())) break;
          c >= 55296 &&
          57343 >= c &&
          null !== (i = O()) &&
          i >= 56320 &&
          57343 >= i
            ? (S(1024 * (c - 55296) + i - 56320 + 65536), (i = null))
            : S(c);
        }
        null !== i && S(i);
      }),
      (F.UTF8toUTF16 = function (s, U) {
        var I = null;
        for (
          "number" == typeof s &&
          ((I = s),
          (s = function () {
            return null;
          }));
          null !== I || null !== (I = s());

        )
          65535 >= I
            ? U(I)
            : ((I -= 65536), U((I >> 10) + 55296), U((I % 1024) + 56320)),
            (I = null);
      }),
      (F.decodeUTF8toUTF16 = function (R, p) {
        F.decodeUTF8(R, function ($) {
          F.UTF8toUTF16($, p);
        });
      }),
      (F.calculateCodePoint = function (u) {
        return 128 > u ? 1 : 2048 > u ? 2 : 65536 > u ? 3 : 4;
      }),
      (F.calculateUTF8 = function (J) {
        for (var T, k = 0; null !== (T = J()); )
          k += 128 > T ? 1 : 2048 > T ? 2 : 65536 > T ? 3 : 4;
        return k;
      }),
      (F.calculateUTF16asUTF8 = function (j) {
        var B = 0,
          y = 0;
        return (
          F.UTF16toUTF8(j, function (E) {
            ++B, (y += 128 > E ? 1 : 2048 > E ? 2 : 65536 > E ? 3 : 4);
          }),
          [B, y]
        );
      }),
      F
    );
  })();
  C.readString = function (r, H, $) {
    "number" == typeof H && (($ = H), (H = h));
    var B = "undefined" == typeof $;
    if (
      (B && ($ = this.offset),
      "undefined" == typeof H && (H = b.METRICS_CHARS),
      !this.noAssert)
    ) {
      if ("number" != typeof r || 0 !== r % 1)
        throw TypeError("Illegal length: " + r + " (not an integer)");
      if (((r |= 0), "number" != typeof $ || 0 !== $ % 1))
        throw TypeError("Illegal offset: " + $ + " (not an integer)");
      if ((($ >>>= 0), 0 > $ || $ + 0 > this.buffer.byteLength))
        throw RangeError(
          "Illegal offset: 0 <= " +
            $ +
            " (+" +
            0 +
            ") <= " +
            this.buffer.byteLength
        );
    }
    var M,
      Z = 0,
      s = $;
    if (H === b.METRICS_CHARS) {
      if (
        ((M = W()),
        a.decodeUTF8(
          function () {
            return r > Z && $ < this.limit ? this.view[$++] : null;
          }.bind(this),
          function (p) {
            ++Z, a.UTF8toUTF16(p, M);
          }
        ),
        Z !== r)
      )
        throw RangeError("Illegal range: Truncated data, " + Z + " == " + r);
      return B ? ((this.offset = $), M()) : { string: M(), length: $ - s };
    }
    if (H === b.METRICS_BYTES) {
      if (!this.noAssert) {
        if ("number" != typeof $ || 0 !== $ % 1)
          throw TypeError("Illegal offset: " + $ + " (not an integer)");
        if ((($ >>>= 0), 0 > $ || $ + r > this.buffer.byteLength))
          throw RangeError(
            "Illegal offset: 0 <= " +
              $ +
              " (+" +
              r +
              ") <= " +
              this.buffer.byteLength
          );
      }
      var P = $ + r;
      if (
        (a.decodeUTF8toUTF16(
          function () {
            return P > $ ? this.view[$++] : null;
          }.bind(this),
          (M = W()),
          this.noAssert
        ),
        $ !== P)
      )
        throw RangeError("Illegal range: Truncated data, " + $ + " == " + P);
      return B ? ((this.offset = $), M()) : { string: M(), length: $ - s };
    }
    throw TypeError("Unsupported metrics: " + H);
  };
  var m = function (h) {
      if (h) {
        var n = new b(0);
        (n.buffer = h),
          (n.limit = h.byteLength),
          (n.view = h.byteLength > 0 ? new Uint8Array(h) : null);
        var V = [];
        return Y(V, n), P(V, n), p(V, n), V;
      }
    },
    Y = function (j, R) {
      R.offset += 19;
    },
    P = function (t, G) {
      var a = G.readUint8();
      1 & a && (t.center = i(G)), 2 & a && (t.rawS3 = i(G));
    },
    q = function (c) {
      return [c.readFloat32(), c.readFloat32()];
    },
    i = function (h) {
      return [h.readFloat32(), h.readFloat32(), h.readFloat32()];
    },
    w = function (S) {
      var J = S.readUint32();
      return S.readString(J, b.METRICS_BYTES);
    },
    p = function (W, i) {
      for (var O = i.readUint8(), k = 0; O > k; k++) W.push(H(i));
    },
    H = function (N) {
      var l = {},
        M = N.readUint32(),
        d = 0,
        j = M & (1 << d++),
        P = M & (1 << d++),
        C = M & (1 << d++),
        S = M & (1 << d++),
        T = M & (1 << d++),
        y = M & (1 << d++),
        r = M & (1 << d++),
        B = M & (1 << d++),
        b = M & (1 << d++),
        c = M & (1 << d++),
        Y = M & (1 << d++),
        o = M & (1 << d++);
      return (
        (j || P) && k(l, N, 3, "vs", "lvs"),
        C && k(l, N, 2, "uv"),
        S && k(l, N, 3, "ns"),
        T && (l.name = w(N)),
        y && (l.color = i(N)),
        r && (l.transparent = !!N.readUint8()),
        B && (l.opacity = N.readFloat32()),
        b && (l.uvoffset = q(N)),
        c && (l.uvScale = i(N)),
        Y && (l.image = w(N)),
        o && (l.reverseFlip = !!N.readUint8()),
        l
      );
    },
    D = 16383,
    K = function (G) {
      var n = G.readUint16(),
        Q = 16384 & n,
        P = 32768 & n,
        E = (n & D) / D,
        H = 0;
      return P && (H = G.readUint16()), (Q ? 1 : -1) * (H + E);
    },
    v = function (A) {
      var M = A.readUint32(),
        j = M & (1 << 30),
        K = M & (1 << 29),
        $ = M & (1 << 28),
        t = 16383,
        z = (16383 & (M >> 14)) / t,
        g = (16383 & M) / t,
        U = Math.sqrt(1 - z * z - g * g) || 0;
      return [z * (j ? 1 : -1), g * (K ? 1 : -1), U * ($ ? 1 : -1)];
    },
    k = function (_, r, c, O, l) {
      var p = r.readUint32();
      r.readUint8();
      var P,
        N,
        h,
        f = r.readUint32(),
        m = r.readUint32(),
        A = [];
      if ("uv" === O)
        for (P = 0; p > P; P++) (N = K(r)), (h = K(r)), A.push([N, h]);
      else if ("ns" === O) for (P = 0; p > P; P++) A.push(v(r));
      else for (var P = 0; p > P; P++) A.push(i(r));
      var b;
      b =
        256 > p
          ? "readUint8"
          : 65536 > p
          ? "readUint16"
          : 16777216 > p
          ? "readUint24"
          : "readUint32";
      var T, j, x;
      if (f)
        for (T = _[O] = [], P = 0; f > P; P++)
          (j = r[b]()),
            (x = A[j]),
            "uv" === O ? T.push(x[0], x[1]) : T.push(x[0], x[1], x[2]);
      if (m)
        for (T = _[l] = [], P = 0; m > P; P++)
          (j = r[b]()), (x = A[j]), T.push(x[0], x[1], x[2]);
    };
  I.getInternal().addMethod(I, {
    loadBin: function (R, p) {
      p = p || {};
      var P = function (n) {
        var H,
          q = p.finishFunc,
          c = p.shape3d,
          T = n ? m(n) : null;
        if (T) {
          if (c) H = I.getShape3dModel(c);
          else {
            H = [];
            for (var O in T) {
              var U = T[O];
              (H.rawS3 = U.rawS3), H.push(U);
            }
          }
          q && q(T, H, H.rawS3);
        } else q && q(null);
      };
      (p.responseType = "arraybuffer"),
        I.xhrLoad(
          R,
          function (x) {
            P(x);
          },
          p
        );
    },
    parseBin: function (S) {
      return m(S);
    },
  });
})(
  "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : (0, eval)("this"),
  Object
);
