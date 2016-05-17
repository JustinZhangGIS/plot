define([
    "dojo/_base/declare",
    "../constants",
    "../plotTypes",
    "../plotUtils",
    "./AttackArrow"
], function (declare, constants, plotTypes, plotUtils, AttackArrow) {
    return declare([AttackArrow], {
        constructor: function (points) {
            this.type = plotTypes.SQUAD_COMBAT;
            this.headHeightFactor = 0.18;
            this.headWidthFactor = 0.3;
            this.neckHeightFactor = 0.85;
            this.neckWidthFactor = 0.15;
            this.tailWidthFactor = 0.1;
            this.setPoints(points);
        },
        generate: function () {
            var count = this.getPointCount();
            if (count < 2) {
                return;
            }
            var pnts = this.getPoints();
            var tailPnts = this.getTailPoints(pnts);
            var headPnts = this.getArrowHeadPoints(pnts, tailPnts[0], tailPnts[1]);
            var neckLeft = headPnts[0];
            var neckRight = headPnts[4];
            var bodyPnts = this.getArrowBodyPoints(pnts, neckLeft, neckRight, this.tailWidthFactor);
            var count = bodyPnts.length;
            var leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, count / 2));
            leftPnts.push(neckLeft);
            var rightPnts = [tailPnts[1]].concat(bodyPnts.slice(count / 2, count));
            rightPnts.push(neckRight);

            leftPnts = plotUtils.getQBSplinePoints(leftPnts);
            rightPnts = plotUtils.getQBSplinePoints(rightPnts);

            this.setCoordinates([leftPnts.concat(headPnts, rightPnts.reverse())]);
        },
        getTailPoints : function (points) {
            var allLen = plotUtils.getBaseLength(points);
            var tailWidth = allLen * this.tailWidthFactor;
            var tailLeft = plotUtils.getThirdPoint(points[1], points[0], constants.HALF_PI, tailWidth, false);
            var tailRight = plotUtils.getThirdPoint(points[1], points[0], constants.HALF_PI, tailWidth, true);
            return [tailLeft, tailRight];
        }
    });
});
