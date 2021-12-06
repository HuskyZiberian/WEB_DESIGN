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
        options: {},
    }

    return config;
}

for (let i = 1; i <= 3; i++) {
    new Chart(
        document.getElementById('myChart' + i),
        configuration()
    )
}

function consultaPreco() {
    let offset = 0;
    let moedas = ["bitcoin", "ethereum", "dogecoin", "shiba-inu", "tether"]
    let xhttp = new XMLHttpRequest();
    for (let i = 0; i < moedas.length; i++) {
        let elemento1 = document.getElementById(`${i+1}-preco`);
        let elemento2 = document.getElementById(`${offset + 1}-valor`);
        let elemento3 = document.getElementById(`${offset + 2}-valor`);
        xhttp.onload = function () {
            let conteudo = JSON.parse(this.response);
            elemento1.textContent = conteudo.market_data.current_price.brl.toFixed(2);
            let ultimoDia = conteudo.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2);
            elemento2.textContent = ultimoDia
            verificaPositivo(ultimoDia, elemento2)
            let semana = conteudo.market_data.price_change_percentage_7d_in_currency.brl.toFixed(2)
            elemento3.textContent = semana
            verificaPositivo(semana, elemento3)
        }
        xhttp.open("GET", `https://api.coingecko.com/api/v3/coins/${moedas[i]}`, false);
        xhttp.send();
        offset += 2;
    }
}


function verificaPositivo(num, elemento) {
    if (num > 0) {
        elemento.classList.add("positivo");
        elemento.classList.remove("negativo");
    } else {
        elemento.classList.add("negativo");
        elemento.classList.remove("positivo");
    }
}

consultaPreco();
setInterval(consultaPreco, 60 * 60 * 1000)