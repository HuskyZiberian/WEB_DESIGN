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
      label: 'My First dataset',
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 13)",
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {}
}

const myChart = new Chart(
    document.getElementById('myChart'),
    config
)