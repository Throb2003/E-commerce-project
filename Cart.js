document.addEventListener('DOMContentLoaded', () => {
    const totalPriceElement = document.getElementById('total-price');

    // Function to calculate total price
    function calculateTotal() {
        let total = 0;
        const rows = document.querySelectorAll('tbody tr'); // Select all rows in the cart

        rows.forEach(row => {
            const price = parseFloat(row.cells[2].innerText.replace('$', '')); // Get the price
            const quantity = parseInt(row.querySelector('.quantity-input').value); // Get the quantity
            const itemTotal = price * quantity; // Calculate item total
            row.querySelector('.item-total').innerText = $${itemTotal.toFixed(2)}; // Update item total in the row
            total = itemTotal; // Add to grand total
        });

        totalPriceElement.innerText = $${total.toFixed(2)}; // Update total price display
    }

    // Event listeners for quantity inputs
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', calculateTotal); // Recalculate total on quantity change
    });

    // Event listeners for remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const row = event.target.closest('tr'); // Get the closest row
            row.remove(); // Remove the row from the cart
            calculateTotal(); // Recalculate total after removal
        });
    });

    // Initial calculation of total price
    calculateTotal();
});