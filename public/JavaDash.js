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
    'ago',
];
const data = {
    labels: labels1,
    datasets: [{
            label: 'Bitcoin',
            data: [77,94,137,106,227,49,195,213],
            backgroundColor: "rgb(230, 124, 27)",
            borderColor: "rgb(230, 124, 27)",
            yAxisID: 'y',
        },
        {
            label: 'Etherium',
            data: [266,207,173,192,245,122,70,126],
            backgroundColor: "rgb(3, 106, 197)",
            borderColor: "rgb(3, 106, 197)",
            yAxisID: 'y',
        },
        {
            label: 'Dogecoin',
            data: [25,161,114,180,79,142,197,184],
            backgroundColor: "rgb(252, 230, 58)",
            borderColor: "rgb(252, 230, 58)",
            yAxisID: 'y',
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
                text: 'Overview'
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