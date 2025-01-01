// Get all prices from the table
const prices = document.querySelectorAll('.prices');

// Initialize total price to 0
let totalPrice = 0;

// Calculate total price
prices.forEach((price) => {
  totalPrice += parseFloat(price.textContent.replace('₹', ''));
});

// Create a new row to display the total price
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.colSpan = 2;
newCell.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
newRow.appendChild(newCell);

// Add the new row to the table
const table = document.querySelector('table');
table.appendChild(newRow);