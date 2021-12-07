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
            borderColor: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
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
    for (let i = 1; i < 9; i++) {
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

function montaTabela() {
    let tabela = document.createElement("table");
    let cabeca = document.createElement("thead");
    let corpo = document.createElement("tbody");
    tabela.appendChild(cabeca);
    tabela.appendChild(corpo);
    criaCabecalho(cabeca);
    let moedas = ["Bitcoin", "Etherium", "Dogecoin", "Shiba", "Litecoin", "BinanceCoin", "Tron"];
    let offset = 0;
    for (moeda of moedas) {
        criaCorpo(corpo, moeda, offset);
        offset += 2;
    }
    document.getElementById("markettrand").appendChild(tabela);
}

function criaCabecalho(cabeca) {
    let linha1 = document.createElement("tr");
    let header1 = document.createElement("th")
    header1.innerHTML = "Nome";
    let header2 = document.createElement("th")
    header2.innerHTML = "Ultimo Preço";
    let header3 = document.createElement("th")
    header3.innerHTML = "24h";
    linha1.appendChild(header1);
    linha1.appendChild(header2);
    linha1.appendChild(header3);
    cabeca.appendChild(linha1);
}

function criaCorpo(corpo, moeda, offset) {
    let linha2 = document.createElement("tr");
    let body1 = document.createElement("td")
    body1.innerHTML = moeda;
    let body2 = document.createElement("td")
    body2.id = (offset + 1) + '-preco';
    body2.innerHTML = randomNumber(0, 10000).toFixed(2);
    let body3 = document.createElement("td")
    body3.id = (offset + 1) + '-preco';
    body3.innerHTML = randomNumber(0, 10000).toFixed(2);

    linha2.appendChild(body1);
    linha2.appendChild(body2);
    linha2.appendChild(body3);
    corpo.appendChild(linha2);
}

montaTabela();

function linhaprofit() {
    let criarLinha1 = document.createElement("p")
    let criarIcon1 = document.createElement("i")
    let criarLinha2 = document.createElement("p")
    let criarIcon2 = document.createElement("i")

    criarIcon1.classList.add("positivo")
    criarIcon1.classList.add("fa", "fa-arrow-circle-up")
    criarLinha1.innerHTML = randomNumber(0, 10000).toFixed(2)

    criarIcon2.classList.add("negativo")
    criarIcon2.classList.add("fa", "fa-arrow-circle-down")
    criarLinha2.innerHTML = randomNumber(0, 10000).toFixed(2);

    criarLinha1.appendChild(criarIcon1)
    criarLinha2.appendChild(criarIcon2)
    document.getElementById("profit").appendChild(criarLinha1)
    document.getElementById("profit").appendChild(criarLinha2)
}

linhaprofit();


function verificaPositivo(num, elemento) {
    if (num > 0) {
        elemento.classList.add("positivo");
        elemento.classList.remove("negativo");
    } else {
        elemento.classList.add("negativo");
        elemento.classList.remove("positivo");
    }
}

function consultaPreco() {
    let moedas = ["bitcoin", "ethereum", "dogecoin", "shiba-inu", "binancecoin", "litecoin", "uniswap", "tron"]
    let xhttp = new XMLHttpRequest();
    for (let i = 0; i < moedas.length; i++) {
        let elemento1 = document.getElementById(`${i+1}-preco`);
        let elemento2 = document.getElementById(`${i+1}-valor`);
        xhttp.onload = function () {
            if (this.response) {
                let conteudo = JSON.parse(this.response);
                elemento1.textContent = conteudo.market_data.current_price.brl.toFixed(2);
                let ultimoDia = conteudo.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2);
                elemento2.textContent = ultimoDia || 0
                verificaPositivo(ultimoDia, elemento2)
            }
        }
        xhttp.open("GET", `https://api.coingecko.com/api/v3/coins/${moedas[i]}`, false);
        xhttp.send();
    }
}

consultaPreco()
setInterval(consultaPreco, 10000)