!function($,l){"use strict";var S="ht",u=S+".graph.",n=$[S],Y=n.graph,e=n.Default,E=n.Color,P=null,i="px",K=e.getInternal(),F=K.getPinchDist,X=e.preventDefault,G=e.getTouchCount,z=e.startDragging;K.addMethod(e,{overviewBackground:E.widgetBackground,overviewMaskBackground:E.transparent,overviewContentBorderColor:E.widgetBorder,overviewContentBackground:E.background},!0),Y.Overview=function(m){var k=this,P=k._view=K.createView(1,k);k._canvas=K.createCanvas(P),P.style.background=e.overviewBackground,P.appendChild(k._mask=K.createDiv()),k.setGraphView(m),k.addListeners()},e.def(u+"Overview",l,{ms_v:1,ms_fire:1,ms_listener:1,ms_ac:["maskBackground","contentBorderColor","contentBackground","autoUpdate","fixToRect"],_autoUpdate:!0,_fixToRect:!1,_rate:1,_scrollRect:{x:0,y:0,width:0,height:0},_maskBackground:e.overviewMaskBackground,_contentBorderColor:e.overviewContentBorderColor,_contentBackground:e.overviewContentBackground,getGraphView:function(){return this.gv},setGraphView:function(u){var h=this;if(h.gv!==u){var Q=h.gv;h.gv=u,Q&&(Q.removeViewListener(h.handleGraphViewChanged,h),Q.ump(h.handleGraphViewPropertyChanged,h)),u&&(u.addViewListener(h.handleGraphViewChanged,h),u.mp(h.handleGraphViewPropertyChanged,h)),h.fp("graphView",Q,u),h.redraw()}},getCanvas:function(){return this._canvas},getMask:function(){return this._mask},dispose:function(){this.setGraphView(null)},onPropertyChanged:function(){this.redraw()},handleGraphViewChanged:function(x){this._autoUpdate&&"validate"===x.kind&&this.redraw()},handleGraphViewPropertyChanged:function(f){("canvasBackground"===f.property||this.getFixToRect()&&("zoom"===f.property||"translateX"===f.property||"translateY"===f.property))&&this.redraw()},redraw:function(){var d=this;d._redraw||(d._redraw=1,d.iv(50))},validateImpl:function(){var Z=this,V=Z.gv,t=Z._canvas,J=Z.getWidth(),z=Z.getHeight(),W=Z._redraw,R=e.devicePixelRatio;if(V){var u=Z._mask,m=u.style,j=V.getViewRect(),C=this.getFixToRect(),y=C?"boolean"==typeof C?V.getContentRect():C:V.getScrollRect(),N=y.x,d=y.y,b=y.width,g=y.height,M=Z._rate=Math.max(b/J,g/z),h=Z._x=(J-b/M)/2,L=Z._y=(z-g/M)/2;if(0!==j.width&&0!==j.height||Z.hasRetry||(e.callLater(Z.iv,Z,P),Z.hasRetry=!0),(J!==t.clientWidth||z!==t.clientHeight)&&(K.setCanvas(t,J,z),W=1),K.isSameRect(y,Z._scrollRect)||(Z._scrollRect=y,W=1),W){var _=K.initContext(t),p=V.getDataModel(),q=p.getBackground()||Z._contentBackground,D=Z._contentBorderColor;_.clearRect(0,0,J*R,z*R);var Y=p.getBackground()&&p.a("width")>0&&p.a("height")>0;q&&!Y&&K.fillRect(_,h*R,L*R,b/M*R,g/M*R,q),K.translateAndScale(_,-N/M+h,-d/M+L,1/M),V._42(_),_.restore(),D&&K.drawBorder(_,D,h*R,L*R,b/M*R,g/M*R)}m.background=Z._maskBackground,m.left=h+(j.x-N)/M+i,m.top=L+(j.y-d)/M+i,m.width=j.width/M+i,m.height=j.height/M+i,Z._redraw=null}else if(W){var _=K.initContext(t);_.clearRect(0,0,J*R,z*R),_.restore(),Z._redraw=null}},center:function(R){var r=this,W=r.gv;if(W){var Y=W._zoom,t=W._29I,a=r._rate,k=r._scrollRect,x=e.getLogicalPoint(R,r._canvas),b=k.x+(x.x-r._x)*a,$=k.y+(x.y-r._y)*a;W.setTranslate((t.width/2-b)*Y,(t.height/2-$)*Y)}},handle_mousedown:function(r){this.handle_touchstart(r)},handleWindowMouseUp:function(S){this.handleWindowTouchEnd(S)},handleWindowMouseMove:function(r){this.handleWindowTouchMove(r)},handle_mousewheel:function(n){this.handleScroll(n,n.wheelDelta)},handle_DOMMouseScroll:function(U){2===U.axis&&this.handleScroll(U,-U.detail)},handleScroll:function(s,c){if(X(s),this.gv){var S=this.gv;c>0?S.scrollZoomIn():0>c&&S.scrollZoomOut()}},handle_touchstart:function(m){if(X(m),this.gv&&e.isLeftButton(m)){var c=this,M=c.gv,$=G(m);1===$?e.isDoubleClick(m)&&M.isResettable()?M.reset():(c.center(m),z(c,m)):2===$&&(c._dist=F(m),z(c,m))}},handleWindowTouchEnd:function(){delete this._dist},handleWindowTouchMove:function(z){if(this.gv){var g=this,d=g._dist,N=G(z);1===N?g.center(z):2===N&&d!=P&&g.gv.handlePinch(P,F(z),d)}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);