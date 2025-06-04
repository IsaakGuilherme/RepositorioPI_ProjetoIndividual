// graficoRevelacoes.js
function plotarGraficoRevelacoes(dados) {
    const labels = dados.map(r => r.jogador);
    const votos = dados.map(r => r.totalVotos);

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Votos por jogador revelado',
            data: votos,
            backgroundColor: ['#1e90ff', '#ff6347', '#32cd32', '#ffa500'],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(document.getElementById('graficoRevelacoes'), config);
}