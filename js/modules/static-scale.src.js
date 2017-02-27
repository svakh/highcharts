/**
 * (c) 2017 Torstein Honsi, Lars Cabrera
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../parts/Globals.js';
import '../parts/Utilities.js';

var Chart = H.Chart,
	each = H.each,
	pick = H.pick;

Chart.prototype.adjustHeight = function () {
	each(this.axes, function (axis) {
		var chart = axis.chart,
			animate = !!chart.initiatedScale && chart.options.animation,
			staticScale = axis.options.staticScale,
			height,
			diff;
		if (
			H.isNumber(staticScale) &&
			!axis.horiz &&
			H.defined(axis.min)
		) {
			height = pick(axis.unitLength, axis.max - axis.min) * staticScale;
			diff = height - chart.plotHeight;
			if (Math.abs(diff) >= 1) {
				chart.plotHeight = height;
				chart.setSize(null, chart.chartHeight + diff, animate);
			}
		}
		
	});
	this.initiatedScale = true;
};
H.addEvent(Chart.prototype, 'render', Chart.prototype.adjustHeight);
