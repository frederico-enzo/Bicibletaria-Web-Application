document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('service-description').value;
    const date = document.getElementById('service-date').value;
    const status = document.getElementById('service-status').value;

    const table = document.getElementById('service-list').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td>${description}</td>
        <td>${date}</td>
        <td>${status}</td>
        <td>
            <button class="btn-warning" onclick="editService(this)">Editar</button>
            <button class="btn-success"  onclick="finalizeService(this)">Finalizar</button>
        </td>
    `;

    document.getElementById('service-form').reset();
});

function finalizeService(button) {
    const row = button.parentElement.parentElement;
    row.children[2].innerText = 'Concluído';
}

function editService(button) {
    const row = button.parentElement.parentElement;
    const description = row.children[0].innerText;
    const date = row.children[1].innerText;
    const status = row.children[2].innerText;

    document.getElementById('edit-service-description').value = description;
    document.getElementById('edit-service-date').value = date;
    document.getElementById('edit-service-status').value = status;

    const modal = document.getElementById('edit-modal');
    modal.style.display = "block";

    const closeModal = document.getElementsByClassName("close")[0];
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('edit-service-form').onsubmit = function(e) {
        e.preventDefault();
        row.children[0].innerText = document.getElementById('edit-service-description').value;
        row.children[1].innerText = document.getElementById('edit-service-date').value;
        row.children[2].innerText = document.getElementById('edit-service-status').value;
        modal.style.display = "none";
    }
}