!(function (y, p, z) {
  "use strict";
  var o = "ht",
    F = o + ".widget.",
    t = y[o],
    w = t.Color,
    V = t.widget,
    A = w.widgetBorder,
    x = w.widgetBackground,
    S = w.widgetIconBorder,
    I = w.transparent,
    u = w.background,
    K = w.highlight,
    n = t.Default,
    $ = n.def,
    R = n.widgetRowHeight,
    m = n.removeHTML,
    c = n.drawText,
    j = n.getTextSize,
    q = n.isLeftButton,
    M = n.getWindowInfo,
    C = n.getImage,
    d = n.drawCenterImage,
    H = n.preventDefault,
    Y = n.getLogicalPoint,
    v = n.labelFont,
    Z = n.labelColor,
    U = n.labelSelectColor,
    J = n.widgetIndent,
    s = n.startDragging,
    k = n.createElement,
    N = n.getClientPoint,
    D = n.scrollBarInteractiveSize,
    P = n.getInternal(),
    L = P.addEventListener,
    E = P.removeEventListener,
    X = (P.createView, P.createDiv),
    e = P.createCanvas,
    G = P.createImage,
    g = P.setCanvas,
    Q = P.initContext,
    B = P.translateAndScale,
    b = P.isString,
    l = P.drawBorder,
    T = P.getImageWidth,
    W = P.getImageHeight,
    f = P.fillRect,
    _ = P.layout,
    O = P.addMethod,
    i = P.isH,
    h = n.isTouchable,
    r = n.isTouchEvent,
    a = Math.round,
    Fq = "readonly",
    Pg = h ? "touchstart" : "mousedown",
    Ib = { x: 0, y: 0, width: 0, height: 0 },
    cr = function (L) {
      var S = L.touches[0];
      return S ? S : L.changedTouches[0];
    },
    Am = function (D, V) {
      return D.querySelector(V);
    },
    cf = function (Q, c) {
      var _ = n.getLogicalPoint(c, Q._canvas || Q._view);
      return (
        _.x >= 0 && _.y >= 0 && _.x <= Q.getWidth() && _.y <= Q.getHeight()
      );
    };
  O(
    n,
    {
      textFieldFont: v,
      textFieldColor: Z,
      textFieldBorderColor: A,
      textAreaFont: v,
      textAreaColor: Z,
      textAreaBorderColor: A,
      radioButtonLabelFont: v,
      radioButtonLabelColor: Z,
      radioButtonPressBackground: A,
      checkBoxLabelFont: v,
      checkBoxLabelColor: Z,
      checkBoxPressBackground: A,
      buttonLabelFont: v,
      buttonLabelColor: Z,
      buttonLabelSelectColor: U,
      buttonBackground: x,
      buttonBorderColor: A,
      buttonSelectBackground: K,
      sliderBackground: w.widgetIconBackground,
      sliderLeftBackground: w.widgetIconHighlight,
      sliderThickness: 3,
      sliderPadding: 4,
      sliderButton: G(14, 14, {
        type: "circle",
        rect: [0, 0, 14, 14],
        borderWidth: 1,
        borderColor: S,
        gradient: "linear.northeast",
        gradientColor: w.widgetIconGradient,
        background: x,
      }),
      comboBoxMaxHeight: -1,
      comboBoxLabelFont: v,
      comboBoxLabelColor: Z,
      comboBoxLabelSelectColor: U,
      comboBoxShadowColor: I,
      comboBoxBorderColor: A,
      comboBoxBackground: u,
      comboBoxSelectBackground: K,
      comboBoxDropDownIcon: G(12, 16, {
        type: "shape",
        points: [1, 5, 6, 11, 11, 5],
        borderWidth: 2,
        borderColor: S,
      }),
      imageBorderColor: z,
      imageBackground: z,
      formPaneLabelColor: Z,
      formPaneLabelFont: v,
      formPaneLabelAlign: "left",
      formPaneLabelVAlign: "middle",
      formPaneHPadding: 8,
      formPaneVPadding: 8,
      formPaneLabelHPadding: 2,
      formPaneLabelVPadding: 0,
      formPaneHGap: 6,
      formPaneVGap: 6,
    },
    !0
  );
  var Kn = function (G, L) {
    var V = this;
    (V._view = P.createView(null, V)).appendChild((V._element = k(G, L))),
      V.setHeight(R),
      V.setWidth(80),
      V.iv();
  };
  $(Kn, p, {
    ms_v: 1,
    ms_fire: 1,
    ms_tip: 1,
    ms_ac: ["toolTip"],
    onPropertyChanged: function () {
      this.iv();
    },
    getToolTip: function () {
      return this._toolTip || this.getText();
    },
    getElement: function () {
      return this._element;
    },
    getText: function () {
      return this._element.value;
    },
    setText: function (_) {
      this._element.value = _;
    },
    getValue: function () {
      return this.getText();
    },
    setValue: function (d) {
      this.setText(d);
    },
    getColor: function () {
      return this._element.style.color;
    },
    setColor: function (i) {
      this._element.style.color = i;
    },
    getBackground: function () {
      return this._element.style.background;
    },
    setBackground: function (n) {
      this._element.style.background = n;
    },
    getBorder: function () {
      return this._element.style.border;
    },
    setBorder: function (R) {
      this._element.style.border = R;
    },
    getFont: function () {
      return this._element.style.font;
    },
    setFont: function (Q) {
      this._element.style.font = Q;
    },
    isEditable: function () {
      return !this._element.hasAttribute(Fq);
    },
    setEditable: function (g) {
      var Y = this._element;
      g ? Y.removeAttribute(Fq) : Y.setAttribute(Fq, !0);
    },
    validateImpl: function () {
      var d = this;
      _(d._element, 0, 0, d.getWidth(), d.getHeight());
    },
    setFocus: function () {
      return n.setFocus(this._element), this.fireViewEvent("focus"), !0;
    },
  }),
    (V.TextField = function () {
      V.TextField.superClass.constructor.call(
        this,
        "input",
        n.textFieldBorderColor
      ),
        this.setColor(n.textFieldLabelColor),
        this.setFont(n.textFieldLabelFont);
    }),
    $(F + "TextField", Kn, {
      getType: function () {
        return this._element.getAttribute("type");
      },
      setType: function (m) {
        var z = this._element,
          u = n.numberListener;
        z.setAttribute("type", m),
          E(z, "keydown", u, !1),
          "number" === m && L(z, "keydown", u, !1);
      },
    }),
    (V.TextArea = function () {
      V.TextArea.superClass.constructor.call(
        this,
        "textarea",
        n.textAreaBorderColor
      ),
        this.setColor(n.textAreaLabelColor),
        this.setFont(n.textAreaLabelFont);
    }),
    $(F + "TextArea", Kn, {}),
    (V.Button = function () {
      var o = this,
        Y = (o._view = P.createView(null, o));
      o.setHeight(R), o.setWidth(80), (o._canvas = e(Y)), new ds(o), o.iv();
    }),
    $(F + "Button", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_tip: 1,
      ms_ac: [
        "groupId",
        "label",
        "icon",
        "iconColor",
        "orientation",
        "toolTip",
        "labelFont",
        "labelColor",
        "labelSelectColor",
        "borderColor",
        "background",
        "selectBackground",
        "togglable",
        "selected",
        "pressed",
        "clickable",
      ],
      _clickable: !0,
      _togglable: !1,
      _selected: !1,
      _pressed: !1,
      _orientation: "h",
      _labelFont: n.buttonLabelFont,
      _labelColor: n.buttonLabelColor,
      _labelSelectColor: n.buttonLabelSelectColor,
      _borderColor: n.buttonBorderColor,
      _background: n.buttonBackground,
      _selectBackground: n.buttonSelectBackground,
      onClicked: function () {},
      onSelectedChanged: function () {},
      getValue: function () {
        return this.isSelected();
      },
      setValue: function (z) {
        this.setSelected(z);
      },
      onValueChanged: function () {},
      onPropertyChanged: function (I) {
        var V = this,
          g = V._view.parentNode;
        V.iv(),
          "selected" === I.property &&
            (null != V.getGroupId() &&
              g &&
              g.handleGroupSelectedChanged &&
              g.handleGroupSelectedChanged(V),
            V.onSelectedChanged(),
            V.onValueChanged(I.oldValue, I.newValue));
      },
      getToolTip: function () {
        return this._toolTip || this._label;
      },
      getCurrentBackground: function () {
        return this._pressed || this._selected
          ? this._selectBackground
          : this._background;
      },
      getCurrentBorderColor: function () {
        return this._borderColor;
      },
      validateImpl: function () {
        var k = this,
          o = k._canvas,
          I = k.getWidth(),
          D = k.getHeight(),
          N = k._pressed || k._selected,
          U = k.getCurrentBackground();
        g(o, I, D);
        var _ = Q(o);
        B(_, 0, 0, 1),
          _.clearRect(0, 0, I, D),
          U && f(_, 0, 0, I, D, U),
          l(_, k.getCurrentBorderColor(), 0, 0, I, D);
        var v = k._iconColor,
          t = C(k._icon, v),
          S = T(t),
          V = W(t),
          x = k._label,
          P = k.getLabelFont(),
          u = N ? k._labelSelectColor : k._labelColor,
          s = null == x ? Ib : j(P, x),
          J = s.width,
          K = s.height;
        i(k)
          ? (S && d(_, t, I / 2 - (S + J) / 2 + S / 2, D / 2, k, k, v),
            J && c(_, x, P, u, I / 2 - (S + J) / 2 + S, 0, J, D, "center"))
          : (S && d(_, t, I / 2, D / 2 - (V + K) / 2 + V / 2, k, k, v),
            J &&
              c(
                _,
                x,
                P,
                u,
                I / 2 - J / 2,
                D / 2 - (V + K) / 2 + V,
                J,
                K,
                "center"
              )),
          _.restore();
      },
    });
  var ds = (V.ButtonInteractor = function (b) {
    (this.button = b), this.addListeners();
  });
  $(F + "ButtonInteractor", p, {
    ms_listener: 1,
    getView: function () {
      return this.button._view;
    },
    handle_mousedown: function (C) {
      q(C) && this.handle_touchstart(C);
    },
    handleWindowMouseMove: function (E) {
      this.handleWindowTouchMove(E);
    },
    handleWindowMouseUp: function (t) {
      this.handleWindowTouchEnd(t);
    },
    handle_touchstart: function (K) {
      H(K),
        this.button.setFocus(K) &&
          this.button.isClickable() &&
          (s(this, K), this.button.setPressed(!0));
    },
    handleWindowTouchMove: function () {},
    handleWindowTouchEnd: function (m) {
      var F = this,
        s = F.button;
      s.setPressed(!1),
        cf(s, m) &&
          (s.isTogglable() &&
            (null != s.getGroupId()
              ? s.setSelected(!0)
              : s.setSelected(!s.isSelected())),
          s.onClicked(m));
    },
  });
  var kj = function () {
    var g = this,
      O = (g._view = P.createView(null, g));
    g.setHeight(R), g.setWidth(80), (g._canvas = e(O)), new vq(g), g.iv();
  };
  $(kj, p, {
    ms_v: 1,
    ms_fire: 1,
    ms_tip: 1,
    ms_ac: [
      "label",
      "labelFont",
      "labelColor",
      "toolTip",
      "icon",
      "iconColor",
      "selected",
      "pressed",
      "pressBackground",
      "padding",
    ],
    _padding: 0,
    _selected: !1,
    _pressed: !1,
    onClicked: function () {},
    onSelectedChanged: function () {},
    onValueChanged: function () {},
    getValue: function () {
      return this.isSelected();
    },
    setValue: function ($) {
      this.setSelected($);
    },
    onPropertyChanged: function (j) {
      var d = this;
      d.iv(),
        "selected" === j.property &&
          (d.onSelectedChanged(), d.onValueChanged(j.oldvalue, j.newValue));
    },
    getToolTip: function () {
      return this._toolTip || this._label;
    },
    validateImpl: function () {
      var D = this,
        I = D._canvas,
        a = D.getWidth(),
        j = D.getHeight(),
        L = D.getCheckIcon;
      g(I, a, j);
      var l = Q(I);
      B(l, 0, 0, 1), l.clearRect(0, 0, a, j);
      var m = D._padding,
        P = D._iconColor,
        K = C(L ? D.getCheckIcon() : D.getRadioIcon()),
        Z = T(K),
        r = W(K);
      D._pressed &&
        ((l.fillStyle = D._pressBackground),
        l.beginPath(),
        L
          ? l.rect(m, j / 2 - r / 2, Z, r)
          : l.arc(m + Z / 2, j / 2, Math.min(Z, r) / 2, 0, 2 * Math.PI, !0),
        l.fill()),
        d(l, K, m + Z / 2, j / 2, D, D),
        (m += Z + 1),
        (K = C(D.getIcon(), P)),
        (Z = T(K)),
        d(l, K, m + Z / 2, j / 2, D, D, P),
        (m += Z),
        c(l, D._label, D._labelFont, D._labelColor, m, 0, 0, j),
        l.restore();
    },
  });
  var vq = function (Y) {
    (this.c = Y), this.addListeners();
  };
  $(vq, p, {
    ms_listener: 1,
    getView: function () {
      return this.c._view;
    },
    handle_mousedown: function (v) {
      q(v) && this.handle_touchstart(v);
    },
    handleWindowMouseMove: function (U) {
      this.handleWindowTouchMove(U);
    },
    handleWindowMouseUp: function (O) {
      this.handleWindowTouchEnd(O);
    },
    handle_touchstart: function (i) {
      H(i), this.c.setFocus(i) && (s(this, i), this.c.setPressed(!0));
    },
    handleWindowTouchMove: function () {},
    handleWindowTouchEnd: function (X) {
      var T = this,
        K = T.c;
      K.setPressed(!1), cf(K, X) && (K.handleClick(X), K.onClicked(X));
    },
  }),
    (V.CheckBox = function () {
      V.CheckBox.superClass.constructor.call(this);
    }),
    $(F + "CheckBox", kj, {
      _labelFont: n.checkBoxLabelFont,
      _labelColor: n.checkBoxLabelColor,
      _pressBackground: n.checkBoxPressBackground,
      getCheckIcon: function () {
        return this._selected ? "check" : "uncheck";
      },
      handleClick: function () {
        this.setSelected(!this.isSelected());
      },
    }),
    (V.RadioButton = function () {
      V.RadioButton.superClass.constructor.call(this);
    }),
    $(F + "RadioButton", kj, {
      ms_ac: ["groupId"],
      _pressBackground: n.radioButtonPressBackground,
      _labelFont: n.radioButtonLabelFont,
      _labelColor: n.radioButtonLabelColor,
      getRadioIcon: function () {
        return this._selected ? "radioOn" : "radioOff";
      },
      onPropertyChanged: function (U) {
        var e = this,
          L = e._view.parentNode;
        e.iv(),
          null != e.getGroupId() &&
            "selected" === U.property &&
            (L &&
              L.handleGroupSelectedChanged &&
              L.handleGroupSelectedChanged(e),
            e.onSelectedChanged(),
            e.onValueChanged(U.oldValue, U.newValue));
      },
      handleClick: function () {
        this.setSelected(!0);
      },
    }),
    (V.Slider = function () {
      var K = this,
        T = (K._view = P.createView(null, K));
      K.setHeight(R),
        K.setWidth(80),
        (K._canvas = e(T)),
        new fl(K),
        K.iv(),
        K.enableToolTip();
    }),
    $(F + "Slider", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_tip: 1,
      ms_ac: [
        "value",
        "min",
        "max",
        "step",
        "button",
        "toolTip",
        "instant",
        "thickness",
        "padding",
        "background",
        "leftBackground",
      ],
      _min: 0,
      _max: 100,
      _value: 50,
      _step: z,
      _instant: !0,
      _button: n.sliderButton,
      _thickness: n.sliderThickness,
      _padding: n.sliderPadding,
      _background: n.sliderBackground,
      _leftBackground: n.sliderLeftBackground,
      onPropertyChanged: function (G) {
        var B = this,
          O = G.property;
        ("min" === O || "max" === O || "step" === O) && B.setValue(B._value),
          B.iv();
      },
      adjustValue: function (e) {
        null == e && (e = 0);
        var X = this,
          H = X._min,
          t = X._max,
          j = X._step;
        return (
          H > e && (e = H),
          e > t && (e = t),
          j > 0 && (e = Math.floor((e - H) / j) * j + H),
          e
        );
      },
      getToolTip: function () {
        return this._toolTip || this._value;
      },
      getValue: function () {
        return this._value;
      },
      setValue: function (k) {
        var S = this,
          B = S._value;
        (k = S.adjustValue(k)),
          B !== k &&
            ((S._value = k), S.fp("value", B, k), S.onValueChanged(B, k));
      },
      onValueChanged: function () {},
      onBeginValueChanged: function () {},
      onEndValueChanged: function () {},
      drawBackground: function (V, C, o, j, Q) {
        f(V, C, o, j, Q, this.getBackground());
      },
      drawLeftBackground: function (w, V, y, O, F) {
        var $ = this.getLeftBackground();
        $ && f(w, V, y, O, F, $);
      },
      drawButton: function (B, P, q, n, Q) {
        d(B, C(this._button), P + n / 2, q + Q / 2, this, this);
      },
      getButtonWidth: function () {
        var L = C(this._button);
        return L ? L.width : 0;
      },
      validateImpl: function () {
        var s = this,
          b = s._canvas,
          G = s._min,
          q = s._max,
          S = s._value,
          h = s._padding,
          y = s._thickness,
          a = s.getWidth(),
          j = s.getHeight(),
          M = s.getButtonWidth(),
          H = (j - y) / 2,
          I = M / 2 + ((S - G) / (q - G)) * (a - 2 * h - M);
        g(b, a, j);
        var m = Q(b);
        B(m, 0, 0, 1),
          m.clearRect(0, 0, a, j),
          s.drawBackground(m, h, H, a - 2 * h, y),
          s.drawLeftBackground(m, h, H, I, y),
          s.drawButton(m, h + I - M / 2, 0, M, j),
          m.restore();
      },
    });
  var fl = function (s) {
    (this.slider = s), this.addListeners();
  };
  $(fl, p, {
    ms_listener: 1,
    getView: function () {
      return this.slider._view;
    },
    handle_mousedown: function (c) {
      q(c) && this.handle_touchstart(c);
    },
    handleWindowMouseMove: function (f) {
      this.handleWindowTouchMove(f);
    },
    handleWindowMouseUp: function (x) {
      this.handleWindowTouchEnd(x);
    },
    setValue: function (A) {
      var F = this.slider,
        U = F.getPadding() + F.getButtonWidth() / 2,
        S = F.getMin();
      F.setValue(
        S +
          ((Y(A, F._canvas).x - U) / (F.getWidth() - 2 * U)) * (F.getMax() - S)
      );
    },
    handle_touchstart: function (h) {
      var Y = this;
      H(h),
        Y.slider.setFocus(h) &&
          (Y.slider.onBeginValueChanged(),
          Y.setValue(h),
          s(Y, h),
          n.showToolTip(h, Y.slider.getToolTip(h), Y.slider));
    },
    handleWindowTouchMove: function (W) {
      this.setValue(W),
        n.showToolTip(W, this.slider.getToolTip(W), self.slider);
    },
    handleWindowTouchEnd: function (Z) {
      this.setValue(Z), this.slider.onEndValueChanged(), n.hideToolTip();
    },
  }),
    (V.ComboBox = function () {
      var z = this,
        N = (z._view = P.createView(null, z)),
        f = (z._listView = new V.ListView()),
        b = (z._canvas = e(N)),
        c = f._view,
        m = f.sm();
      z.setHeight(R),
        z.setWidth(80),
        m.setSelectionMode("single"),
        (f.drawRow = function (k, I, A, w, Z, e, a) {
          z.drawRow(k, I, A, w, Z, e, a);
        }),
        (N.style.display = "inline-block"),
        P.setBorder(N, n.comboBoxBorderColor),
        (c.style.boxShadow = "0px 0px 10px " + n.comboBoxShadowColor),
        null != n.baseZIndex &&
          (c.style.zIndex = parseInt(n.baseZIndex) + 1 + ""),
        L(
          c,
          "mousemove",
          function (Q) {
            m.ss(f.getDataAt(Q));
          },
          !1
        ),
        L(
          c,
          "keydown",
          function (D) {
            if (P.isEnter(D)) {
              var W = m.ld();
              W && (z.setValue(W.value), z.close());
            }
            P.isEsc(D) && z.close();
          },
          !1
        ),
        L(
          N,
          "keydown",
          function (x) {
            (P.isDown(x) || P.isUp(x)) && z.open();
          },
          !1
        ),
        (f.onDataClicked = function ($) {
          z.setValue($.value), z.close();
        }),
        L(
          N,
          Pg,
          function (m) {
            if (q(m)) {
              var V = m.target;
              (V === b || V === N) && (H(m), z.toggle());
            }
          },
          !1
        ),
        (z._handleWindowClick = function (B) {
          if (q(B)) {
            var H = B.target;
            H === z._input ||
              c.contains(H) ||
              H === N ||
              (z._input ? z.setInputValue(z._input) : z.close());
          }
        }),
        z.iv();
    }),
    n.def(F + "ComboBox", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_tip: 1,
      ms_ac: [
        "dropDownIcon",
        "dropDownWidth",
        "dropDownBackground",
        "toolTip",
        "strict",
        "indent",
        "background",
        "labelFont",
        "labelColor",
        "labelSelectColor",
        "maxHeight",
        "selectBackground",
        "value",
        "values",
        "labels",
        "icons",
        "editable",
      ],
      _strict: !0,
      _editable: !1,
      _maxHeight: n.comboBoxMaxHeight,
      _labelFont: n.comboBoxLabelFont,
      _labelColor: n.comboBoxLabelColor,
      _labelSelectColor: n.comboBoxLabelSelectColor,
      _background: n.comboBoxBackground,
      _dropDownWidth: z,
      _dropDownIcon: n.comboBoxDropDownIcon,
      _dropDownBackground: n.comboBoxBackground,
      _selectBackground: n.comboBoxSelectBackground,
      _indent: J,
      getInput: function () {
        return this._input;
      },
      getListView: function () {
        return this._listView;
      },
      onPropertyChanged: function (U) {
        this.iv(),
          "value" === U.property && this.onValueChanged(U.oldValue, U.newValue);
      },
      onValueChanged: function () {},
      getToolTip: function () {
        return this._toolTip || this.toLabel(this._value);
      },
      getLabelColor: function (O, z) {
        return z ? this._labelSelectColor : this._labelColor;
      },
      isEqual: function (w, D) {
        return this._strict ? w === D : w == D;
      },
      toLabel: function (n) {
        var b = this,
          k = b.getValues(),
          y = b.getLabels();
        if (y && k && y.length === k.length)
          for (var g = 0; g < k.length; g++)
            if (b.isEqual(k[g], n)) return y[g];
        return null == n ? "" : n + "";
      },
      toIcon: function (Y) {
        var n = this,
          I = n.getValues(),
          e = n.getIcons();
        if (e && I && e.length === I.length)
          for (var N = 0; N < I.length; N++)
            if (n.isEqual(I[N], Y)) return e[N];
        return null;
      },
      drawValue: function (K, O, T, P, e, B, s) {
        var y = this,
          I = y._indent,
          X = y.toLabel(O),
          m = C(y.toIcon(O));
        m && (d(K, m, P + I / 2, e + s / 2), (P += I)),
          X && c(K, X, y.getLabelFont(O, T), y.getLabelColor(O, T), P, e, 0, s);
      },
      drawRow: function (w, c, F, K, v, W, G) {
        var U = this,
          H = c.value,
          C = U._indent;
        F && f(w, K, v, W, G, U._selectBackground),
          U.drawValue(w, H, F, K, v, W - C, G);
      },
      validateImpl: function () {
        var l = this,
          h = l._canvas,
          f = l._indent,
          Z = l.getWidth(),
          G = l.getHeight(),
          u = Z - f,
          E = l._background || "";
        (l._view.style.background = E),
          (l._listView._view.style.background = l._dropDownBackground),
          g(h, Z, G);
        var O = Q(h);
        B(O, 0, 0, 1),
          O.clearRect(0, 0, Z, G),
          d(O, C(l._dropDownIcon), Z - 10, G / 2, l, l),
          O.beginPath(),
          O.rect(0, 0, u, G),
          O.clip(),
          l.drawValue(O, l._value, !1, 0, 0, u, G),
          O.restore();
      },
      isOpened: function () {
        return !!this._listView._view.parentNode;
      },
      open: function () {
        var d = this,
          k = d._listView,
          F = k.dm(),
          z = d.getValues() || [],
          Z = z.length;
        if (!d.isOpened()) {
          F.clear();
          for (var O = 0; Z > O; O++) {
            var N = new t.Data(),
              f = z[O];
            N.setName(d.toLabel(f)),
              (N.value = f),
              F.add(N),
              d.isEqual(f, d._value) && F.sm().ss(N);
          }
          var I = M(),
            X = I.left,
            s = I.top,
            o = I.height,
            l = d._view.getBoundingClientRect(),
            c = l.left + X,
            A = l.top + s,
            j = l.height,
            J = d.getIndent(),
            U = d.getWidth(),
            S = d.getHeight(),
            G = c + 1,
            Y = A + j,
            v = d.getDropDownWidth() || U,
            a = Z * S;
          if (
            (d._maxHeight > 0 && (a = Math.min(a, d._maxHeight)),
            k.setRowHeight(S),
            Y + a > s + o &&
              (A - s > s + o - A - j
                ? ((a = Math.min(a, A - s)), (Y = A - a))
                : (a = s + o - Y)),
            d._editable)
          ) {
            var u = (d._input = n.createElement(
              "input",
              d.getSelectBackground(),
              d.getLabelFont(),
              d.toLabel(d._value)
            ));
            (u.className = "ht-widget-combobox-input"),
              t.Default.appendToScreen(u),
              _(u, c, A + 1, U - J, S),
              L(
                u,
                "keydown",
                function (o) {
                  P.isEnter(o) ? d.setInputValue(u) : P.isEsc(o) && d.close();
                },
                !1
              ),
              d.onInputCreated(u);
          }
          (k.getView().className = "ht-widget-combobox-popup"),
            t.Default.appendToScreen(k.getView()),
            _(k, G, Y, v, a),
            k.setFocus(),
            t.Default.callLater(function () {
              L(y, Pg, d._handleWindowClick, !1);
            }),
            d.onOpened && d.onOpened(),
            P.closePopup(d);
        }
      },
      onInputCreated: function () {},
      setInputValue: function (s) {
        var l = this,
          V = l.getLabels(),
          C = l.getValues(),
          U = s.value;
        if (V) for (var z = 0; z < V.length; z++) U === V[z] && (U = C[z]);
        "string" == typeof U &&
          C &&
          C.length &&
          "number" == typeof C[0] &&
          (U = parseFloat(U)),
          l.setValue(U),
          l.close();
      },
      close: function () {
        var v = this;
        v.isOpened() &&
          (m(v._listView._view),
          v._input && (m(v._input), delete v._input),
          E(y, Pg, v._handleWindowClick, !1),
          v.onClosed && v.onClosed(),
          n.popup === v && delete n.popup),
          v.setFocus();
      },
      toggle: function () {
        var c = this;
        c.isOpened() ? c.close() : c.open();
      },
    }),
    (V.BaseDropDownTemplate = function (T) {
      this._master = T;
    }),
    n.def(F + "BaseDropDownTemplate", p, {
      ms_ac: ["master"],
      getView: function () {},
      onOpened: function () {},
      onClosed: function () {},
      getValue: function () {},
      getWidth: function () {},
      getHeight: function () {},
    }),
    (V.MultiComboBox = function () {
      var a = this,
        y = (a._view = P.createView(null, a)),
        T = (a._canvas = e(y));
      a.setHeight(R),
        a.setWidth(80),
        (y.style.display = "inline-block"),
        P.setBorder(y, n.comboBoxBorderColor),
        L(
          y,
          "keydown",
          function (C) {
            (P.isDown(C) || P.isUp(C)) && a.open();
          },
          !1
        ),
        L(
          y,
          Pg,
          function ($) {
            if (q($)) {
              var C = $.target;
              (C === T || C === y) && (H($), a.toggle());
            }
          },
          !1
        ),
        (a._handleWindowClick = function (k) {
          if (q(k)) {
            var J = k.target,
              i = a._dropDownComponentInstanceView;
            J === a._input || J === y || (i && i.contains(J)) || a.close(!0);
          }
        }),
        a.iv();
    }),
    n.def(F + "MultiComboBox", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_tip: 1,
      ms_ac: [
        "dropDownIcon",
        "toolTip",
        "background",
        "labelFont",
        "labelColor",
        "value",
        "editable",
        "indent",
        "dropDownComponent",
      ],
      _editable: !1,
      _background: n.comboBoxBackground,
      _dropDownIcon: n.comboBoxDropDownIcon,
      _indent: J,
      _labelFont: n.comboBoxLabelFont,
      _labelColor: n.comboBoxLabelColor,
      onPropertyChanged: function (u) {
        var P = this;
        P.iv(),
          "value" === u.property && P.onValueChanged(u.oldValue, u.newValue);
      },
      onValueChanged: function () {},
      getDropDownComponentInstance: function () {
        return this._dropDownComponentInstance;
      },
      getToolTip: function () {
        return this._toolTip;
      },
      validateImpl: function () {
        var E = this,
          z = E._canvas,
          O = E._indent,
          i = E.getWidth(),
          c = E.getHeight(),
          k = i - O,
          G = E._background || "";
        (E._view.style.background = G), g(z, i, c);
        var q = Q(z);
        B(q, 0, 0, 1),
          q.clearRect(0, 0, i, c),
          d(q, C(E._dropDownIcon), i - 10, c / 2, E, E),
          q.beginPath(),
          q.rect(0, 0, k, c),
          q.clip(),
          this.drawValue(q, 0, 0, k, c),
          E._input &&
            E._input.value !== E._value &&
            (E._input.value = null == E._value ? "" : E._value),
          q.restore();
      },
      drawValue: function (g, t, A, n, e) {
        c(
          g,
          this._value,
          this.getLabelFont(),
          this.getLabelColor(),
          t + 1,
          A,
          0,
          e
        );
      },
      isOpened: function () {
        var x = this,
          b = x._dropDownComponentInstanceView;
        return !!b;
      },
      open: function () {
        var E = this;
        if (!E.isOpened()) {
          var c = n.getClass(E._dropDownComponent),
            D = (E._dropDownComponentInstance = new c(E)),
            a = (E._dropDownComponentInstanceView = D.getView()),
            j = M(),
            Q = j.left,
            b = j.top,
            J = E._view.getBoundingClientRect(),
            F = J.left + Q,
            R = J.top + b,
            N = E.getIndent(),
            s = E.getWidth(),
            X = E.getHeight();
          if ((D.beforeOpen && D.beforeOpen(E._value), E._editable)) {
            var r = (E._input = n.createElement(
              "input",
              n.comboBoxSelectBackground,
              E.getLabelFont(),
              E._value
            ));
            t.Default.appendToScreen(r),
              _(r, F, R + 1, s - N, X),
              L(
                r,
                "keydown",
                function (O) {
                  P.isEnter(O)
                    ? (E.setValue(r.value), E.close(!0))
                    : P.isEsc(O) && E.close(!0);
                },
                !1
              ),
              E.onInputCreated(r);
          }
          (a.style.boxShadow = "0px 0px 10px " + n.toolTipShadowColor),
            (a.style.position = "absolute"),
            null != n.baseZIndex &&
              (a.style.zIndex = parseInt(n.baseZIndex) + 1 + ""),
            t.Default.appendToScreen(a),
            t.Default.setFocus(a),
            this.layoutDropDown(),
            D.onOpened && D.onOpened(E._value),
            t.Default.callLater(function () {
              L(y, Pg, E._handleWindowClick, !1);
            }),
            E.onOpened && E.onOpened(),
            P.closePopup(E),
            E.fireViewEvent("open");
        }
      },
      layoutDropDown: function () {
        var S = this,
          W = S._dropDownComponentInstance,
          h = M(),
          U = h.left,
          Y = h.top,
          H = h.width,
          d = h.height,
          X = S._view.getBoundingClientRect(),
          G = X.left + U,
          s = X.top + Y,
          c = X.height,
          l = S.getWidth(),
          Z = G,
          a = s + c,
          j = W.getWidth() || l,
          B = W.getHeight();
        a + B > Y + d && s - Y > Y + d - s - c && (a = s - B),
          Z + j > U + H && (Z -= Z + j - U - H),
          _(W, Z, a, j, B);
      },
      onInputCreated: function () {},
      close: function ($) {
        var c = this;
        if (c.isOpened()) {
          $ || c.setValue(c._dropDownComponentInstance.getValue());
          var L = c._dropDownComponentInstance,
            e = c._dropDownComponentInstanceView;
          L.onClosed && L.onClosed(),
            m(e),
            delete c._dropDownComponentInstanceView,
            delete c._dropDownComponentInstance,
            c._input && (m(c._input), delete c._input),
            E(y, Pg, c._handleWindowClick, !1),
            c.onClosed && c.onClosed(),
            n.popup === c && delete n.popup,
            c.fireViewEvent("close");
        }
        c.setFocus();
      },
      toggle: function () {
        var S = this;
        S.isOpened() ? S.close() : S.open();
      },
    }),
    (V.Image = function () {
      var h = this,
        X = (h._view = P.createView(null, h));
      (X.onmousedown = H),
        h.setHeight(R),
        h.setWidth(80),
        (h._canvas = e(X)),
        new me(h),
        h.iv();
    }),
    $(F + "Image", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_tip: 1,
      ms_ac: [
        "icon",
        "iconColor",
        "stretch",
        "toolTip",
        "borderColor",
        "background",
      ],
      _borderColor: n.imageBorderColor,
      _background: n.imageBackground,
      _stretch: "centerUniform",
      onClicked: function () {},
      onPropertyChanged: function () {
        this.iv();
      },
      validateImpl: function () {
        var p = this,
          b = p._canvas,
          F = p.getWidth(),
          Y = p.getHeight(),
          n = p._iconColor,
          E = C(p._icon, n),
          X = p._background;
        g(b, F, Y);
        var v = Q(b);
        B(v, 0, 0, 1),
          v.clearRect(0, 0, F, Y),
          X && f(v, 0, 0, F, Y, X),
          this.drawImage(v, E, 0, 0, F, Y, n),
          l(v, p._borderColor, 0, 0, F, Y),
          v.restore();
      },
      drawImage: function (s, P, w, G, N, Y, x) {
        P && n.drawStretchImage(s, P, this._stretch, w, G, N, Y, null, this, x);
      },
    });
  var me = function (Z) {
    (this.image = Z), this.addListeners();
  };
  $(me, p, {
    ms_listener: 1,
    getView: function () {
      return this.image._view;
    },
    handle_mousedown: function (K) {
      q(K) && this.handle_touchstart(K);
    },
    handleWindowMouseMove: function (b) {
      this.handleWindowTouchMove(b);
    },
    handleWindowMouseUp: function (t) {
      this.handleWindowTouchEnd(t);
    },
    handle_touchstart: function (T) {
      H(T), s(this, T);
    },
    handleWindowTouchMove: function () {},
    handleWindowTouchEnd: function (f) {
      var A = this,
        u = A.image;
      cf(u, f) && u.onClicked(f);
    },
  });
  var Cm =
      "data:image/png;base64,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",
    Eo =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw+MhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNrs2sEJgDAQRNGJBPuvV5R4FAuYnF4aeGRv+9mx0n0zOQEAAAAAAAAAAAAAAABsAsbK0/3Bk6MLXO1WAQAAAAAAAAAAAAAAAOBLCUn3bGCWWwgAAAAAAAAAAAAAAACA36Z/rzKw7vKIcgEAAAAAAAAAAAAAAADYBIzyzUBmuYUAAAAAAAAAAAAAAAAA2AmM8s1AZrmFAAAAAAAAAAAAAAAAAPht+uWU8AowAGyEi9doBGciAAAAAElFTkSuQmCC",
    ff =
      "data:image/png;base64,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",
    ip =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVChTY/iPCk6DwRkYoKv0sWPHjiIBBohyCADKQVXBAIr0kSNHoMIwwAC1BAyApkGFYYAS6f//AVzgDAPz1XkAAAAAAElFTkSuQmCC",
    dn =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAANUlEQVR42myNsQ0AMAzC8P9Hu0sjpU3YkLFADWBmIInqQsgDAar8kCY6zDtYzfUzte5ROQMAeFAiAMRBE+oAAAAASUVORK5CYII=";
  (V.ColorPicker = function () {
    var e = this;
    V.ColorPicker.superClass.constructor.call(e),
      e.setEditable(!0),
      e.setDropDownComponent(V.ColorPickerTemp);
  }),
    $(F + "ColorPicker", V.MultiComboBox, {
      ms_ac: ["instant", "clearButtonVisible", "paletteColors"],
      _clearButtonVisible: !0,
      setValue: function (c) {
        var R = this;
        if (c !== z) {
          var J = R._value;
          (R._value = c), R.fp("value", J, c);
        }
      },
      drawValue: function (L, z, v, p, x) {
        this._value &&
          (L.beginPath(),
          L.rect(z + 2, v + 2, 20, x - 4),
          (L.fillStyle = this._value),
          L.fill()),
          c(
            L,
            this._value,
            this.getLabelFont(),
            this.getLabelColor(),
            z + 23,
            v,
            0,
            x
          );
      },
    }),
    (V.ColorPickerTemp = function (y) {
      var I = this,
        p = "px",
        G = (I._view = P.createView(null, I)),
        E = (I.$10o = document.createElement("div")),
        f = (I.$12o = X()),
        S = (I._paletteColorsDiv = X()),
        c = E.style;
      (I._h = 360),
        (I._s = 100),
        (I._v = 100),
        (G.className = "colorPickerPopup ht-widget-colorpicker-popup"),
        (G.style.position = "absolute"),
        (G.style.background = t.Color.background || "white"),
        V.ColorPickerTemp.superClass.constructor.call(I, y);
      var w =
          '<div style="border: 1px solid rgba(0, 0, 0, 0); position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px; background: url(' +
          ip +
          ') repeat;"></div>                      <div class= "preview" style="border: 1px solid black; position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px;"></div>                      <div style="margin-left: 50px; color: ' +
          n.labelColor +
          ";font: " +
          n.labelFont +
          '; line-height: 30px;" >                             <span>R:</span><input class="color_R" style="width: 28px;" type="' +
          (h ? "number" : "text") +
          '">                             <span>G:</span><input class="color_G" style="width: 28px" type="' +
          (h ? "number" : "text") +
          '">                             <span>B:</span><input class="color_B" style="width: 28px" type="' +
          (h ? "number" : "text") +
          '">                             <span>A:</span><input class="color_A" style="width: 28px" value="1" type="' +
          (h ? "number" : "text") +
          '">                      </div>',
        r =
          '<div>        <div class="satval" style="position: absolute;cursor:crosshair;margin-left:5px;top: 6px;border:1px solid black;width:128px;height:128px;background-image: url(' +
          Cm +
          ');background-color: red;background-size:contain;">            <div class="satval_pointer" style="position:absolute;left: 124px; top: -3px;width: 7px; height: 7px;background-image: url(' +
          dn +
          ')"></div>        </div>        <div class="hue_picker" style="position:absolute;width: 46px; height: 140px;left: 152px;top:0;">            <div class="hue_image" style="border: 1px solid black;position:absolute;left:7px;top:6px;width:30px; height:128px; background: url(' +
          Eo +
          ');background-size:contain;"></div>            <div class="hue_pointer" style="position:absolute;top:1px;left:0;width:46px; height:12px; background: url(' +
          ff +
          ')"></div>        </div>        <div style="position: absolute; left: 210px;top:6px;">        <input type="button" value="&#10003" class="color_ok" style="color: ' +
          n.labelColor +
          '"><br><br>        <input type="button" value="&#10005" class="color_clear" style="color: ' +
          n.labelColor +
          '">        </div>        </div>';
      (c.font = n.labelFont),
        (c.height = 30 + p),
        (c.lineHeight = 30 + p),
        (c.position = "relative"),
        (c.whiteSpace = "nowrap"),
        (E.innerHTML = w),
        (f.innerHTML = r);
      var d = y.getPaletteColors(),
        $ = I.calculatePaletteWidth();
      if (d && d.length > 0)
        for (var Y = 0; Y < d.length; Y++)
          for (var D = 0; D < d[Y].length; D++) {
            var R = d[Y][D],
              b = X();
            (b.style.left = 5 + D * ($ + 5) + "px"),
              (b.style.background = R),
              (b.style.width = $ + "px"),
              (b.style.height = $ + "px"),
              (b.style.top = 5 + Y * ($ + 5) + "px"),
              (b.style.border = "1px solid black"),
              (b.style.boxSizing = "border-box"),
              (b.className = "colorPalette"),
              (b._color = R),
              S.appendChild(b);
          }
      (S.style.top = "166px"),
        G.appendChild(E),
        G.appendChild(f),
        G.appendChild(S),
        L(G, "click", function (D) {
          var m = D.target,
            S = m.className;
          if ("color_ok" === S) (I.$13o = I.$9o()), y.close(!1, D);
          else if ("color_clear" === S) (I.$13o = null), y.close();
          else if (["color_R", "color_G", "color_B", "color_A"].indexOf(S) >= 0)
            m.select(!1, D);
          else if ("colorPalette" === S) {
            var B = m._color;
            (I.$13o = B), y.close(!1, D);
          }
        });
      var o = function (N) {
        var q,
          y = N.target,
          z = y.className,
          T = !1;
        ["color_R", "color_G", "color_B"].indexOf(z) >= 0
          ? ((q = parseInt(y.value)),
            (y.value = q >= 0 && 255 >= q ? parseInt(y.value) : 0),
            (T = !0))
          : "color_A" === z &&
            ((q = parseFloat(y.value)),
            (y.value = q >= 0 && 1 >= q ? parseFloat(y.value) : 0),
            (T = !0)),
          T && I.updateInputChange();
      };
      L(G, "keydown", function (v) {
        var f = v.target,
          x = f.className;
        [
          "color_R",
          "color_G",
          "color_B",
          "color_A",
          "color_ok",
          "color_clear",
        ].indexOf(x) >= 0 &&
          13 == v.keyCode &&
          (o(v), (I.$13o = I.$9o()), y.close());
      }),
        new Gr(I),
        L(G, "change", o),
        L(G, "mousedown", function (L) {
          H(L);
        });
      var u = Am(G, ".color_clear");
      y._clearButtonVisible || (u.style.display = "none"),
        t.Default.onElementCreated &&
          (t.Default.onElementCreated(G.querySelector("input.color_R")),
          t.Default.onElementCreated(G.querySelector("input.color_G")),
          t.Default.onElementCreated(G.querySelector("input.color_B")),
          t.Default.onElementCreated(G.querySelector("input.color_A")),
          t.Default.onElementCreated(G.querySelector(".color_ok")),
          t.Default.onElementCreated(G.querySelector(".color_clear"))),
        t.Default.onWidgetColorPickerCreated &&
          t.Default.onWidgetColorPickerCreated(this);
    }),
    $(V.ColorPickerTemp, V.BaseDropDownTemplate, {
      updateInputChange: function () {
        var O = this,
          B = O._view,
          A = O.$9o();
        B.querySelector(".preview").style.backgroundColor = A;
        var h = t.Default.toColorData(A);
        if (h) {
          var T =
              (4 === h.length ? h[3] / 255 : 1,
              O.$5o(h[0] / 255, h[1] / 255, h[2] / 255)),
            d = Am(B, ".satval_pointer");
          (O._h = a(360 * T.h)),
            (O._s = a(100 * T.s)),
            (O._v = a(100 * T.v)),
            (d.style.left = 127 * T.s - 3 + "px"),
            (d.style.top = 127 - 127 * T.v - 3 + "px"),
            (Am(B, ".hue_pointer").style.top = 128 - 127 * T.h + "px");
          var p = O.$2o(O._h / 360, 1, 1);
          B.querySelector(".satval").style.backgroundColor = O.$4o(
            p.r,
            p.g,
            p.b,
            !0
          );
        }
        O._master._instant && O._master.setValue(O.$9o());
      },
      $6o: function (J) {
        var q = this,
          R = q._view,
          l = q._master,
          w = q._h,
          x = q._s,
          V = q._v,
          f = q.$2o(w / 360, x / 100, V / 100),
          v = f.r,
          m = f.g,
          _ = f.b;
        J ||
          ((R.querySelector("input.color_R").value = a(255 * v)),
          (R.querySelector("input.color_G").value = a(255 * m)),
          (R.querySelector("input.color_B").value = a(255 * _)));
        var G = q.$9o();
        R.querySelector(".preview").style.backgroundColor = G;
        var L = q.$2o(w / 360, 1, 1);
        (R.querySelector(".satval").style.backgroundColor = q.$4o(
          L.r,
          L.g,
          L.b,
          !0
        )),
          !J && l._instant && l.setValue(G);
      },
      $5o: function (O, w, z) {
        var s,
          Z,
          L = Math.max(Math.max(O, w), z),
          K = Math.min(Math.min(O, w), z),
          r = L;
        if (K == L) (s = 0), (Z = 0);
        else {
          var D = L - K;
          (Z = D / L),
            (s =
              O == L
                ? (w - z) / D
                : w == L
                ? 2 + (z - O) / D
                : 4 + (O - w) / D),
            (s /= 6),
            0 > s && (s += 1),
            s > 1 && (s -= 1);
        }
        return { h: s, s: Z, v: r };
      },
      $4o: function (F, X, _, o) {
        return (
          (F = a(255 * F)),
          (X = a(255 * X)),
          (_ = a(255 * _)),
          o == z && (o = !0),
          (F = F.toString(16)),
          1 == F.length && (F = "0" + F),
          (X = X.toString(16)),
          1 == X.length && (X = "0" + X),
          (_ = _.toString(16)),
          1 == _.length && (_ = "0" + _),
          ((o ? "#" : "") + F + X + _).toUpperCase()
        );
      },
      $3o: function (t, d, C) {
        C == z && (C = null), "#" == t.substr(0, 1) && (t = t.substr(1));
        var w, J, L;
        if (3 == t.length)
          (w = t.substr(0, 1)),
            (w += w),
            (J = t.substr(1, 1)),
            (J += J),
            (L = t.substr(2, 1)),
            (L += L);
        else {
          if (6 != t.length) return C;
          (w = t.substr(0, 2)), (J = t.substr(2, 2)), (L = t.substr(4, 2));
        }
        return (
          (w = parseInt(w, 16)),
          (J = parseInt(J, 16)),
          (L = parseInt(L, 16)),
          isNaN(w) || isNaN(J) || isNaN(L)
            ? C
            : d
            ? { r: w, g: J, b: L }
            : { r: w / 255, g: J / 255, b: L / 255 }
        );
      },
      $2o: function (k, Z, G) {
        var W, J, P;
        if (0 == G) (W = 0), (J = 0), (P = 0);
        else {
          var F = Math.floor(6 * k),
            d = 6 * k - F,
            v = G * (1 - Z),
            L = G * (1 - Z * d),
            Y = G * (1 - Z * (1 - d));
          switch (F) {
            case 1:
              (W = L), (J = G), (P = v);
              break;
            case 2:
              (W = v), (J = G), (P = Y);
              break;
            case 3:
              (W = v), (J = L), (P = G);
              break;
            case 4:
              (W = Y), (J = v), (P = G);
              break;
            case 5:
              (W = G), (J = v), (P = L);
              break;
            case 6:
            case 0:
              (W = G), (J = Y), (P = v);
          }
        }
        return { r: W, g: J, b: P };
      },
      $9o: function () {
        var w = this._view,
          n = Am(w, "input.color_R").value,
          r = Am(w, "input.color_G").value,
          Z = Am(w, "input.color_B").value,
          a = Am(w, "input.color_A").value || 1;
        return "" === n || "" === r || "" === Z || "" === a
          ? z
          : 1 == a
          ? "rgb(" + n + "," + r + "," + Z + ")"
          : "rgba(" + n + "," + r + "," + Z + "," + a + ")";
      },
      getView: function () {
        return this._view;
      },
      onOpened: function (E) {
        if (E) {
          var f,
            Q = this,
            X = Q._view;
          if (
            ((X.querySelector(".preview").style.backgroundColor = E),
            (f = t.Default.toColorData(E)))
          ) {
            var R = 4 === f.length ? f[3] / 255 : 1,
              b = Q.$5o(f[0] / 255, f[1] / 255, f[2] / 255),
              q = Am(X, ".satval_pointer");
            (Am(X, "input.color_R").value = f[0]),
              (Am(X, "input.color_G").value = f[1]),
              (Am(X, "input.color_B").value = f[2]),
              (Am(X, "input.color_A").value = R.toFixed(2)),
              (Q._h = a(360 * b.h)),
              (Q._s = a(100 * b.s)),
              (Q._v = a(100 * b.v)),
              (q.style.left = 127 * b.s - 3 + "px"),
              (q.style.top = 127 - 127 * b.v - 3 + "px"),
              (Am(X, ".hue_pointer").style.top = 128 - 127 * b.h + "px"),
              Q.$6o(!0);
          }
        }
      },
      onClosed: function () {},
      getValue: function () {
        return this.$13o;
      },
      calculatePaletteWidth: function () {
        var J = this,
          R = (J._view, J._master),
          G = R.getPaletteColors();
        if (G && G.length > 0) {
          var Q = J.getWidth(),
            P = G[0].length,
            I = (Q - 5 - 5 - 5 * (P - 1)) / P;
          return I;
        }
      },
      getHeight: function () {
        var x = this,
          P = (x._view, x._master),
          z = P.getPaletteColors(),
          s = 170,
          $ = x.calculatePaletteWidth();
        return $ > 0 && (s += z.length * ($ + 5)), s;
      },
      getWidth: function () {
        return 252;
      },
    });
  var Gr = function (U) {
    (this.$8o = U), this.setUp();
  };
  $(Gr, p, {
    ms_listener: 1,
    getView: function () {
      return this.$8o._view;
    },
    setUp: function () {
      this.addListeners();
    },
    tearDown: function () {
      this.removeListeners(), this.clear();
    },
    clear: function () {
      delete this.$7o;
    },
    handle_touchstart: function (i) {
      var m = this,
        q = i.target,
        E = m.$8o,
        y = m.getView(),
        j = Am(y, ".hue_picker"),
        v = Am(y, ".satval");
      j.contains(q)
        ? ((m.$7o = 1), m.$1o(i, 1))
        : v.contains(q) && ((m.$7o = 2), m.$1o(i, 2)),
        m.$7o && n.isDoubleClick(i) && ((E.$13o = E.$9o()), E._master.close());
    },
    $1o: function (F, X) {
      n.preventDefault(F);
      var I,
        f,
        N,
        M = this,
        $ = M.$8o,
        l = M.getView(),
        Z = Am(l, ".hue_picker"),
        B = Am(l, ".satval");
      if (((F = r(F) ? cr(F) : F), 1 === X)) {
        (I = Z.getBoundingClientRect()),
          (N = F.clientY - I.top),
          (N -= 7),
          0 > N && (N = 0),
          N > 127 && (N = 127),
          (Am(l, ".hue_pointer").style.top = N + 1 + "px");
        var t = N;
        (t = a(360 - t * (360 / 127))), ($._h = t), $.$6o();
      } else if (2 === X) {
        (I = B.getBoundingClientRect()),
          (f = F.clientX - I.left - 1),
          (N = F.clientY - I.top - 1),
          0 > f && (f = 0),
          f > 127 && (f = 127),
          0 > N && (N = 0),
          N > 127 && (N = 127),
          ($._s = a((100 * f) / 127)),
          ($._v = a(100 - (100 * N) / 127));
        var z = Am(l, ".satval_pointer");
        (z.style.left = f - 3 + "px"), (z.style.top = N - 3 + "px"), $.$6o();
      }
    },
    handle_mousedown: function (d) {
      this.handle_touchstart(d);
    },
    handle_mouseup: function (J) {
      this.handle_touchend(J);
    },
    handle_touchend: function (k) {
      var h = this;
      h.clear(k);
    },
    handle_mousemove: function (e) {
      this.handle_touchmove(e);
    },
    handle_touchmove: function (Q) {
      var H = this;
      H.$7o && n.startDragging(H, Q);
    },
    handleWindowMouseUp: function (a) {
      this.handleWindowTouchEnd(a);
    },
    handleWindowTouchEnd: function (f) {
      var I = this;
      I.clear(f);
    },
    handleWindowMouseMove: function (i) {
      this.handleWindowTouchMove(i);
    },
    handleWindowTouchMove: function (K) {
      var o = this,
        E = o.$7o;
      E && o.$1o(K, E);
    },
  }),
    (V.FormPane = function (T) {
      var k = this,
        $ = (k._view = P.createView(1, k));
      T || (k._canvas = e($));
      var t = (k._contentDiv = X(z, $)),
        o = t.style;
      (o.overflow = "hidden"),
        (o.left = "0px"),
        (o.right = "0px"),
        (o.top = "0px"),
        (o.bottom = "0px"),
        (k._79O = X(z, $)),
        (k._rows = []),
        (k._itemMap = {}),
        k.iv(),
        (t.handleGroupSelectedChanged = function (K) {
          if (K.isSelected()) {
            var X = K.getGroupId();
            null != X &&
              k._rows.forEach(function (F) {
                var s = F.items;
                s &&
                  s.forEach(function (I) {
                    if (I) {
                      var C = I.element;
                      C &&
                        C !== K &&
                        C.setSelected &&
                        C.getGroupId &&
                        C.getGroupId() === X &&
                        C.setSelected(!1);
                    }
                  });
              });
          }
        }),
        new jd(k);
    }),
    $(F + "FormPane", p, {
      ms_v: 1,
      ms_fire: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      ms_value: 1,
      ms_ac: [
        "labelColor",
        "labelFont",
        "labelAlign",
        "labelVAlign",
        "vPadding",
        "hPadding",
        "labelHPadding",
        "labelVPadding",
        "hGap",
        "vGap",
        "rows",
        "rowHeight",
        "scrollBarColor",
        "scrollBarSize",
        "autoHideScrollBar",
      ],
      _29I: Ib,
      _91I: 0,
      _59I: 0,
      _labelColor: n.formPaneLabelColor,
      _labelFont: n.formPaneLabelFont,
      _labelAlign: n.formPaneLabelAlign,
      _labelVAlign: n.formPaneLabelVAlign,
      _hPadding: n.formPaneHPadding,
      _vPadding: n.formPaneVPadding,
      _labelHPadding: n.formPaneLabelHPadding,
      _labelVPadding: n.formPaneLabelVPadding,
      _hGap: n.formPaneHGap,
      _vGap: n.formPaneVGap,
      _rowHeight: n.widgetRowHeight,
      _scrollBarColor: n.scrollBarColor,
      _scrollBarSize: n.scrollBarSize,
      _autoHideScrollBar: n.autoHideScrollBar,
      getScrollWidth: function () {
        return this._91I;
      },
      getScrollHeight: function () {
        return this._59I;
      },
      onPropertyChanged: function (S) {
        var u = this,
          i = S.property;
        u.iv(), "translateX" === i ? u._42o() : "translateY" === i && u._43o();
      },
      adjustTranslateX: function (z) {
        var x = this.getWidth() - this._91I;
        return x > z && (z = x), z > 0 ? 0 : Math.round(z);
      },
      setTranslateX: function (Y) {
        var t = this;
        Y = t.adjustTranslateX(Y);
        var i = t._65O;
        (t._65O = Y), (t._contentDiv.scrollLeft = -Y), t.fp("translateX", i, Y);
      },
      adjustTranslateY: function (c) {
        var L = this.getHeight() - this._59I;
        return L > c && (c = L), c > 0 ? 0 : Math.round(c);
      },
      setTranslateY: function (_) {
        var M = this;
        _ = M.adjustTranslateY(_);
        var U = M._66O;
        (M._66O = _), (M._contentDiv.scrollTop = -_), M.fp("translateY", U, _);
      },
      setPadding: function (N) {
        this.setVPadding(N), this.setHPadding(N);
      },
      getLabelFont: function (j) {
        return j && j.font ? j.font : this._labelFont;
      },
      getLabelColor: function (k) {
        return k && k.color ? k.color : this._labelColor;
      },
      getLabelAlign: function (_) {
        return _ && _.align ? _.align : this._labelAlign;
      },
      getLabelVAlign: function (Z) {
        return Z && Z.vAlign ? Z.vAlign : this._labelVAlign;
      },
      getRowBorderColor: function (j) {
        return j ? j.borderColor : null;
      },
      getRowBackground: function (j) {
        return j ? j.background : null;
      },
      getItemBorderColor: function ($) {
        return $ ? $.borderColor : null;
      },
      getItemBackground: function (z) {
        return z ? z.background : null;
      },
      getItemById: function (E) {
        return this._itemMap[E];
      },
      getViewById: function (X) {
        var n = this.getItemById(X);
        return n ? n.element : null;
      },
      getItemView: function (l) {
        if (l) {
          var A = l.element;
          if (A) {
            if (A.tagName) return A;
            if (A.getView) return A.getView();
          }
        }
        return null;
      },
      updateItemElement: function (i, P) {
        var d = this,
          h = d.getItemById(i);
        if (h) {
          var u = d.getItemView(h);
          u && u.parentNode && u.parentNode.removeChild(u),
            (h.element = P),
            (u = d.getItemView(h)),
            u &&
              ((u.style.position = "absolute"), d._contentDiv.appendChild(u)),
            d.iv();
        }
      },
      addRow: function (V, F, K, M) {
        var U = this;
        if (V) {
          for (var a = 0; a < V.length; a++) {
            var h = V[a];
            h &&
              ((h.tagName || h.getView) && (V[a] = { element: h }),
              P.initItemElement(h),
              null != h.id && (U._itemMap[h.id] = h));
          }
          V.forEach(function (I) {
            var C = U.getItemView(I);
            C &&
              ((C.style.position = "absolute"), U._contentDiv.appendChild(C));
          });
        }
        var D = M || {};
        return (
          (D.items = V),
          (D.widths = F),
          (D.height = K),
          null == D.index ? U._rows.push(D) : U._rows.splice(D.index, 0, D),
          U.iv(),
          D
        );
      },
      removeRows: function (f) {
        if (f) {
          var O = this,
            m = [];
          f.forEach(function (r) {
            r.items &&
              r.items.forEach(function (V) {
                var S = O.getItemView(V);
                S && S.parentNode && S.parentNode.removeChild(S),
                  V && null != V.id && delete O._itemMap[V.id];
              });
          }),
            O._rows.forEach(function (Q) {
              f.indexOf(Q) < 0 && m.push(Q);
            }),
            (O._rows = m),
            O.iv();
        }
      },
      removeRow: function (w) {
        var p;
        (p = w && "object" == typeof w ? [w] : [this._rows[w]]),
          this.removeRows(p);
      },
      clear: function () {
        for (var Q = this, y = Q._view, U = this._contentDiv; U.firstChild; )
          U.removeChild(U.firstChild);
        for (; y.firstChild; ) y.removeChild(y.firstChild);
        Q._canvas && y.appendChild(Q._canvas),
          y.appendChild(U),
          y.appendChild(Q._79O),
          (Q._rows = []),
          (Q._itemMap = {}),
          Q.iv();
      },
      validateImpl: function () {
        var v,
          T,
          o,
          U,
          E,
          e,
          $ = this,
          s = $._canvas,
          M = $._rowHeight,
          Y = $.getWidth(),
          i = $.getHeight(),
          J = $._hPadding,
          p = $._vPadding,
          G = $._vGap,
          I = $.ty(),
          S = $.tx(),
          R = Y - 2 * J,
          q = i - 2 * p,
          X = $._rows,
          m = X.length,
          u = 0,
          r = q - (m - 1) * G;
        for (
          $._29I = { x: -S, y: -I, width: Y, height: i },
            s &&
              (g(s, Y, i), (e = Q(s)), B(e, 0, 0, 1), e.clearRect(0, 0, Y, i)),
            o = 0;
          m > o;
          o++
        )
          (U = X[o]),
            (E = U.height),
            null == E
              ? (r -= M)
              : b(E)
              ? ((v = E.split("+")),
                (T = parseFloat(v[0])),
                T > 1 ? (r -= T) : (u += T),
                (T = parseFloat(v[1])),
                T > 1 ? (r -= T) : (u += T))
              : E > 1
              ? (r -= E)
              : (u += E);
        0 > r ? (($._59I = i - r - p), (r = 0)) : ($._59I = i);
        var j = p + I,
          _ = Y;
        for (o = 0; m > o; o++) {
          (U = X[o]),
            (E = U.height),
            null == E
              ? (E = M)
              : b(E)
              ? ((v = E.split("+")),
                (T = parseFloat(v[0])),
                (E = T > 1 ? T : (T / u) * r),
                (T = parseFloat(v[1])),
                (E += T > 1 ? T : (T / u) * r))
              : 1 >= E && (E = (E / u) * r);
          var z = J + S;
          if (e) {
            var H = $.getRowBorderColor(U),
              N = $.getRowBackground(U);
            N && f(e, z, j, R, E, N), H && l(e, H, z, j, R, E);
          }
          var V = $.validateRow(e, Y, U.items, U.widths, z, j, R, E) - J;
          V > _ && (_ = V), (j += E + G);
        }
        e && e.restore(),
          ($._91I = _),
          $._92I(),
          $._93I(),
          $.tx($.tx()),
          $.ty($.ty());
      },
      validateRow: function (P, g, t, $, k, U, i, m) {
        if (!t) return 0;
        var z,
          W,
          Q,
          e,
          p,
          E = this,
          q = g,
          h = E._hGap,
          S = t.length,
          A = 0,
          x = i - (S - 1) * h;
        for (Q = 0; S > Q; Q++)
          (e = $[Q]),
            b(e)
              ? ((z = e.split("+")),
                (W = parseFloat(z[0])),
                W > 1 ? (x -= W) : (A += W),
                (W = parseFloat(z[1])),
                W > 1 ? (x -= W) : (A += W))
              : e > 1
              ? (x -= e)
              : (A += e);
        for (0 > x && ((q -= x), (x = 0)), Q = 0; S > Q; Q++) {
          if (
            ((p = t[Q]),
            (e = $[Q]),
            b(e)
              ? ((z = e.split("+")),
                (W = parseFloat(z[0])),
                (e = W > 1 ? W : (W / A) * x),
                (W = parseFloat(z[1])),
                (e += W > 1 ? W : (W / A) * x))
              : 1 >= e && (e = (e / A) * x),
            p)
          ) {
            if (P) {
              var L = E.getItemBorderColor(p),
                V = E.getItemBackground(p);
              V && f(P, k, U, e, m, V), L && l(P, L, k, U, e, m);
            }
            E.validateItem(P, p, k, U, e, m);
          }
          k += e + h;
        }
        return q;
      },
      validateItem: function (X, W, T, U, H, h) {
        var r,
          t = this,
          z = W.element;
        if (z && !b(z)) {
          var I = t.tx(),
            Q = t.ty();
          (T -= I), (U -= Q);
          var n = W._layoutRect;
          n && n.width === H && n.height === h && n.x === T && n.y === U
            ? z.invalidate && z.invalidate()
            : (_(z, T, U, H, h),
              (W._layoutRect = { x: T, y: U, width: H, height: h }));
        } else
          X &&
            (b(W) ? (r = W) : b(W.element) && (r = W.element),
            r &&
              (X.save(),
              X.beginPath(),
              X.rect(T, U, H, h),
              X.clip(),
              c(
                X,
                r,
                t.getLabelFont(W),
                t.getLabelColor(W),
                T + t._labelHPadding,
                U - t._labelVPadding,
                H - 2 * t._labelHPadding,
                h - 2 * t._labelVPadding,
                t.getLabelAlign(W),
                t.getLabelVAlign(W)
              ),
              X.restore()));
      },
    });
  var jd = function (D) {
    (this.f = D), this.addListeners();
  };
  $(jd, p, {
    ms_listener: 1,
    getView: function () {
      return this.f._view;
    },
    handle_mousedown: function (K) {
      q(K) && this.handle_touchstart(K);
    },
    handleWindowMouseMove: function (v) {
      this.handleWindowTouchMove(v);
    },
    handleWindowMouseUp: function (Q) {
      this.handleWindowTouchEnd(Q);
    },
    handle_touchstart: function (a) {
      var V,
        w = this,
        O = w.f,
        U = a.target;
      w.isV(a)
        ? (V = "v")
        : w.isH(a)
        ? (V = "h")
        : (U === w.getView() ||
            U === O._contentDiv ||
            O._79O.contains(U) ||
            U === O._canvas) &&
          (V = "p"),
        (w.s = V) &&
          ((w.cp = N(a)), (w.tx = O.tx()), (w.ty = O.ty()), H(a), s(w, a));
    },
    handle_mousemove: function (S) {
      var u = this,
        P = u.f;
      u.isV(S) && P._43o(), u.isH(S) && P._42o();
    },
    handleWindowTouchMove: function (T) {
      var $ = this,
        h = $.f,
        F = $.s,
        A = $.tx,
        l = $.ty,
        q = $.cp,
        S = N(T),
        n = h._29I;
      "p" === F
        ? h.setTranslate(A + S.x - q.x, l + S.y - q.y)
        : "v" === F
        ? h.ty(l + ((q.y - S.y) * h._59I) / n.height)
        : "h" === F && h.tx(A + ((q.x - S.x) * h._91I) / n.width);
    },
    handleWindowTouchEnd: function () {},
    handle_mousewheel: function (T) {
      this.h(T, T.wheelDelta / 40, T.wheelDelta !== T.wheelDeltaX);
    },
    handle_DOMMouseScroll: function (q) {
      this.h(q, -q.detail, 1);
    },
    h: function (Y, t, s) {
      var q = this.f;
      H(Y),
        P.closePopup(),
        s && q._41o()
          ? q.translate(0, 10 * t)
          : q._40o() && q.translate(10 * t, 0);
    },
    isV: function (a) {
      var T = this.f,
        v = T._29I;
      return T._41o() && v.x + v.width - T.lp(a).x < D;
    },
    isH: function (O) {
      var Y = this.f,
        E = Y._29I;
      return Y._40o() && E.y + E.height - Y.lp(O).y < D;
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
