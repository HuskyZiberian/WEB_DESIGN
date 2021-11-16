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
      data: [32,15,12,8,15,23,26],
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
      data: [0, 5, 20, 8, 15, 25, 45],
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
      data: [0, 8, 15, 7, 25, 17, 28],
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
const myChart2= new Chart(
    document.getElementById('myChart2'),
    config2
)
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
)
