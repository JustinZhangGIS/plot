//>>built
define("plot/geometry/DoubleArrow",["dojo/_base/declare","../constants","../plotUtils","./PlotGeometry"],function(m,k,f,p){return m([p],{constructor:function(a,d){this.type="polygon";this.plotType="doublearrow";this.headHeightFactor=0.25;this.headWidthFactor=0.3;this.neckHeightFactor=0.85;this.neckWidthFactor=0.15;this.tempPoint4=this.connPoint=null;this.fixPointCount=4;this.setPoints(a)},generate:function(){var a=this.getPointCount();if(!(2>a))if(2==a)this.rings=this.points;else{var d=this.points[0],
c=this.points[1],b=this.points[2],a=this.getPointCount();this.tempPoint4=3==a?this.getTempPoint4(d,c,b):this.points[3];this.connPoint=3==a||4==a?f.mid(d,c):this.points[4];var e;f.isClockWise(d,c,b)?(a=this.getArrowPoints(d,this.connPoint,this.tempPoint4,!1),e=this.getArrowPoints(this.connPoint,c,b,!0)):(a=this.getArrowPoints(c,this.connPoint,b,!1),e=this.getArrowPoints(this.connPoint,d,this.tempPoint4,!0));var h=a.length,g=(h-5)/2,c=a.slice(0,g),d=a.slice(g,g+5),a=a.slice(g+5,h),b=e.slice(0,g),l=
e.slice(g,g+5);e=e.slice(g+5,h);b=f.getBezierPoints(b);c=f.getBezierPoints(e.concat(c.slice(1)));a=f.getBezierPoints(a);d=b.concat(l,c,d,a);this.rings=d.concat([d[0]])}},finishDrawing:function(){3==this.getPointCount()&&null!=this.tempPoint4&&this.points.push(this.tempPoint4);null!=this.connPoint&&this.points.push(this.connPoint)},getArrowPoints:function(a,d,c,b){var e=f.mid(a,d),h=f.distance(e,c),g=f.getThirdPoint(c,e,0,0.3*h,!0),l=f.getThirdPoint(c,e,0,0.5*h,!0),g=f.getThirdPoint(e,g,k.HALF_PI,
h/5,b),l=f.getThirdPoint(e,l,k.HALF_PI,h/4,b),h=[e,g,l,c];c=this.getArrowHeadPoints(h,this.headHeightFactor,this.headWidthFactor,this.neckHeightFactor,this.neckWidthFactor);b=c[0];e=c[4];g=f.distance(a,d)/f.getBaseLength(h)/2;g=this.getArrowBodyPoints(h,b,e,g);l=g.length;h=g.slice(0,l/2);g=g.slice(l/2,l);h.push(b);g.push(e);h=h.reverse();h.push(d);g=g.reverse();g.push(a);return h.reverse().concat(c,g)},getArrowHeadPoints:function(a,d,c){var b=f.getBaseLength(a)*this.headHeightFactor,e=a[a.length-
1];f.distance(d,c);c=b*this.headWidthFactor;d=b*this.neckWidthFactor;var h=b*this.neckHeightFactor,b=f.getThirdPoint(a[a.length-2],e,0,b,!0),h=f.getThirdPoint(a[a.length-2],e,0,h,!0);a=f.getThirdPoint(e,b,k.HALF_PI,c,!1);c=f.getThirdPoint(e,b,k.HALF_PI,c,!0);b=f.getThirdPoint(e,h,k.HALF_PI,d,!1);d=f.getThirdPoint(e,h,k.HALF_PI,d,!0);return[b,a,e,c,d]},getArrowBodyPoints:function(a,d,c,b){var e=f.wholeDistance(a);b*=f.getBaseLength(a);d=f.distance(d,c);d=(b-d)/2;c=0;for(var h=[],g=[],l=1;l<a.length-
1;l++){var k=f.getAngleOfThreePoints(a[l-1],a[l],a[l+1])/2;c+=f.distance(a[l-1],a[l]);var n=(b/2-c/e*d)/Math.sin(k),m=f.getThirdPoint(a[l-1],a[l],Math.PI-k,n,!0),k=f.getThirdPoint(a[l-1],a[l],k,n,!1);h.push(m);g.push(k)}return h.concat(g)},getTempPoint4:function(a,d,c){d=f.mid(a,d);var b=f.distance(d,c),e=f.getAngleOfThreePoints(a,d,c);e<k.HALF_PI?(c=b*Math.sin(e),b*=Math.cos(e),a=f.getThirdPoint(a,d,k.HALF_PI,c,!1),a=f.getThirdPoint(d,a,k.HALF_PI,b,!0)):e>=k.HALF_PI&&e<Math.PI?(c=b*Math.sin(Math.PI-
e),b*=Math.cos(Math.PI-e),a=f.getThirdPoint(a,d,k.HALF_PI,c,!1),a=f.getThirdPoint(d,a,k.HALF_PI,b,!1)):e>=Math.PI&&e<1.5*Math.PI?(c=b*Math.sin(e-Math.PI),b*=Math.cos(e-Math.PI),a=f.getThirdPoint(a,d,k.HALF_PI,c,!0),a=f.getThirdPoint(d,a,k.HALF_PI,b,!0)):(c=b*Math.sin(2*Math.PI-e),b*=Math.cos(2*Math.PI-e),a=f.getThirdPoint(a,d,k.HALF_PI,c,!0),a=f.getThirdPoint(d,a,k.HALF_PI,b,!1));return a}})});
//# sourceMappingURL=DoubleArrow.js.map