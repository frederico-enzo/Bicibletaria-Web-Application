document.addEventListener('DOMContentLoaded', () => {
    const quantityDecrementButtons = document.querySelectorAll('.quantity-decrement');
    const quantityIncrementButtons = document.querySelectorAll('.quantity-increment');
    const totalValueElement = document.getElementById('total-value');
    let totalValue = parseFloat(totalValueElement.textContent.replace('R$', '').trim());

    quantityDecrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    quantityIncrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });
    });

    function updateTotal() {
        let newTotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-info p').textContent.replace('Valor: R$', '').trim());
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            newTotal += price * quantity;
        });
        totalValueElement.textContent = newTotal.toFixed(2);
    }

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.closest('.cart-item');
            cartItem.remove();
            updateTotal();
        });
    });
});
