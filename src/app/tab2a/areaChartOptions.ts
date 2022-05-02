import { Color, color, ColorAxis, Options } from 'highcharts'
import { BudgetItem } from 'src/shared/models/budget-item-model';

export const areaChartOptions: Options = {
    chart: {
        backgroundColor: '#0D1113',
        styledMode: false
    },
    plotOptions: {
        series: {
            
            marker: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    yAxis: {
        visible: false
    },
    xAxis: {
        visible: true,
        categories: [
            'Gifts',
            'Pocket Money',
            'Payment',
            'Freelance',
            'Payment 2',
        ],
        
    },
    defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [
                {
                tagName: 'stop',
                offset: 0
            },
            {
            tagName:'stop',
            offset: 1,
            }
        ]
        }
    } as any,
    series: [
        {
        name: 'Amount (EU)',
        color: '#78E6D4',
        fillColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
                [0, 'rgba(120, 230, 212, .2)'],
                [1, 'rgba(13,17,19,.1)'],
            ]
        },

        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
            [100, false],
            [55, false],
            [150, false],
            [80, false],
            [130, false],
        ],
    },
],
};