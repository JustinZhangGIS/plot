define([
    "dojo/_base/declare",
    "../plotUtils",
    "./AttackArrow"
], function (declare, plotUtils, AttackArrow) {
    return declare([AttackArrow], {
        constructor: function (points, wkid) {
            this.type = "polygon";
            this.plotType = "tailedattackarrow";
            this.headHeightFactor = 0.18;
            this.headWidthFactor = 0.3;
            this.neckHeightFactor = 0.85;
            this.neckWidthFactor = 0.15;
            this.tailWidthFactor = 0.1;
            this.headTailFactor = 0.8;
            this.swallowTailFactor = 1;
            this.swallowTailPnt = null;
            this.setPoints(points);
        },
        generate: function () {
            var count = this.getPointCount();
            if (count < 2) {
                return;
            }
            if (this.getPointCount() == 2) {
                this.rings = this.points;
                return;
            }
            var pnts = this.getPoints();
            var tailLeft = pnts[0];
            var tailRight = pnts[1];
            if (plotUtils.isClockWise(pnts[0], pnts[1], pnts[2])) {
                tailLeft = pnts[1];
                tailRight = pnts[0];
            }
            var midTail = plotUtils.mid(tailLeft, tailRight);
            var bonePnts = [midTail].concat(pnts.slice(2));
            var headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
            var neckLeft = headPnts[0];
            var neckRight = headPnts[4];
            var tailWidth = plotUtils.distance(tailLeft, tailRight);
            var allLen = plotUtils.getBaseLength(bonePnts);
            var len = allLen * this.tailWidthFactor * this.swallowTailFactor;
            this.swallowTailPnt = plotUtils.getThirdPoint(bonePnts[1], bonePnts[0], 0, len, true);
            var factor = tailWidth / allLen;
            var bodyPnts = this.getArrowBodyPoints(bonePnts, neckLeft, neckRight, factor);
            var count = bodyPnts.length;
            var leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
            leftPnts.push(neckLeft);
            var rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
            rightPnts.push(neckRight);

            leftPnts = plotUtils.getQBSplinePoints(leftPnts);
            rightPnts = plotUtils.getQBSplinePoints(rightPnts);
            this.rings = leftPnts.concat(headPnts, rightPnts.reverse(), [this.swallowTailPnt, leftPnts[0]]);
        }
    });
});
