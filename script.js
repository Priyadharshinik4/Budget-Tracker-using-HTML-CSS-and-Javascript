const budgetForm = document.getElementById('budget-form');
const list = document.getElementById('budget-list');
const addBtn = document.getElementById('add');

// Initialize budget data
let data = [];

// Add event listener to add button
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get form data
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Create budget item object
    const budgetItem = {
        type,
        name,
        amount
    };

    // Add budget item to data array
    data.push(budgetItem);

    // Render budget list
    renderlist();
});

// Render budget list function
function renderlist() {
    // Clear budget list
    list.innerHTML = '';

    // Loop through budget data array
    data.forEach((item, index) => {
        // Create budget item element
        const budgetItemElement = document.createElement('li');
        budgetItemElement.classList.add('budget-item');

        // Create delete button element
        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-btn');
        deleteBtnElement.textContent = 'Delete';
        deleteBtnElement.addEventListener('click', () => {
            // Remove budget item from data array
            data.splice(index, 1);

            // Render budget list
            renderlist();
        });

        // Create budget item text element
        const budgetItemTextElement = document.createElement('span');
        budgetItemTextElement.textContent = `${item.name}: ${item.amount} (${item.type})`;

        // Append elements to budget item element
        budgetItemElement.appendChild(budgetItemTextElement);
        budgetItemElement.appendChild(deleteBtnElement);

        // Append budget item element to budget list
        list.appendChild(budgetItemElement);
    });
}
