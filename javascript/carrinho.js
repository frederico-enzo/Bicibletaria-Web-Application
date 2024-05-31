document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalValueElement = document.getElementById('total-value');

    cartItems.forEach(item => {
        const decrementButton = item.querySelector('.quantity-decrement');
        const incrementButton = item.querySelector('.quantity-increment');
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('.item-info p');
        const removeButton = item.querySelector('.remove-from-cart');

        let quantity = parseInt(quantityElement.textContent);
        const price = parseFloat(priceElement.textContent.replace('Valor: R$ ', '').replace(',', '.'));

        const updateTotal = () => {
            let total = 0;
            cartItems.forEach(item => {
                const quantity = parseInt(item.querySelector('.quantity').textContent);
                const price = parseFloat(item.querySelector('.item-info p').textContent.replace('Valor: R$ ', '').replace(',', '.'));
                total += quantity * price;
            });
            totalValueElement.textContent = total.toFixed(2).replace('.', ',');
        };

        decrementButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });

        incrementButton.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        updateTotal();
    });
});
