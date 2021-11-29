function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let randomDataArray = () => {
    let randomNumbers = [];
    for(let i = 0; i<7; i++) {
        randomNumbers.push(randomNumber(0,500));
    }
    return randomNumbers;
};

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
const labels = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
]

const data1 = {
    labels: labels,
    datasets: [{
        label: '',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 13)",
        data: randomDataArray(),
    }]
}

const config1 = {
    type: 'line',
    data: data1,
    options: {}
}

const data2 = {
    labels: labels,
    datasets: [{
        label: '',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 13)",
        data: randomDataArray(),
    }]
}

const config2 = {
    type: 'line',
    data: data2,
    options: {}
}

const data3 = {
    labels: labels,
    datasets: [{
        label: '',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 13)",
        data: randomDataArray(),
    }]
}

const config3 = {
    type: 'line',
    data: data3,
    options: {}
}

const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
)
const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
)
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
)

