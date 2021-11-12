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

const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 13)",
      data: [0, 10, 25, 17, 13, 30, 45],
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {}
}

const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config
)
const myChart2= new Chart(
    document.getElementById('myChart2'),
    config
)
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
)