function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let randomDataArray = () => {
    let randomNumbers = [];
    for (let i = 0; i < 8; i++) {
        randomNumbers.push(randomNumber(0, 500));
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

function configuration() {
    let moedas = ["Bitcoin", "Etherium", "Dogecoin"];
    let dataset = [];
    for (moeda of moedas) {
        dataset.push({
            label: moeda,
            data: randomDataArray(),
            backgroundColor: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
            borderColor:  `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
            yAxisID: 'y',
        });
    }
    const data = {
        labels: labels1,
        datasets: dataset
    }

    return {
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
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    configuration()
)

setInterval(() => {
    for (let i = 1; i < 8; i++) {
        let num = randomNumber(-10, 10);
        let elemento = document.getElementById(`${i}-valor`);
        elemento.textContent = num.toFixed(2);
        if (num > 0) {
            elemento.classList.add("positivo");
            elemento.classList.remove("negativo");
        } else {
            elemento.classList.add("negativo");
            elemento.classList.remove("positivo");
        }
    }
}, 5000)
 /*java teste*/