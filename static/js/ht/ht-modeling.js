!(function (G, d, Z) {
  "use strict";
  function Y(R, c) {
    (this.position = R), (this.$22n = c);
  }
  var r = "ht",
    D = G[r],
    J = null,
    m = Math,
    Q = m.PI,
    u = m.cos,
    a = m.sin,
    X = m.abs,
    $ = m.max,
    s = m.sqrt,
    z = 1e-5,
    e = D.Default,
    C = e.def,
    K = e.startAnim,
    b = e.createMatrix,
    N = e.transformVec,
    V = e.getInternal(),
    U = V.addMethod,
    q = V.superCall,
    g = V.toPointsArray,
    w = V.createNormals,
    P = V.toFloatArray,
    v = V.glMV,
    M = (V.glPop, D.graph3d.Graph3dView, D.Math),
    E = M.Vector3,
    o = M.Matrix4,
    A = M.Euler,
    j = (M.Quaternion, V.batchShape),
    f = V.createNodeMatrix,
    k = V.getFaceInfo,
    L = V.transformAppend,
    _ = V.drawFaceInfo,
    y = V.createAnim,
    W = V.cube(),
    t = W.is,
    F = W.vs,
    I = W.uv,
    x = V.ui(),
    c = D.Node,
    p = D.Shape,
    O = "h",
    i = "v",
    l = "front",
    T = "back",
    S = "left",
    n = "right",
    R = "top",
    B = "bottom",
    h = "dw.expanded",
    H = ".expanded",
    zb = "dw.angle",
    bi = ".angle",
    kb = function (e, u, i) {
      C(r + "." + e, u, i);
    },
    Co = function (M, h, O) {
      O ? M.push(h.x, h.y) : M.push(h.x, h.y, h.z);
    },
    qn = (function () {
      var W = new D.Math.Vector3(),
        b = new D.Math.Vector3(),
        N = new D.Math.Vector3();
      return function (g, _, p, F, m) {
        if (
          (W.copy(_.$24n),
          b.copy(p.$24n),
          N.copy(F.$24n),
          !(N.equals(W) || b.equals(W) || b.equals(N)))
        ) {
          if (!_.$22n || !p.$22n || !F.$22n) {
            var l = b
              .sub(W)
              .cross(N.sub(W))
              .normalize()
              .multiplyScalar(1)
              .toArray();
            _.$22n || (_.$22n = new Kd(l)),
              p.$22n || (p.$22n = new Kd(l)),
              F.$22n || (F.$22n = new Kd(l));
          }
          g.push(new Cb([_, p, F], m));
        }
      };
    })(),
    Cc = function (q, R, u, x) {
      var r,
        v,
        N,
        m,
        P = 0,
        A = [];
      if (x)
        for (r = x.length; r > P; P += 3)
          (v = x[P]),
            (N = x[P + 1]),
            (m = x[P + 2]),
            qn(
              A,
              new Hf(
                [R[3 * v], R[3 * v + 1], R[3 * v + 2]],
                null,
                u ? [u[2 * v], u[2 * v + 1], 0] : J
              ),
              new Hf(
                [R[3 * N], R[3 * N + 1], R[3 * N + 2]],
                null,
                u ? [u[2 * N], u[2 * N + 1], 0] : J
              ),
              new Hf(
                [R[3 * m], R[3 * m + 1], R[3 * m + 2]],
                null,
                u ? [u[2 * m], u[2 * m + 1], 0] : J
              ),
              q
            );
      else
        for (r = R.length / 3; r > P; P += 3)
          (v = P),
            (N = P + 1),
            (m = P + 2),
            qn(
              A,
              new Hf(
                [R[3 * v], R[3 * v + 1], R[3 * v + 2]],
                null,
                u ? [u[2 * v], u[2 * v + 1], 0] : J
              ),
              new Hf(
                [R[3 * N], R[3 * N + 1], R[3 * N + 2]],
                null,
                u ? [u[2 * N], u[2 * N + 1], 0] : J
              ),
              new Hf(
                [R[3 * m], R[3 * m + 1], R[3 * m + 2]],
                null,
                u ? [u[2 * m], u[2 * m + 1], 0] : J
              ),
              q
            );
      return A;
    },
    bc = [S, l, n, T, R, B],
    pg = ["", R, B],
    gg = bc.concat("csg"),
    no = [0, 6, 12, 18, 24, 30],
    Km = function (Q, s, D) {
      var W = f(Q),
        o = [];
      Q.appendAnchorMatrix3d(W);
      var X,
        E = s ? s.getData3dUI(Q) : null;
      if (
        E &&
        E.s("shape3d") &&
        !E.s("csg.cull.box") &&
        ((X = E.shapeModel),
        E.shapeModel || (X = V.getShapeModel(E, E.s("shape3d"))),
        X)
      )
        for (
          var S = V.createNormalMatrix(W), O = 0, Z = pg.length;
          Z > O;
          O++
        ) {
          var H = pg[O],
            j = H.length ? H + "_" : H,
            k = X[j + "vs"],
            M = X[j + "uv"],
            $ = X[j + "is"],
            w = X[j + "ns"];
          if (k && k.length)
            for (
              var p, z, G, P = 0, i = $ ? $.length : k.length / 3;
              i > P;
              P += 3
            )
              $
                ? ((p = $[P]), (z = $[P + 1]), (G = $[P + 2]))
                : ((p = P), (z = P + 1), (G = P + 2)),
                qn(
                  o,
                  new Hf(
                    N([k[3 * p], k[3 * p + 1], k[3 * p + 2]], W),
                    w ? N([w[3 * p], w[3 * p + 1], w[3 * p + 2]], S) : null,
                    [M[2 * p], M[2 * p + 1], 0]
                  ),
                  new Hf(
                    N([k[3 * z], k[3 * z + 1], k[3 * z + 2]], W),
                    w ? N([w[3 * z], w[3 * z + 1], w[3 * z + 2]], S) : null,
                    [M[2 * z], M[2 * z + 1], 0]
                  ),
                  new Hf(
                    N([k[3 * G], k[3 * G + 1], k[3 * G + 2]], W),
                    w ? N([w[3 * G], w[3 * G + 1], w[3 * G + 2]], S) : null,
                    [M[2 * G], M[2 * G + 1], 0]
                  ),
                  Q
                );
        }
      if (!X)
        for (var O = 0; 6 > O; O++)
          for (
            var H = bc[O],
              m = no[O],
              M = D ? s.getFaceUv(Q, H) : J,
              e = D ? s.getFaceUvScale(Q, H) : J,
              L = D ? s.getFaceUvOffset(Q, H) : J,
              r = 0;
            2 > r;
            r++
          ) {
            var g,
              u,
              R,
              A = t[m + 3 * r],
              T = t[m + 3 * r + 1],
              Y = t[m + 3 * r + 2];
            if (D) {
              if (M) {
                var x = 8 * O;
                (g = [M[2 * A - x], M[2 * A + 1 - x], 0]),
                  (u = [M[2 * T - x], M[2 * T + 1 - x], 0]),
                  (R = [M[2 * Y - x], M[2 * Y + 1 - x], 0]);
              } else
                (g = [I[2 * A], I[2 * A + 1], 0]),
                  (u = [I[2 * T], I[2 * T + 1], 0]),
                  (R = [I[2 * Y], I[2 * Y + 1], 0]);
              e &&
                ((g[0] *= e[0]),
                (g[1] *= e[1]),
                (u[0] *= e[0]),
                (u[1] *= e[1]),
                (R[0] *= e[0]),
                (R[1] *= e[1])),
                L &&
                  ((g[0] += L[0]),
                  (g[1] += L[1]),
                  (u[0] += L[0]),
                  (u[1] += L[1]),
                  (R[0] += L[0]),
                  (R[1] += L[1]));
            }
            qn(
              o,
              new Hf(N([F[3 * A], F[3 * A + 1], F[3 * A + 2]], W), null, g),
              new Hf(N([F[3 * T], F[3 * T + 1], F[3 * T + 2]], W), null, u),
              new Hf(N([F[3 * Y], F[3 * Y + 1], F[3 * Y + 2]], W), null, R),
              Q
            );
          }
      return Kc.$15n(o);
    },
    Ho = function (M, N) {
      var U,
        u = M.data.getAttaches();
      if (
        (u &&
          u.each(function (x) {
            x instanceof Vj &&
              x.s("attach.operation") &&
              (U || (U = []), U.push(x));
          }),
        U)
      ) {
        var K;
        bc.forEach(function (n) {
          var E = Cc(n, M[n].vs, M[n].tuv);
          K = K ? K.concat(E) : E;
        }),
          (K = Kc.$15n(K)),
          U.forEach(function (Y) {
            var B = Y.s("attach.operation");
            K[B] && (K = K[B](Km(Y, M.gv, M.csg.tuv)));
          }),
          bc.forEach(function (w) {
            (w = M[w]), (w.vs = []), (w.ns = []), w.tuv && (w.tuv = []);
          }),
          M.csg && !M.csg.ns && (M.csg.ns = []);
        var a = [];
        if (
          (K.$19n().forEach(function (c) {
            var T,
              F = c.$10n;
            if (F instanceof Vj) {
              if (F.s("attach.cull")) return;
              (T = F.s("csg.cull.color")),
                T && (T = V.toColorArray(T)),
                (F = "csg");
            }
            for (
              var n = M[F], m = n.vs, R = n.ns, h = n.tuv, E = c.$9n, u = 2;
              u < E.length;
              u++
            )
              if (
                (Co(m, E[0].$24n),
                Co(m, E[u - 1].$24n),
                Co(m, E[u].$24n),
                R && (Co(R, E[0].$22n), Co(R, E[u - 1].$22n), Co(R, E[u].$22n)),
                h &&
                  (Co(h, E[0].uv, !0),
                  Co(h, E[u - 1].uv, !0),
                  Co(h, E[u].uv, !0)),
                T)
              )
                for (var _ = 4 * (m.length / 3), r = 0; 3 > r; r++)
                  (a[--_] = T[3]),
                    (a[--_] = T[2]),
                    (a[--_] = T[1]),
                    (a[--_] = T[0]);
          }),
          a.length)
        ) {
          for (
            var S = V.toColorArray(M.csg.color),
              $ = 0,
              p = 4 * (M.csg.vs.length / 3);
            p > $;
            $ += 4
          )
            a[$] == Z &&
              ((a[$] = S[0]),
              (a[$ + 1] = S[1]),
              (a[$ + 2] = S[2]),
              (a[$ + 3] = S[3]));
          M.csg.cs = a;
        }
      }
      gg.forEach(function (V) {
        var N = M[V];
        N.visible && N.vs.length
          ? (N.ns && N.ns.length ? P(N, "ns") : (N.ns = w(N.vs)),
            P(N, "vs"),
            P(N, "tuv"),
            N.cs && P(N, "cs"))
          : delete M[V];
      }),
        N && (j(M, J, N), M.clear());
    };
  U(e, {
    createFrameModel: function (_, y, n, a) {
      (_ = _ == J ? 0.07 : _),
        (y = y == J ? _ : y),
        (n = n == J ? _ : n),
        (a = a ? a : {});
      var Q = a.top,
        X = a.bottom,
        V = a.left,
        B = a.right,
        u = a.front,
        t = a.back,
        m = [],
        A = [];
      return (
        u === !0
          ? (m.push(
              -0.5,
              0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5
            ),
            A.push(0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0))
          : u === !1 ||
            (m.push(
              -0.5,
              0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5 + _,
              -0.5,
              0.5,
              -0.5 + _,
              -0.5,
              0.5,
              -0.5 + _,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              0.5,
              0.5 - _,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              0.5,
              -0.5 + _,
              0.5,
              0.5,
              -0.5 + _,
              0.5 - y,
              0.5,
              0.5 - _,
              0.5 - y,
              0.5,
              0.5 - _,
              0.5 - y,
              0.5,
              0.5 - _,
              0.5,
              0.5,
              -0.5 + _,
              0.5,
              0.5,
              -0.5 + _,
              -0.5 + y,
              0.5,
              -0.5 + _,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              0.5,
              0.5 - _,
              -0.5 + y,
              0.5,
              -0.5 + _,
              -0.5 + y,
              0.5
            ),
            A.push(
              0,
              0,
              0,
              1,
              _,
              1,
              _,
              1,
              _,
              0,
              0,
              0,
              1 - _,
              0,
              1 - _,
              1,
              1,
              1,
              1,
              1,
              1,
              0,
              1 - _,
              0,
              _,
              0,
              _,
              y,
              1 - _,
              y,
              1 - _,
              y,
              1 - _,
              0,
              _,
              0,
              _,
              1 - y,
              _,
              1,
              1 - _,
              1,
              1 - _,
              1,
              1 - _,
              1 - y,
              _,
              1 - y
            )),
        t === !0
          ? (m.push(
              -0.5,
              0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5
            ),
            A.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0))
          : t === !1 ||
            (m.push(
              -0.5,
              0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5,
              0.5 - _,
              0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5 - _,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5,
              0.5 - _,
              0.5 - y,
              -0.5,
              -0.5 + _,
              0.5 - y,
              -0.5,
              0.5 - _,
              0.5 - y,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5,
              0.5 - _,
              0.5,
              -0.5,
              -0.5 + _,
              -0.5 + y,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5 + y,
              -0.5,
              0.5 - _,
              -0.5 + y,
              -0.5
            ),
            A.push(
              1,
              0,
              1 - _,
              1,
              1,
              1,
              1 - _,
              1,
              1,
              0,
              1 - _,
              0,
              _,
              0,
              0,
              1,
              _,
              1,
              0,
              1,
              _,
              0,
              0,
              0,
              1 - _,
              0,
              _,
              y,
              1 - _,
              y,
              _,
              y,
              1 - _,
              0,
              _,
              0,
              1 - _,
              1 - y,
              _,
              1,
              1 - _,
              1,
              _,
              1,
              1 - _,
              1 - y,
              _,
              1 - y
            )),
        V === !0
          ? (m.push(
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              -0.5
            ),
            A.push(0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0))
          : V === !1 ||
            (m.push(
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5 + n,
              -0.5,
              -0.5,
              -0.5 + n,
              -0.5,
              0.5,
              -0.5 + n,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              0.5 - n,
              -0.5,
              -0.5,
              0.5 - n,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5 - n,
              -0.5,
              0.5,
              -0.5 + n,
              -0.5,
              0.5 - y,
              -0.5 + n,
              -0.5,
              0.5 - y,
              0.5 - n,
              -0.5,
              0.5 - y,
              0.5 - n,
              -0.5,
              0.5,
              0.5 - n,
              -0.5,
              0.5,
              -0.5 + n,
              -0.5,
              -0.5 + y,
              -0.5 + n,
              -0.5,
              -0.5,
              -0.5 + n,
              -0.5,
              -0.5,
              0.5 - n,
              -0.5,
              -0.5,
              0.5 - n,
              -0.5,
              -0.5 + y,
              0.5 - n,
              -0.5,
              -0.5 + y,
              -0.5 + n
            ),
            A.push(
              0,
              0,
              0,
              1,
              n,
              1,
              n,
              1,
              n,
              0,
              0,
              0,
              1 - n,
              0,
              1 - n,
              1,
              1,
              1,
              1,
              1,
              1,
              0,
              1 - n,
              0,
              n,
              0,
              n,
              y,
              1 - n,
              y,
              1 - n,
              y,
              1 - n,
              0,
              n,
              0,
              n,
              1 - y,
              n,
              1,
              1 - n,
              1,
              1 - n,
              1,
              1 - n,
              1 - y,
              n,
              1 - y
            )),
        B === !0
          ? (m.push(
              0.5,
              0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5
            ),
            A.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0))
          : B === !1 ||
            (m.push(
              0.5,
              0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5 + n,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5 + n,
              0.5,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5 + n,
              0.5,
              0.5,
              0.5 - n,
              0.5,
              -0.5,
              0.5,
              0.5,
              -0.5,
              0.5 - n,
              0.5,
              -0.5,
              0.5,
              0.5,
              0.5,
              0.5 - n,
              0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              -0.5 + n,
              0.5,
              0.5 - y,
              0.5 - n,
              0.5,
              0.5 - y,
              -0.5 + n,
              0.5,
              0.5 - y,
              0.5 - n,
              0.5,
              0.5,
              -0.5 + n,
              0.5,
              0.5,
              0.5 - n,
              0.5,
              -0.5 + y,
              -0.5 + n,
              0.5,
              -0.5,
              0.5 - n,
              0.5,
              -0.5,
              -0.5 + n,
              0.5,
              -0.5,
              0.5 - n,
              0.5,
              -0.5 + y,
              -0.5 + n,
              0.5,
              -0.5 + y,
              0.5 - n
            ),
            A.push(
              1,
              0,
              1 - n,
              1,
              1,
              1,
              1 - n,
              1,
              1,
              0,
              1 - n,
              0,
              n,
              0,
              0,
              1,
              n,
              1,
              0,
              1,
              n,
              0,
              0,
              0,
              1 - n,
              0,
              n,
              y,
              1 - n,
              y,
              n,
              y,
              1 - n,
              0,
              n,
              0,
              1 - n,
              1 - y,
              n,
              1,
              1 - n,
              1,
              n,
              1,
              1 - n,
              1 - y,
              n,
              1 - y
            )),
        Q === !0
          ? (m.push(
              0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              0.5
            ),
            A.push(1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1))
          : Q === !1 ||
            (m.push(
              0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              -0.5,
              0.5 - _,
              0.5,
              -0.5,
              0.5 - _,
              0.5,
              -0.5,
              0.5 - _,
              0.5,
              0.5,
              0.5,
              0.5,
              0.5,
              -0.5 + _,
              0.5,
              0.5,
              -0.5 + _,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              0.5,
              -0.5 + _,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              0.5 - n,
              -0.5 + _,
              0.5,
              0.5 - n,
              -0.5 + _,
              0.5,
              0.5 - n,
              -0.5 + _,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              0.5,
              0.5 - _,
              0.5,
              -0.5 + n,
              0.5 - _,
              0.5,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5,
              -0.5 + _,
              0.5,
              -0.5 + n,
              0.5 - _,
              0.5,
              -0.5 + n
            ),
            A.push(
              1,
              1,
              1,
              0,
              1 - _,
              0,
              1 - _,
              0,
              1 - _,
              1,
              1,
              1,
              _,
              1,
              _,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              _,
              1,
              1 - _,
              1,
              1 - _,
              1 - n,
              _,
              1 - n,
              _,
              1 - n,
              _,
              1,
              1 - _,
              1,
              1 - _,
              n,
              1 - _,
              0,
              _,
              0,
              _,
              0,
              _,
              n,
              1 - _,
              n
            )),
        X === !0
          ? (m.push(
              0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5
            ),
            A.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0))
          : X === !1 ||
            (m.push(
              0.5,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5,
              0.5,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              0.5,
              -0.5 + _,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              0.5,
              -0.5,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              0.5,
              -0.5 + _,
              -0.5,
              0.5 - n,
              0.5 - _,
              -0.5,
              0.5 - n,
              -0.5 + _,
              -0.5,
              0.5 - n,
              0.5 - _,
              -0.5,
              0.5,
              -0.5 + _,
              -0.5,
              0.5,
              0.5 - _,
              -0.5,
              -0.5 + n,
              -0.5 + _,
              -0.5,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5,
              -0.5 + _,
              -0.5,
              -0.5,
              0.5 - _,
              -0.5,
              -0.5 + n,
              -0.5 + _,
              -0.5,
              -0.5 + n
            ),
            A.push(
              1,
              0,
              1 - _,
              1,
              1,
              1,
              1 - _,
              1,
              1,
              0,
              1 - _,
              0,
              _,
              0,
              0,
              1,
              _,
              1,
              0,
              1,
              _,
              0,
              0,
              0,
              1 - _,
              0,
              _,
              n,
              1 - _,
              n,
              _,
              n,
              1 - _,
              0,
              _,
              0,
              1 - _,
              1 - n,
              _,
              1,
              1 - _,
              1,
              _,
              1,
              1 - _,
              1 - n,
              _,
              1 - n
            )),
        { vs: m, uv: A }
      );
    },
  }),
    U(
      D.Style,
      {
        "csg.cull.color": Z,
        "csg.cull.box": !0,
        "dw.flip": !1,
        "dw.s3": [0.999, 0.999, 0.5],
        "dw.t3": Z,
        "dw.expanded": !1,
        "dw.toggleable": !0,
        "dw.axis": "left",
        "dw.start": 0,
        "dw.end": Q / 2,
        "dw.angle": 0,
        "attach.cull": !1,
        "attach.operation": "subtract",
      },
      !0
    ),
    bc.forEach(function (W) {
      var s = {};
      (s[W + H] = !1),
        (s[W + ".toggleable"] = !1),
        (s[W + ".axis"] = S),
        (s[W + ".start"] = 0),
        (s[W + ".end"] = Q / 2),
        (s[W + bi] = 0),
        U(D.Style, s, !0);
    });
  var Kc = function () {
    this.$4n = [];
  };
  (Kc.$15n = function (v) {
    var T = new Kc();
    return (T.$4n = v), T;
  }),
    (Kc.prototype = {
      clone: function () {
        var x = new Kc();
        return (
          (x.$4n = this.$4n.map(function (Q) {
            return Q.clone();
          })),
          x
        );
      },
      $19n: function () {
        return this.$4n;
      },
      union: function (I) {
        var n = new Mk(this.clone().$4n),
          y = new Mk(I.clone().$4n);
        return (
          n.$3n(y),
          y.$3n(n),
          y.$6n(),
          y.$3n(n),
          y.$6n(),
          n.$7n(y.$2n()),
          Kc.$15n(n.$2n())
        );
      },
      subtract: function (s) {
        var R = new Mk(this.clone().$4n),
          M = new Mk(s.clone().$4n);
        return (
          R.$6n(),
          R.$3n(M),
          M.$3n(R),
          M.$6n(),
          M.$3n(R),
          M.$6n(),
          R.$7n(M.$2n()),
          R.$6n(),
          Kc.$15n(R.$2n())
        );
      },
      intersect: function (k) {
        var j = new Mk(this.clone().$4n),
          U = new Mk(k.clone().$4n);
        return (
          j.$6n(),
          U.$3n(j),
          U.$6n(),
          j.$3n(U),
          U.$3n(j),
          j.$7n(U.$2n()),
          j.$6n(),
          Kc.$15n(j.$2n())
        );
      },
      inverse: function () {
        var X = this.clone();
        return (
          X.$4n.map(function (A) {
            A.flip();
          }),
          X
        );
      },
    }),
    (Kc.cube = function (g) {
      g = g || {};
      var d = new Kd(g.center || [0, 0, 0]),
        b = g.radius
          ? g.radius.length
            ? g.radius
            : [g.radius, g.radius, g.radius]
          : [1, 1, 1];
      return Kc.$15n(
        [
          [
            [0, 4, 6, 2],
            [-1, 0, 0],
          ],
          [
            [1, 3, 7, 5],
            [1, 0, 0],
          ],
          [
            [0, 1, 5, 4],
            [0, -1, 0],
          ],
          [
            [2, 6, 7, 3],
            [0, 1, 0],
          ],
          [
            [0, 2, 3, 1],
            [0, 0, -1],
          ],
          [
            [4, 5, 7, 6],
            [0, 0, 1],
          ],
        ].map(function (B) {
          return new Cb(
            B[0].map(function (Q) {
              var y = new Kd(
                d.x + b[0] * (2 * !!(1 & Q) - 1),
                d.y + b[1] * (2 * !!(2 & Q) - 1),
                d.z + b[2] * (2 * !!(4 & Q) - 1)
              );
              return new Hf(y, new Kd(B[1]));
            })
          );
        })
      );
    }),
    (Kc.sphere = function (x) {
      function h(j, k) {
        (j *= 2 * Q), (k *= Q);
        var g = new Kd(u(j) * a(k), u(k), a(j) * a(k));
        b.push(new Hf(t.$20n(g.$21n(c)), g));
      }
      x = x || {};
      for (
        var b,
          t = new Kd(x.center || [0, 0, 0]),
          c = x.radius || 1,
          $ = x.slices || 16,
          U = x.stacks || 8,
          z = [],
          m = 0;
        $ > m;
        m++
      )
        for (var O = 0; U > O; O++)
          (b = []),
            h(m / $, O / U),
            O > 0 && h((m + 1) / $, O / U),
            U - 1 > O && h((m + 1) / $, (O + 1) / U),
            h(m / $, (O + 1) / U),
            z.push(new Cb(b));
      return Kc.$15n(z);
    }),
    (Kc.cylinder = function (N) {
      function o(R, x, B) {
        var s = 2 * x * Q,
          b = U.$21n(u(s)).$20n(i.$21n(a(s))),
          A = e.$20n(Y.$21n(R)).$20n(b.$21n(c)),
          I = b.$21n(1 - X(B)).$20n(g.$21n(B));
        return new Hf(A, I);
      }
      N = N || {};
      for (
        var e = new Kd(N.start || [0, -1, 0]),
          D = new Kd(N.end || [0, 1, 0]),
          Y = D.$13n(e),
          c = N.radius || 1,
          h = N.slices || 16,
          g = Y.$14n(),
          L = X(g.y) > 0.5,
          U = new Kd(L, !L, 0).cross(g).$14n(),
          i = U.cross(g).$14n(),
          S = new Hf(e, g.$11n()),
          k = new Hf(D, g.$14n()),
          p = [],
          I = 0;
        h > I;
        I++
      ) {
        var B = I / h,
          T = (I + 1) / h;
        p.push(new Cb([S, o(0, B, -1), o(0, T, -1)])),
          p.push(new Cb([o(0, T, 0), o(0, B, 0), o(1, B, 0), o(1, T, 0)])),
          p.push(new Cb([k, o(1, T, 1), o(1, B, 1)]));
      }
      return Kc.$15n(p);
    });
  var Kd = function (Q, u, T) {
    var Z = this;
    3 == arguments.length
      ? ((Z.x = Q), (Z.y = u), (Z.z = T))
      : "x" in Q
      ? ((Z.x = Q.x), (Z.y = Q.y), (Z.z = Q.z))
      : ((Z.x = Q[0]), (Z.y = Q[1]), (Z.z = Q[2]));
  };
  Kd.prototype = {
    clone: function () {
      return new Kd(this.x, this.y, this.z);
    },
    $11n: function () {
      return new Kd(-this.x, -this.y, -this.z);
    },
    $20n: function (T) {
      return new Kd(this.x + T.x, this.y + T.y, this.z + T.z);
    },
    $13n: function (J) {
      return new Kd(this.x - J.x, this.y - J.y, this.z - J.z);
    },
    $21n: function (C) {
      return new Kd(this.x * C, this.y * C, this.z * C);
    },
    $16n: function (l) {
      return new Kd(this.x / l, this.y / l, this.z / l);
    },
    dot: function (Q) {
      return this.x * Q.x + this.y * Q.y + this.z * Q.z;
    },
    lerp: function (A, k) {
      return this.$20n(A.$13n(this).$21n(k));
    },
    length: function () {
      return s(this.dot(this));
    },
    $14n: function () {
      return this.$16n(this.length());
    },
    cross: function (V) {
      var T = this;
      return new Kd(
        T.y * V.z - T.z * V.y,
        T.z * V.x - T.x * V.z,
        T.x * V.y - T.y * V.x
      );
    },
  };
  var Hf = function (t, Q, D) {
    var v = this;
    (v.$24n = new Kd(t)),
      (v.$22n = Q ? new Kd(Q) : null),
      (v.uv = D ? new Kd(D) : null);
  };
  Hf.prototype = {
    clone: function () {
      var c = this;
      return new Hf(c.$24n.clone(), c.$22n.clone(), c.uv ? c.uv.clone() : null);
    },
    flip: function () {
      this.$22n = this.$22n.$11n();
    },
    $18n: function (j, e) {
      var m = this;
      return new Hf(
        m.$24n.lerp(j.$24n, e),
        m.$22n.lerp(j.$22n, e),
        m.uv ? m.uv.lerp(j.uv, e) : null
      );
    },
  };
  var ch = function (y, O) {
    (this.$22n = y), (this.w = O);
  };
  (ch.$17n = function (y, U, X) {
    var O = U.$13n(y).cross(X.$13n(y)).$14n();
    return new ch(O, O.dot(y));
  }),
    (ch.prototype = {
      clone: function () {
        return new ch(this.$22n.clone(), this.w);
      },
      flip: function () {
        var S = this;
        (S.$22n = S.$22n.$11n()), (S.w = -S.w);
      },
      $5n: function (R, H, A, e, P) {
        for (
          var i = this, K = 0, X = 1, q = 2, B = 3, F = 0, T = [], c = 0;
          c < R.$9n.length;
          c++
        ) {
          var V = i.$22n.dot(R.$9n[c].$24n) - i.w,
            N = -z > V ? q : V > z ? X : K;
          (F |= N), T.push(N);
        }
        switch (F) {
          case K:
            (i.$22n.dot(R.$8n.$22n) > 0 ? H : A).push(R);
            break;
          case X:
            e.push(R);
            break;
          case q:
            P.push(R);
            break;
          case B:
            for (var J = [], l = [], c = 0; c < R.$9n.length; c++) {
              var t = (c + 1) % R.$9n.length,
                Y = T[c],
                $ = T[t],
                L = R.$9n[c],
                I = R.$9n[t];
              if (
                (Y != q && J.push(L),
                Y != X && l.push(Y != q ? L.clone() : L),
                (Y | $) == B)
              ) {
                var V =
                    (i.w - this.$22n.dot(L.$24n)) /
                    i.$22n.dot(I.$24n.$13n(L.$24n)),
                  u = L.$18n(I, V);
                J.push(u), l.push(u.clone());
              }
            }
            J.length >= 3 && e.push(new Cb(J, R.$10n)),
              l.length >= 3 && P.push(new Cb(l, R.$10n));
        }
      },
    });
  var Cb = function (J, N) {
    var Y = this;
    (Y.$9n = J),
      (Y.$10n = N),
      (Y.$8n = ch.$17n(J[0].$24n, J[1].$24n, J[2].$24n));
  };
  Cb.prototype = {
    clone: function () {
      var g = this.$9n.map(function (c) {
        return c.clone();
      });
      return new Cb(g, this.$10n);
    },
    flip: function () {
      this.$9n.reverse().map(function (v) {
        v.flip();
      }),
        this.$8n.flip();
    },
  };
  var Mk = function (X) {
    var _ = this;
    (_.$8n = null),
      (_.front = null),
      (_.back = null),
      (_.$4n = []),
      X && _.$7n(X);
  };
  Mk.prototype = {
    clone: function () {
      var j = this,
        S = new Mk();
      return (
        (S.$8n = j.$8n && j.$8n.clone()),
        (S.front = j.front && j.front.clone()),
        (S.back = j.back && j.back.clone()),
        (S.$4n = j.$4n.map(function (O) {
          return O.clone();
        })),
        S
      );
    },
    $6n: function () {
      for (var X = this, Y = 0; Y < X.$4n.length; Y++) X.$4n[Y].flip();
      X.$8n && X.$8n.flip(), X.front && X.front.$6n(), X.back && X.back.$6n();
      var H = X.front;
      (X.front = X.back), (X.back = H);
    },
    $1n: function (Q) {
      var i = this;
      if (!i.$8n) return Q.slice();
      for (var e = [], r = [], T = 0; T < Q.length; T++)
        i.$8n.$5n(Q[T], e, r, e, r);
      return (
        i.front && (e = i.front.$1n(e)),
        (r = i.back ? i.back.$1n(r) : []),
        e.concat(r)
      );
    },
    $3n: function (r) {
      var x = this;
      (x.$4n = r.$1n(x.$4n)),
        x.front && x.front.$3n(r),
        x.back && x.back.$3n(r);
    },
    $2n: function () {
      var S = this,
        U = S.$4n.slice();
      return (
        S.front && (U = U.concat(S.front.$2n())),
        S.back && (U = U.concat(S.back.$2n())),
        U
      );
    },
    $7n: function (S) {
      var p = this;
      if (S.length) {
        p.$8n || (p.$8n = S[0].$8n.clone());
        for (var n = [], c = [], U = 0; U < S.length; U++)
          this.$8n.$5n(S[U], p.$4n, p.$4n, n, c);
        n.length && (p.front || (p.front = new Mk()), this.front.$7n(n)),
          c.length && (p.back || (p.back = new Mk()), p.back.$7n(c));
      }
    },
  };
  var qg = "symbol",
    Sj = (D.Symbol = function (G, H, n) {
      var B = this;
      q(Sj, B),
        B.s3(20, 20, 20),
        B.s({ "all.visible": !1, shape: "rect" }),
        B.setIcon(G, H, n);
    });
  kb("Symbol", c, {
    setIcon: function (Q, n, O) {
      var y,
        T = this;
      return (
        Sj.superClass.setIcon.call(T, Q),
        Q
          ? ((y = { for3d: !0, face: "center", position: 44, names: [Q] }),
            O && (y.transaprent = !0),
            n && (y.autorotate = n),
            T.addStyleIcon(qg, y))
          : T.removeStyleIcon(qg),
        T.setWidth(V.getImageWidth(e.getImage(Q), T) || 20),
        y
      );
    },
  });
  var Vj = (D.CSGNode = function () {
      q(Vj, this),
        this.s({
          shape: "rect",
          "attach.thickness": 1.001,
          "2d.attachable": !0,
        });
    }),
    jb = {
      position: 1,
      width: 1,
      height: 1,
      rotation: 1,
      rotationX: 1,
      rotationZ: 1,
      rotationMode: 1,
      tall: 1,
      elevation: 1,
      anchor: 1,
      anchorElevation: 1,
      "s:attach.cull": 1,
      "s:attach.operation": 1,
    };
  kb("CSGNode", c, {
    _22Q: function () {
      return Oe;
    },
    onPropertyChanged: function (y) {
      var G = this,
        M = G.getHost();
      Vj.superClass.onPropertyChanged.call(G, y),
        jb[y.property] &&
          (M instanceof Ii || M instanceof Vj) &&
          M.fp("csgNodeChange", !0, !1);
    },
  });
  var Oe = function (Z, u) {
    q(Oe, this, [Z, u]);
  };
  C(Oe, x.Node3dUI, {
    _80o: function (J, t, B) {
      var P = this;
      P._shape3d
        ? Oe.superClass._80o.call(P, J, t, B)
        : (v(P.gv),
          gg.forEach(function (d) {
            _(P, J, t, d, B);
          }));
    },
    validate: function (r, Q) {
      var u = this,
        i = u.gv,
        d = u.data;
      if (d.s("shape3d"))
        return Oe.superClass.validate.call(u, r, Q), (u._shape3d = !0), void 0;
      u._shape3d = !1;
      var p = f(d, i.getMat(d));
      d.appendAnchorMatrix3d(p);
      var R = r && r.uv;
      u.vf2("csg", R);
      for (var g = 0; 6 > g; g++)
        for (
          var C = bc[g],
            X = no[g],
            b = u.vf2(C, R, Q),
            B = b.mat || p,
            $ = b.vs,
            J = b.uv,
            T = b.tuv,
            K = 0;
          2 > K;
          K++
        ) {
          var v = t[X + 3 * K],
            V = t[X + 3 * K + 1],
            h = t[X + 3 * K + 2];
          if (
            (L($, B, [F[3 * v], F[3 * v + 1], F[3 * v + 2]]),
            L($, B, [F[3 * V], F[3 * V + 1], F[3 * V + 2]]),
            L($, B, [F[3 * h], F[3 * h + 1], F[3 * h + 2]]),
            T)
          )
            if (J) {
              var w = 8 * g;
              T.push(
                J[2 * v - w],
                J[2 * v + 1 - w],
                J[2 * V - w],
                J[2 * V + 1 - w],
                J[2 * h - w],
                J[2 * h + 1 - w]
              );
            } else
              T.push(
                I[2 * v],
                I[2 * v + 1],
                I[2 * V],
                I[2 * V + 1],
                I[2 * h],
                I[2 * h + 1]
              );
        }
      Ho(u, r, Q);
    },
    vf2: function (d, Y, M) {
      var F,
        r = this,
        x = r.gv.getFaceVisible(r.data, d);
      return (
        (F = k(r, d, M)),
        (F.vs = []),
        (F.tuv = x && (F.texture || Y) ? [] : J),
        (F.visible = x),
        F
      );
    },
  });
  var Ii = (D.CSGShape = function () {
    var a = this;
    q(Ii, a),
      a.s({
        "shape.background": J,
        "2d.hostable": !0,
        "shape.border.width": 8,
      }),
      a.setTall(240),
      a.setElevation(120),
      a.setThickness(14);
  });
  kb("CSGShape", p, {
    IRotatable: !1,
    _22Q: function () {
      return en;
    },
    setRotationX: function () {},
    setRotation: function () {},
    setRotationZ: function () {},
    setSegments: function () {},
  });
  var en = function (v, $) {
    q(en, this, [v, $]);
  };
  C(en, x.Shape3dUI, {
    _80o: function (I, b, K) {
      var L = this;
      L.undrawable ||
        (v(L.gv),
        gg.forEach(function (R) {
          _(L, I, b, R, K);
        }));
    },
    validate: function (G, x) {
      var U = this,
        n = U.data,
        B = n.getPoints();
      if ((U.undrawable = B.size() < 2)) return U.clear(), void 0;
      var S = n.isClosePath(),
        p = $(n._thickness / 2, z),
        X = g(B, J, J, S);
      gg.forEach(function (b) {
        U.vf(b, G && G.uv, !0, x);
      }),
        S && ((U.left.visible = !1), (U.right.visible = !1)),
        U._12O(X, p),
        U._20Q(X);
      var t = n.getPointsMatrix3d(),
        T = D.Math.requestVector3();
      bc.forEach(function (p) {
        if (U[p])
          for (var r = U[p].vs, o = 0, n = r.length; n > o; o += 3)
            T.set(r[o], r[o + 1], r[o + 2]).applyMatrix4(t),
              (r[o] = T.x),
              (r[o + 1] = T.y),
              (r[o + 2] = T.z);
      }),
        D.Math.releaseVector3(T),
        Ho(U, G, x);
    },
  });
  var Hr = (D.DoorWindow = function () {
    var v = this;
    q(Hr, v), v.setElevation(100), v.s3(100, 200, 14);
  });
  kb("DoorWindow", Vj, {
    IDoorWindow: !0,
    toggle: function (L) {
      this.setExpanded(!this.s(h), L);
    },
    isExpanded: function () {
      return this.s(h);
    },
    setExpanded: function (U, i) {
      var F = this,
        a = F.$25n,
        R = F.getDataModel(),
        X = F.s(h);
      if ((a && (a.stop(!0), delete F.$25n), X !== U)) {
        R && R.beginTransaction();
        var g = U ? F.s("dw.end") : F.s("dw.start");
        F.s(h, U),
          (i = y(i)),
          i
            ? ((X = F.s(zb)),
              (i.action = function (s) {
                F.s(zb, X + (g - X) * s);
              }),
              (i.finishFunc = function () {
                R && R.endTransaction();
              }),
              (F.$25n = K(i)))
            : (F.s(zb, g), R && R.endTransaction());
      }
    },
    getMat: function () {
      var l = this,
        c = l.s("dw.s3"),
        z = l.s("dw.t3"),
        y = l.s("dw.flip"),
        L = l.s(zb);
      if (c || L || z || y) {
        var K = [];
        if ((y && K.push({ r3: [0, Q, 0] }), c && K.push({ s3: c }), L)) {
          c = l.getFinalScale3d();
          var x = l.s("dw.axis"),
            p = c[0] / 2,
            w = c[1] / 2;
          c[2] / 2,
            x === S
              ? K.push(
                  { t3: [p, 0, 0] },
                  { r3: [0, -L, 0] },
                  { t3: [-p, 0, 0] }
                )
              : x === n
              ? K.push({ t3: [-p, 0, 0] }, { r3: [0, L, 0] }, { t3: [p, 0, 0] })
              : x === R
              ? K.push(
                  { t3: [0, -w, 0] },
                  { r3: [-L, 0, 0] },
                  { t3: [0, w, 0] }
                )
              : x === B
              ? K.push({ t3: [0, w, 0] }, { r3: [L, 0, 0] }, { t3: [0, -w, 0] })
              : x === i
              ? K.push({ r3: [0, L, 0] })
              : x === O && K.push({ r3: [L, 0, 0] });
        }
        return z && K.push({ t3: z }), b(K);
      }
      return J;
    },
  });
  var Dj = (D.CSGBox = function () {
    var t = this;
    q(Dj, t), t.setElevation(100), t.s3(100, 200, 100);
  });
  kb("CSGBox", Vj, {
    ICSGBox: !0,
    toggleFace: function (o, C) {
      this.setFaceExpanded(o, !this.s(o + H), C);
    },
    isFaceExpanded: function (C) {
      return this.s(C + H);
    },
    setFaceExpanded: function (J, x, s) {
      var $ = this,
        h = $.$25n,
        U = $.s(J + H);
      if ((h && (h.stop(!0), delete $.$25n), U !== x)) {
        var v = x ? $.s(J + ".end") : $.s(J + ".start");
        $.s(J + H, x),
          (s = y(s)),
          s
            ? ((U = $.s(J + bi)),
              (s.action = function (j) {
                $.s(J + bi, U + (v - U) * j);
              }),
              ($.$25n = K(s)))
            : $.s(J + bi, v);
      }
    },
    getFaceMat: function (D) {
      var p = this,
        q = p.s(D + bi);
      if (!q) return J;
      var T,
        x,
        U,
        W,
        j,
        A,
        Y = p.s(D + ".axis"),
        o = p.getFinalScale3d(),
        I = p.getAnchor3d(),
        w = o[0] * I.x,
        g = o[1] * I.y,
        Z = o[2] * I.z,
        u = o[0] - w,
        c = o[1] - g,
        Q = o[2] - Z,
        F = D + "_" + Y;
      switch (F) {
        case "front_left":
          (T = -w), (x = 0), (U = Q), (W = 0), (j = -q), (A = 0);
          break;
        case "front_right":
          (T = u), (x = 0), (U = Q), (W = 0), (j = q), (A = 0);
          break;
        case "front_top":
          (T = 0), (x = c), (U = Q), (W = -q), (j = 0), (A = 0);
          break;
        case "front_bottom":
          (T = 0), (x = -g), (U = Q), (W = q), (j = 0), (A = 0);
          break;
        case "front_h":
          (T = 0), (x = 0), (U = Q), (W = q), (j = 0), (A = 0);
          break;
        case "front_v":
          (T = 0), (x = 0), (U = Q), (W = 0), (j = q), (A = 0);
          break;
        case "back_left":
          (T = u), (x = 0), (U = -Z), (W = 0), (j = -q), (A = 0);
          break;
        case "back_right":
          (T = -w), (x = 0), (U = -Z), (W = 0), (j = q), (A = 0);
          break;
        case "back_top":
          (T = 0), (x = c), (U = -Z), (W = q), (j = 0), (A = 0);
          break;
        case "back_bottom":
          (T = 0), (x = -g), (U = -Z), (W = -q), (j = 0), (A = 0);
          break;
        case "back_h":
          (T = 0), (x = 0), (U = -Z), (W = q), (j = 0), (A = 0);
          break;
        case "back_v":
          (T = 0), (x = 0), (U = -Z), (W = 0), (j = q), (A = 0);
          break;
        case "left_left":
          (T = -w), (x = 0), (U = -Z), (W = 0), (j = -q), (A = 0);
          break;
        case "left_right":
          (T = -w), (x = 0), (U = Q), (W = 0), (j = q), (A = 0);
          break;
        case "left_top":
          (T = -w), (x = c), (U = 0), (W = 0), (j = 0), (A = -q);
          break;
        case "left_bottom":
          (T = -w), (x = -g), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "left_h":
          (T = -w), (x = 0), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "left_v":
          (T = -w), (x = 0), (U = 0), (W = 0), (j = q), (A = 0);
          break;
        case "right_left":
          (T = u), (x = 0), (U = Q), (W = 0), (j = -q), (A = 0);
          break;
        case "right_right":
          (T = u), (x = 0), (U = -Z), (W = 0), (j = q), (A = 0);
          break;
        case "right_top":
          (T = u), (x = c), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "right_bottom":
          (T = u), (x = -g), (U = 0), (W = 0), (j = 0), (A = -q);
          break;
        case "right_h":
          (T = u), (x = 0), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "right_v":
          (T = u), (x = 0), (U = 0), (W = 0), (j = q), (A = 0);
          break;
        case "top_left":
          (T = -w), (x = c), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "top_right":
          (T = u), (x = c), (U = 0), (W = 0), (j = 0), (A = -q);
          break;
        case "top_top":
          (T = 0), (x = c), (U = -Z), (W = -q), (j = 0), (A = 0);
          break;
        case "top_bottom":
          (T = 0), (x = c), (U = Q), (W = q), (j = 0), (A = 0);
          break;
        case "top_h":
          (T = 0), (x = c), (U = 0), (W = q), (j = 0), (A = 0);
          break;
        case "top_v":
          (T = 0), (x = c), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "bottom_left":
          (T = -w), (x = -g), (U = 0), (W = 0), (j = 0), (A = -q);
          break;
        case "bottom_right":
          (T = u), (x = -g), (U = 0), (W = 0), (j = 0), (A = q);
          break;
        case "bottom_top":
          (T = 0), (x = -g), (U = Q), (W = -q), (j = 0), (A = 0);
          break;
        case "bottom_bottom":
          (T = 0), (x = -g), (U = -Z), (W = q), (j = 0), (A = 0);
          break;
        case "bottom_h":
          (T = 0), (x = -g), (U = 0), (W = q), (j = 0), (A = 0);
          break;
        case "bottom_v":
          (T = 0), (x = -g), (U = 0), (W = 0), (j = 0), (A = q);
      }
      return b([{ t3: [-T, -x, -U] }, { r3: [W, j, A] }, { t3: [T, x, U] }]);
    },
  });
  var kc = function (z, V, Z, x, h) {
    function u() {
      var z,
        k = [],
        u = new E(),
        K = new E();
      for (
        m.eachShapeModel(function (R, i, e) {
          for (var c = 0, g = i ? i.length : R.length / 3; g > c; c++)
            i
              ? (u.fromArray(R, 3 * i[c]), K.fromArray(e, 3 * i[c]))
              : (u.fromArray(R, 3 * c), K.fromArray(e, 3 * c)),
              I(k, u, K);
        }),
          k = $(k, b.set(1, 0, 0)),
          k = $(k, b.set(-1, 0, 0)),
          k = $(k, b.set(0, 1, 0)),
          k = $(k, b.set(0, -1, 0)),
          k = $(k, b.set(0, 0, 1)),
          k = $(k, b.set(0, 0, -1)),
          z = 0;
        z < k.length;
        z++
      ) {
        var a = k[z];
        O.push(0.5 + a.position.x / h.x, 0.5 - a.position.y / h.y),
          a.position.applyMatrix4(i),
          v.push(a.position.x, a.position.y, a.position.z),
          n.push(a.$22n.x, a.$22n.y, a.$22n.z);
      }
    }
    function I(q, g, E) {
      g.applyMatrix4(C),
        g.applyMatrix4(F),
        E.transformDirection(C),
        E.transformDirection(F),
        q.push(new Y(g.clone(), E.clone()));
    }
    function $(N, J) {
      for (
        var Z = [], y = 0.5 * Math.abs(h.dot(J)), j = 0;
        j < N.length;
        j += 3
      ) {
        var P,
          $,
          p,
          q,
          A,
          V,
          Y,
          g = 0,
          B = N[j + 0].position.dot(J) - y,
          b = N[j + 1].position.dot(J) - y,
          t = N[j + 2].position.dot(J) - y;
        switch (
          ((P = B > 0),
          ($ = b > 0),
          (p = t > 0),
          (g = (P ? 1 : 0) + ($ ? 1 : 0) + (p ? 1 : 0)))
        ) {
          case 0:
            Z.push(N[j]), Z.push(N[j + 1]), Z.push(N[j + 2]);
            break;
          case 1:
            if (
              (P &&
                ((q = N[j + 1]),
                (A = N[j + 2]),
                (V = r(N[j], q, J, y)),
                (Y = r(N[j], A, J, y))),
              $)
            ) {
              (q = N[j]),
                (A = N[j + 2]),
                (V = r(N[j + 1], q, J, y)),
                (Y = r(N[j + 1], A, J, y)),
                Z.push(V),
                Z.push(A.clone()),
                Z.push(q.clone()),
                Z.push(A.clone()),
                Z.push(V.clone()),
                Z.push(Y);
              break;
            }
            p &&
              ((q = N[j]),
              (A = N[j + 1]),
              (V = r(N[j + 2], q, J, y)),
              (Y = r(N[j + 2], A, J, y))),
              Z.push(q.clone()),
              Z.push(A.clone()),
              Z.push(V),
              Z.push(Y),
              Z.push(V.clone()),
              Z.push(A.clone());
            break;
          case 2:
            P ||
              ((q = N[j].clone()),
              (A = r(q, N[j + 1], J, y)),
              (V = r(q, N[j + 2], J, y)),
              Z.push(q),
              Z.push(A),
              Z.push(V)),
              $ ||
                ((q = N[j + 1].clone()),
                (A = r(q, N[j + 2], J, y)),
                (V = r(q, N[j], J, y)),
                Z.push(q),
                Z.push(A),
                Z.push(V)),
              p ||
                ((q = N[j + 2].clone()),
                (A = r(q, N[j], J, y)),
                (V = r(q, N[j + 1], J, y)),
                Z.push(q),
                Z.push(A),
                Z.push(V));
            break;
          case 3:
        }
      }
      return Z;
    }
    function r(o, x, t, m) {
      var l = o.position.dot(t) - m,
        D = x.position.dot(t) - m,
        q = l / (l - D),
        r = new Y(
          new E(
            o.position.x + q * (x.position.x - o.position.x),
            o.position.y + q * (x.position.y - o.position.y),
            o.position.z + q * (x.position.z - o.position.z)
          ),
          new E(
            o.$22n.x + q * (x.$22n.x - o.$22n.x),
            o.$22n.y + q * (x.$22n.y - o.$22n.y),
            o.$22n.z + q * (x.$22n.z - o.$22n.z)
          )
        );
      return r;
    }
    var v = [],
      n = [],
      O = [],
      b = new E(),
      m = z.getData3dUI(V);
    if (m.mat) {
      var C = new o().fromArray(m.mat),
        J = new o();
      J.makeRotationFromEuler(x), J.setPosition(Z);
      var F = new o().getInverse(J),
        i = new o().scale({ x: 1 / h.x, y: 1 / h.y, z: 1 / h.z });
      return u(), { vs: v, ns: n, uv: O };
    }
  };
  Y.prototype.clone = function () {
    return new Y(this.position.clone(), this.$22n.clone());
  };
  var Bo = function (L, S, w, B) {
    var C = this,
      s = C.getDataAt(L);
    if (s) {
      var P = C.intersectObject(L, s);
      if (P) {
        "object" == typeof S
          ? (S = S.x ? new E(S.x, S.y, S.z) : new E(S[0], S[1], S[2]))
          : ((S = S || 20), (S = new E(S, S, S))),
          (w = w === Z ? 0.1 : w);
        var y = new E(C.getUp()),
          T = new E(C.getCenter()).sub(new E(C.getEye())).normalize(),
          Y = "cross",
          Q = T.clone()[Y](y).normalize();
        y.copy(Q)[Y](T).normalize(), B && y.applyAxisAngle(P.worldNormal, -B);
        var M = new D.Node(),
          c = P.worldNormal.clone().setLength(w).add(P.world),
          $ = new o().lookAt(P.worldNormal.clone(), new E(0, 0, 0), y),
          g = new A().setFromRotationMatrix($),
          I = kc(C, s, P.world.clone(), g, S);
        return (
          M.p3(c.x, c.y, c.z),
          M.setEuler(g),
          M.s3(S.x, S.y, S.z),
          M.s({ shape3d: I, "shape3d.reverse.flip": !0 }),
          M
        );
      }
    }
  };
  U(D.graph3d.Graph3dView, { createDecal: Bo });
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
