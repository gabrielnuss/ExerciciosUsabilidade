function addItem() {
    const inputItem = document.getElementById('inputItem');
    const NomeItem = inputItem.value.trim();

    if (NomeItem === '') {
        alert('Por favor, digite um item.');
        return;
    }

    const lista = document.getElementById('lista');
    const itemLista = document.createElement('li');
    itemLista.innerHTML = `
        ${NomeItem}
        <button class="botaoRemover">Remover</button>
    `;
    lista.appendChild(itemLista);
    inputItem.value = '';
    
    const botaoRemover = itemLista.querySelector('.botaoRemover');
    botaoRemover.addEventListener('click', () => {
        lista.removeChild(itemLista);
    });
}
    const botaoAdicionar = document.getElementById('botaoAdicionar');
    botaoAdicionar.addEventListener('click', addItem);