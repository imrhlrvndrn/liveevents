import React from 'react';
import Chart from 'react-apexcharts';

// Components
import BasicAnalytics from './BasicAnlaytics/BasicAnalytics';

// Scss
import './analytics.scss';

const Analytics = () => {
    const array = [
        {
            subtleTitle: 'attendees',
            mainTitle: 55,
            annotation: '',
            percentageTag: 35,
        },
        {
            subtleTitle: 'attendees',
            mainTitle: 55,
            annotation: '',
            percentageTag: 35,
        },
        {
            subtleTitle: 'total revenue',
            mainTitle: 55,
            annotation: '$',
            percentageTag: 35,
        },
    ];

    const generateDayWiseTimeSeries = (baseval, count, yrange) => {
        let i = 0;
        let series = [];
        while (i < count) {
            let x = baseval;
            let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    };

    const data = generateDayWiseTimeSeries(new Date('22 Apr 2017').getTime(), 115, {
        min: 30,
        max: 90,
    });

    const chartOptions = {
        chart: {
            id: 'chart2',
            type: 'area',
            height: 230,
            foreColor: '#ccc',
            toolbar: {
                autoSelected: 'pan',
                show: false,
            },
        },
        colors: ['#36ebcf'],
        stroke: {
            width: 2,
        },
        grid: {
            borderColor: '#555',
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0,
            },
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: 'dark',
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0,
            tickAmount: 4,
        },
    };

    const series = [
        {
            data: data,
        },
    ];

    return (
        <div className='analytics'>
            <h2>Analytics</h2>
            <BasicAnalytics data={array} />

            <Chart
                style={{ margin: '40px 0' }}
                options={chartOptions}
                series={series}
                type='area'
                width='100%'
                height='400px'
            />
        </div>
    );
};

export default Analytics;
