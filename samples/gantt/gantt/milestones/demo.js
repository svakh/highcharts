$(function () {

    // THE CHART
    Highcharts.ganttChart('container', {
        chart: {
            marginLeft: 150,
            marginRight: 150
        },
        title: {
            text: 'Gantt Chart'
        },
        xAxis: [{
            labels: {
                format: '{value:%E}',
                style: {
                    fontSize: '15px'
                }
            },
            min: Date.UTC(2014, 10, 17),
            max: Date.UTC(2014, 10, 27),
            currentDateIndicator: true
        }, {
            tickInterval: 1000 * 60 * 60 * 24 * 7, // Week
            labels: {
                format: '{value:Week %W}',
                style: {
                    fontSize: '15px'
                }
            },
            linkedTo: 0
        }],
        yAxis: [{
            categories: ['Prototyping', 'Development', 'Testing'],
            reversed: true
        }],
        series: [{
            name: 'Project 1',
            data: [{
                start: Date.UTC(2014, 10, 18),
                end: Date.UTC(2014, 10, 25),
                taskGroup: 0,
                taskName: 'Start prototype'
            }, {
                start: Date.UTC(2014, 10, 20),
                end: Date.UTC(2014, 10, 25),
                taskGroup: 1,
                taskName: 'Develop'
            }, {
                start: Date.UTC(2014, 10, 25, 12),
                milestone: true,
                color: '#fa0',
                taskGroup: 1,
                taskName: 'Development done'
            }, {
                start: Date.UTC(2014, 10, 25, 12),
                milestone: true,
                taskName: 'Prototype done',
                taskGroup: 0
            }, {
                start: Date.UTC(2014, 10, 27),
                end: Date.UTC(2014, 10, 29),
                taskName: 'Test prototype',
                taskGroup: 0
            }, {
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
                taskName: 'Run acceptance tests',
                taskGroup: 2
            }]
        }]
    });
});