function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let randomDataArray = () => {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
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
    '700',
    '800',
    '900',
]

function configuration() {
    const data = {
        labels: labels,
        datasets: [{
            label: '',
            backgroundColor: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
            borderColor: `rgb(${ randomNumber(0, 255)},${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
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

for (let i = 1; i <= 3; i++) {
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

function consultaPreco() {
    let moedas = ["bitcoin", "ethereum", "dogecoin", "shiba-inu", "tether"]
    let xhttp = new XMLHttpRequest();
    for (let i = 0; i < moedas.length; i++) {
        let elemento = document.getElementById(`${i+1}-preco`);
        xhttp.onload = function () {
            let conteudo = JSON.parse(this.response);
            elemento.textContent = conteudo.market_data.current_price.brl.toFixed(2);
        }
        xhttp.open("GET", `https://api.coingecko.com/api/v3/coins/${moedas[i]}`, false);
        xhttp.send();
    }
}

consultaPreco();
setInterval(consultaPreco, 60 * 60 * 1000)