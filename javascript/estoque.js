document.addEventListener('DOMContentLoaded', function () {
    const salesForm = document.getElementById('salesForm');
    const salesTable = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    const editModal = document.getElementById('edit-modal');
    const editForm = document.getElementById('edit-sales-form');
    let currentEditRow = null;

    salesForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const saleDate = document.getElementById('saleDate').value;
        const itemSold = document.getElementById('itemSold').value;
        const description = document.getElementById('description').value;
        const seller = document.getElementById('seller').value;
        const paymentMethod = document.getElementById('paymentMethod').value;

        const newRow = salesTable.insertRow();
        newRow.insertCell(0).innerText = saleDate;
        newRow.insertCell(1).innerText = itemSold;
        newRow.insertCell(2).innerText = description;
        newRow.insertCell(3).innerText = seller;
        newRow.insertCell(4).innerText = paymentMethod;

        const actionCell = newRow.insertCell(5);
        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.classList.add('btn', 'btn-warning');
        editButton.onclick = () => openEditModal(newRow);
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.onclick = () => salesTable.deleteRow(newRow.rowIndex - 1);
        actionCell.appendChild(deleteButton);

        salesForm.reset();
    });

    editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (currentEditRow) {
            currentEditRow.cells[0].innerText = document.getElementById('edit-sale-date').value;
            currentEditRow.cells[1].innerText = document.getElementById('edit-item-sold').value;
            currentEditRow.cells[2].innerText = document.getElementById('edit-description').value;
            currentEditRow.cells[3].innerText = document.getElementById('edit-seller').value;
            currentEditRow.cells[4].innerText = document.getElementById('edit-payment-method').value;

            closeModal();
        }
    });

    function openEditModal(row) {
        currentEditRow = row;

        document.getElementById('edit-sale-date').value = row.cells[0].innerText;
        document.getElementById('edit-item-sold').value = row.cells[1].innerText;
        document.getElementById('edit-description').value = row.cells[2].innerText;
        document.getElementById('edit-seller').value = row.cells[3].innerText;
        document.getElementById('edit-payment-method').value = row.cells[4].innerText;

        editModal.style.display = 'block';
    }

    document.querySelector('.close').onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == editModal) {
            closeModal();
        }
    };

    function closeModal() {
        editModal.style.display = 'none';
    }
});
