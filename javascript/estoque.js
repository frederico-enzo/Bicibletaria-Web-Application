document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addOrUpdateSale();
});

function addOrUpdateSale() {
    const formData = getFormData();
    const rowIndex = getRowIndex();

    if (rowIndex) {
        updateSale(rowIndex, formData);
    } else {
        addSale(formData);
    }
}

function addSale(formData) {
    const table = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    formData.forEach((data, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = data;
    });

    const editButtonCell = newRow.insertCell(formData.length);
    const editButton = createEditButton(newRow.rowIndex);
    editButtonCell.appendChild(editButton);

    document.getElementById('salesForm').reset();
}

function updateSale(rowIndex, formData) {
    const table = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    const row = table.rows[rowIndex - 1];

    table.deleteRow(rowIndex - 1);

    const newRow = table.insertRow(rowIndex - 1);
    formData.forEach((data, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = data;
    });

    const editButtonCell = newRow.insertCell(formData.length);
    const editButton = createEditButton(rowIndex);
    editButtonCell.appendChild(editButton);

    resetSubmitButton();

    document.getElementById('salesForm').reset();
}

function createEditButton(rowIndex) {
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.dataset.index = rowIndex;
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', preencherFormularioParaEdicao);
    return editButton;
}

function getFormData() {
    return [
        document.getElementById('saleDate').value,
        document.getElementById('itemSold').value,
        document.getElementById('description').value,
        document.getElementById('seller').value,
        document.getElementById('paymentMethod').value
    ];
}

function getRowIndex() {
    return document.querySelector('.btn-submit').dataset.rowIndex;
}

function resetSubmitButton() {
    const submitButton = document.querySelector('.btn-submit');
    submitButton.textContent = 'Adicionar Venda';
    submitButton.removeAttribute('data-row-index');
    submitButton.removeEventListener('click', salvarEdicao);
    submitButton.addEventListener('click', addOrUpdateSale);
}

function preencherFormularioParaEdicao(event) {
    const rowIndex = event.target.dataset.index;
    const table = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    const row = table.rows[rowIndex - 1];
    const formData = [];

    for (let i = 0; i < row.cells.length; i++) {
        formData.push(row.cells[i].textContent);
    }

    fillFormFields(formData);

    const submitButton = document.querySelector('.btn-submit');
    submitButton.textContent = 'Salvar Edição';
    submitButton.dataset.rowIndex = rowIndex;
    submitButton.removeEventListener('click', addOrUpdateSale);
    submitButton.addEventListener('click', addOrUpdateSale);
}

function fillFormFields(data) {
    const fieldIds = ['saleDate', 'itemSold', 'description', 'seller', 'paymentMethod'];
    fieldIds.forEach((id, index) => {
        document.getElementById(id).value = data[index];
    });
}
