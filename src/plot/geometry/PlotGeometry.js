define([
    "dojo/_base/declare"
], function (declare) {
    return declare(null, {
        constructor: function (points) {
            this.type = null;//�㡢�ߡ���
            this.plotType = null;
            this.setPoints(points);
        },
        setPoints: function (value) {
            this.points = value ? value : [];
            if (this.points.length >= 1) {
                this.generate();
            }
        },
        getPoints: function () {
            return this.points.slice(0);
        },
        getPointCount: function () {
            return this.points.length;
        },
        updatePoint: function (point, index) {
            if (index >= 0 && index < this.points.length) {
                this.points[index] = point;
                this.generate();
            }
        },
        generate: function () {
        },
        toJson: function () {
            return { "plotType": this.plotType, "points": this.points };
        }
    });
});

