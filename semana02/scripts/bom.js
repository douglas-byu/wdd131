// Referências aos elementos do DOM
const input = document.getElementById('chapter-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('chapter-list');

// Função para adicionar capítulo
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // 6. Criar elemento li
        const li = document.createElement('li');

        // 7. Criar botão de exclusão
        const deleteButton = document.createElement('button');

        // 8. Preencher o textContent do li com o valor de entrada
        li.textContent = input.value;

        // 9. Preencher o texto do botão com ❌
        deleteButton.textContent = '❌';

        // Adicionar evento de exclusão ao botão
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        // 10. Anexar o botão de exclusão ao li
        li.appendChild(deleteButton);

        // 11. Anexar o li à lista
        list.appendChild(li);

        // Limpar o campo de entrada
        input.value = '';
        input.focus();
    }
});

// Permitir adicionar com Enter
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        button.click();
    }
});
