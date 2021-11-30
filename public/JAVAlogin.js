function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let randomDataArray = () => {
    let randomNumbers = [];
    for (let i = 0; i < 7; i++) {
        randomNumbers.push(randomNumber(0, 500));
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

function configuration() {   
    const data = {
        labels: labels,
        datasets: [{
            label: '',
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 13)",
            data: randomDataArray(),
        }]
    }
    
    const config = {
        type: 'line',
        data: data,
        options: {}
    }

    return config;
}

for(let i = 1; i <= 3; i++) {
    new Chart(
        document.getElementById('myChart' + i),
        configuration()
    )
}

setInterval(() => {
    for (let i = 1; i < 11; i++) {
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

setInterval(() => {
    for(let i = 1; i < 6; i++){
        let num = randomNumber(0,100000);
        let elemento = document.getElementById(`${i}-preco`);
        elemento.textContent = num.toFixed(2);
    }
}, 5000)