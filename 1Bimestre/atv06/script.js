const inputTarefa = document.querySelector('#nova-tarefa');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listaTarefas = document.querySelector('#lista-tarefas');

btnAdicionar.addEventListener('click', () => {
    const texto = inputTarefa.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.className = 'checkbox-container';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check-concluir';
        
        span.appendChild(checkbox);

        const textoNode = document.createTextNode(texto);

        li.appendChild(span);
        li.appendChild(textoNode);
        listaTarefas.appendChild(li);

        inputTarefa.value = '';
        inputTarefa.focus();
    }
});

listaTarefas.addEventListener('click', (event) => {
    const alvo = event.target;

    if (alvo.classList.contains('check-concluir')) {
        const liPai = alvo.closest('li');
        liPai.classList.toggle('tarefa-concluida');
    } else {
        const itemParaRemover = alvo.closest('li');
        if (itemParaRemover) {
            itemParaRemover.remove();
        }
    }
});

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});