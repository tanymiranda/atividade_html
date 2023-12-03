function add(event) {
    event.preventDefault();

    // Obter valores dos campos do formulário
    const descricao = document.getElementById('descricao').value;
    const responsavel = document.getElementById('responsavel').value;

    // Adicionar nova linha à tabela com os valores do usuário
    const table = document.getElementById('lista-de-tarefas');
    const newRow = table.insertRow(-1);

    // Coluna de Descrição da Tarefa
    const cellDescricao = newRow.insertCell(0);
    cellDescricao.textContent = descricao;

    // Coluna de Status da Tarefa
    const cellStatus = newRow.insertCell(1);
    const selectStatus = document.getElementById('statusSelect').cloneNode(true);
    selectStatus.style.display = 'inline'; // Exibir o <select> na linha
    cellStatus.appendChild(selectStatus);    

    // Coluna de Responsável pela Tarefa
    const cellResponsavel = newRow.insertCell(2);
    cellResponsavel.textContent = responsavel;

    // Botão de Ação (Editar)
    const cellAcao = newRow.insertCell(3);
    const btnAcao = document.createElement('button');
    btnAcao.className = 'brnAcao';
    btnAcao.innerHTML = '<i class="fa fa-pencil"></i>';
    btnAcao.addEventListener('click', function () {
        // Criar formulário temporário para edição
        const formEdicao = document.createElement('form');
         // Adicionar campo de edição para Descrição
         const inputEdicaoDescricao = document.createElement('input');
         inputEdicaoDescricao.type = 'text';
         inputEdicaoDescricao.value = cellDescricao.textContent;
         formEdicao.appendChild(inputEdicaoDescricao);

        // Adicionar campo de edição para Responsável
        const inputEdicaoResponsavel = document.createElement('input');
        inputEdicaoResponsavel.type = 'text';
        inputEdicaoResponsavel.value = cellResponsavel.textContent;
        formEdicao.appendChild(inputEdicaoResponsavel);

        // Adicionar botão de confirmação
        const btnConfirmar = document.createElement('button');
        btnConfirmar.textContent = 'Confirmar';
        btnConfirmar.addEventListener('click', function () {
            // Atualizar os valores da linha com os valores editados
            cellDescricao.textContent = inputEdicaoDescricao.value;
            cellResponsavel.textContent = inputEdicaoResponsavel.value;
            // Remover o formulário de edição
            formEdicao.remove();
        });
        formEdicao.appendChild(btnConfirmar);

        // Adicionar formulário de edição à célula
        cellAcao.appendChild(formEdicao);
    });
    cellAcao.appendChild(btnAcao);
    const btnEditar = document.getElementById('btnEditar');
    btnEditar.style.display = 'none';

     // Botão de Exclusão
     const btnExcluir = document.createElement('button');
     btnExcluir.className = 'brnAcao';
     btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
     btnExcluir.addEventListener('click', function () {
         // Lógica de exclusão
         table.deleteRow(newRow.rowIndex);
         // 
     });
     cellAcao.appendChild(btnExcluir);
}
