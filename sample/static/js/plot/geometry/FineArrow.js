define([
    "dojo/_base/declare",
    "../constants",
    "../plotTypes",
    "../plotUtils",
    "./Geometry"
], function (declare, constants, plotTypes, plotUtils, Geometry) {
    return declare([Geometry], {
        constructor: function (points) {
            this.type = plotTypes.FINE_ARROW;
            this.geometryType = "polygon";
            this.tailWidthFactor = 0.15;
            this.neckWidthFactor = 0.2;
            this.headWidthFactor = 0.25;
            this.headAngle = Math.PI / 8.5;
            this.neckAngle = Math.PI / 13;
            this.fixPointCount = 2;
            this.setPoints(points);
        },
        generate: function () {
            var count = this.getPointCount();
            if (count < 2) {
                return;
            }
            var pnts = this.getPoints();
            var pnt1 = pnts[0];
            var pnt2 = pnts[1];
            var len = plotUtils.getBaseLength(pnts);
            var tailWidth = len * this.tailWidthFactor;
            var neckWidth = len * this.neckWidthFactor;
            var headWidth = len * this.headWidthFactor;
            var tailLeft = plotUtils.getThirdPoint(pnt2, pnt1, constants.HALF_PI, tailWidth, true);
            var tailRight = plotUtils.getThirdPoint(pnt2, pnt1, constants.HALF_PI, tailWidth, false);
            var headLeft = plotUtils.getThirdPoint(pnt1, pnt2, this.headAngle, headWidth, false);
            var headRight = plotUtils.getThirdPoint(pnt1, pnt2, this.headAngle, headWidth, true);
            var neckLeft = plotUtils.getThirdPoint(pnt1, pnt2, this.neckAngle, neckWidth, false);
            var neckRight = plotUtils.getThirdPoint(pnt1, pnt2, this.neckAngle, neckWidth, true);
            var pList = [tailLeft, neckLeft, headLeft, pnt2, headRight, neckRight, tailRight];
            this.paths = pList;
        }
    });
});