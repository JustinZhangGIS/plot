//>>built
define("plot/PlotEdit","dojo/_base/declare dojo/_base/lang dojo/dom dojo/Evented ./constants ./plotUtils esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/graphic esri/Color esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol".split(" "),function(l,b,p,m,q,r,k,s,t,n,g,d,e){return l([m],{constructor:function(a){if(a){var c=new e(e.STYLE_SOLID,new g("#000000"),1);this.controlPointSymbol=new d(d.STYLE_SQUARE,12,c,new g("#003388"));this._map=a;this._activeControlPointGraphic=
this._controlPointGraphics=this._startPoint=this._graphic=null;this._layerMouseOverHandler=b.hitch(this,this._layerMouseOverHandler);this._layerMouseOutHandler=b.hitch(this,this._layerMouseOutHandler);this._layerMouseDownHandler=b.hitch(this,this._layerMouseDownHandler);this._layerMouseDragHandler=b.hitch(this,this._layerMouseDragHandler);this._layerMouseDragEndHandler=b.hitch(this,this._layerMouseDragEndHandler);this._controlPointLayerMouseDownHandler=b.hitch(this,this._controlPointLayerMouseDownHandler);
this._controlPointLayerMouseDragHandler=b.hitch(this,this._controlPointLayerMouseDragHandler);this._controlPointLayerMouseDragEndHandler=b.hitch(this,this._controlPointLayerMouseDragEndHandler)}},activate:function(a){a&&(a.plot&&a!=this._graphic)&&(this.deactivate(),this._graphic=a,this._initControlPoints(),this._layerMouseOver_Connect=this._graphic.getLayer().on("mouse-over",this._layerMouseOverHandler),this._layerMouseOut_Connect=this._graphic.getLayer().on("mouse-out",this._layerMouseOutHandler))},
deactivate:function(){this._graphic&&this.emit("edit-end",{graphic:this._graphic});this._graphic=null;this._clearControlPoints();this._startPoint=this._activeControlPointGraphic=null;this._layerMouseOver_Connect&&this._layerMouseOver_Connect.remove();this._layerMouseOut_Connect&&this._layerMouseOut_Connect.remove();this._layerMouseDown_Connect&&this._layerMouseDown_Connect.remove();this._layerMouseDrag_Connect&&this._layerMouseDrag_Connect.remove();this._layerMouseDragEnd_Connect&&this._layerMouseDragEnd_Connect.remove();
this._controlPointLayerMouseDown_Connect&&this._controlPointLayerMouseDown_Connect.remove();this._controlPointLayerMouseDrag_Connect&&this._controlPointLayerMouseDrag_Connect.remove();this._controlPointLayerMouseDragEnd_Connect&&this._controlPointLayerMouseDragEnd_Connect.remove()},_initControlPoints:function(){if(this._map){this._controlPointGraphics=[];var a=this._getControlPoints();if(a&&!(0>=a.length)){for(var c=0;c<a.length;c++){var b=new k(a[c][0],a[c][1]);b.spatialReference=this._map.spatialReference;
b=new n(b,this.controlPointSymbol);this._controlPointGraphics.push(b);this._map.graphics.add(b)}this._controlPointLayerMouseDown_Connect=this._map.graphics.on("mouse-down",this._controlPointLayerMouseDownHandler)}}},_clearControlPoints:function(){if(this._controlPointGraphics&&0<this._controlPointGraphics.length){for(var a=0;a<this._controlPointGraphics.length;a++)this._map.graphics.remove(this._controlPointGraphics[a]);this._controlPointGraphics=null}},_controlPointLayerMouseDownHandler:function(a){this._controlPointGraphics&&
0<=this._controlPointGraphics.indexOf(a.graphic)&&(this._activeControlPointGraphic=a.graphic,this._map.disablePan(),this._controlPointLayerMouseDrag_Connect=this._map.on("mouse-drag",this._controlPointLayerMouseDragHandler),this._controlPointLayerMouseDragEnd_Connect=this._map.on("mouse-drag-end",this._controlPointLayerMouseDragEndHandler))},_controlPointLayerMouseDragHandler:function(a){if(this._activeControlPointGraphic){this._activeControlPointGraphic.setGeometry(a.mapPoint);var b=this._controlPointGraphics.indexOf(this._activeControlPointGraphic);
this._graphic.plot.updatePoint([a.mapPoint.x,a.mapPoint.y],b);this._graphic.setGeometry(this._plot.toGeometry())}},_controlPointLayerMouseDragEndHandler:function(a){this._activeControlPointGraphic=null;this._map.enablePan();this._controlPointLayerMouseDrag_Connect.remove();this._controlPointLayerMouseDragEnd_Connect.remove()},_layerMouseOverHandler:function(a){this._graphic&&this._graphic==a.graphic&&(this._map.setMapCursor("move"),this._layerMouseDown_Connect&&this._layerMouseDown_Connect.remove(),
this._layerMouseDown_Connect=this._graphic.getLayer().on("mouse-down",this._layerMouseDownHandler))},_layerMouseOutHandler:function(a){this._map.setMapCursor("default");this._layerMouseDown_Connect&&this._layerMouseDown_Connect.remove()},_layerMouseDownHandler:function(a){this._startPoint=a.mapPoint;this._map.disablePan();this._layerMouseDrag_Connect=this._map.on("mouse-drag",this._layerMouseDragHandler);this._layerMouseDragEnd_Connect=this._map.on("mouse-drag-end",this._layerMouseDragEndHandler)},
_layerMouseDragHandler:function(a){if(!this._activeControlPointGraphic){for(var b=a.mapPoint.x-this._startPoint.x,g=a.mapPoint.y-this._startPoint.y,d=[],h=0;h<this._controlPointGraphics.length;h++){var f=this._controlPointGraphics[h].geometry,f=[f.x+b,f.y+g];this._startPoint=a.mapPoint;var e=new k(f);e.spatialReference=this._map.spatialReference;this._controlPointGraphics[h].setGeometry(e);d.push(f)}this._graphic.plot.setPoints(d);this._graphic.setGeometry(this._plot.toGeometry())}},_layerMouseDragEndHandler:function(a){this._map.enablePan();
this._layerMouseDown_Connect.remove();this._layerMouseDrag_Connect.remove();this._layerMouseDragEnd_Connect.remove()},_getControlPoints:function(){return!this._graphic?[]:this._graphic.plot.getPoints()}})});
//# sourceMappingURL=PlotEdit.js.map