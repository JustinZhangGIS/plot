//>>built
define("plot/geometry/Lune",["dojo/_base/declare","../constants","../plotUtils","./PlotGeometry"],function(k,l,b,m){return k([m],{constructor:function(a,b){this.type="polygon";this.plotType="lune";this.fixPointCount=3;this.setPoints(a)},generate:function(){if(!(2>this.getPointCount())){var a=this.getPoints();if(2==this.getPointCount()){var d=b.mid(a[0],a[1]),c=b.distance(a[0],d),d=b.getThirdPoint(a[0],d,l.HALF_PI,c);a.push(d)}var c=a[0],e=a[1],f=a[2],a=b.getCircleCenterOfThreePoints(c,e,f),d=b.distance(c,
a),g=b.getAzimuth(c,a),h=b.getAzimuth(e,a);b.isClockWise(c,e,f)?(c=h,e=g):(c=g,e=h);a=b.getArcPoints(a,d,c,e);a.push(a[0]);this.rings=a}}})});
//# sourceMappingURL=Lune.js.map