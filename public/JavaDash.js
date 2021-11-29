function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let randomDataArray = () => {
    let randomNumbers = [];
    for(let i = 0; i<8; i++) {
        randomNumbers.push(randomNumber(0,500));
    }
    return randomNumbers;
};

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
            data: randomDataArray(),
            backgroundColor: "rgb(230, 124, 27)",
            borderColor: "rgb(230, 124, 27)",
            yAxisID: 'y',
        },
        {
            label: 'Etherium',
            data: randomDataArray(),
            backgroundColor: "rgb(3, 106, 197)",
            borderColor: "rgb(3, 106, 197)",
            yAxisID: 'y',
        },
        {
            label: 'Dogecoin',
            data: randomDataArray(),
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