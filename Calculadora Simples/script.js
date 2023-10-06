const display = document.getElementById('display');
const botoes = document.querySelectorAll('button[data-value]');
const botaoLimpar = document.getElementById('limpar');
const botaoCalcular = document.getElementById('calcular');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            display.value += botao.dataset.value;
        });
    });

    botaoLimpar.addEventListener('click', () => {
        display.value = '';
    });

    botaoCalcular.addEventListener('click', () => {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Erro';
        }
    });