define([
    "dojo/_base/declare"
], function (declare) {
    return declare(null, {
        constructor: function (points) {
            this.setPoints(points);
           //declare.safeMixin(this, args);
        },
        isPlot: function () {
            return true;
        },
        
        setPoints: function (value) {
            this.points = value ? value : [];
            if (this.points.length >= 1)
                this.generate();
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
        
        updateLastPoint: function (point) {
            this.updatePoint(point, this.points.length - 1);
        },
        
        generate: function () {
        },
        
        finishDrawing: function () {

        }
    });
});

