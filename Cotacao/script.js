async function convertCurrency() {
    const usdValue = document.getElementById('usdValue').value;
    if (!usdValue) {
        alert('Por favor, insira um valor em dólares.');
        return;
        }
    const apiKey = '7781946cb160cb7273787f05';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    //para obeter a apikey você deve se registrar no site https://www.exchangerate-api.com/ criar uma conta.
    //e substitui e substituir a const apiKey pela sua chave.

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.result === 'success') {
            const rate = data.conversion_rates.BRL;
            const brlValue = (usdValue * rate).toFixed(2);
            document.getElementById('result').innerText = `R$ ${brlValue}`;
            } else {
                alert('Erro ao obter a cotação. Tente novamente mais tarde.');
            }
        } catch (error) {
            alert('Erro ao conectar à API de cotação. Tente novamente mais tarde.');
        }
}

document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });