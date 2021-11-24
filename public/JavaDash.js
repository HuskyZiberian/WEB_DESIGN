const DATA_COUNT = 7;
const NUMBER_CFG = {
    count: DATA_COUNT,
    min: -100,
    max: 100
};

const labels1 = [
    'jan',
    "feb",
    'mar',
    "apr",
    "may",
    'jun',
    'july',
];
const data = {
    labels: labels1,
    datasets: [{
            label: 'Dataset 1',
            data: [0, 50, 150, 100, 200, 178, 250],
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 13)",
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: [0, 100, 80, 75, 142, 150, 200],
            backgroundColor: "rgb(122, 99, 132)",
            borderColor: "rgb(122, 99, 13)",
            yAxisID: 'y1',
        }
    ]
};
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',

                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    },
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
)