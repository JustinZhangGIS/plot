//>>built
define("plot/geometry/Sector",["dojo/_base/declare","../plotUtils","./PlotGeometry"],function(f,c,g){return f([g],{constructor:function(a){this.type="polygon";this.plotType="sector";this.fixPointCount=3;this.setPoints(a)},generate:function(){if(!(2>this.getPointCount()))if(2==this.getPointCount())this.rings=this.points;else{var a=this.getPoints(),b=a[0],d=a[1],e=a[2],a=c.distance(d,b),d=c.getAzimuth(d,b),e=c.getAzimuth(e,b),a=c.getArcPoints(b,a,d,e);a.push(b,a[0]);this.rings=a}}})});
//# sourceMappingURL=Sector.js.map