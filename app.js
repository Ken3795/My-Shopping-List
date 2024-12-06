// Initialize shopping list from local storage or empty array
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer = document.getElementById('shoppingList');

// Function to render the shopping list
function renderList() {
  shoppingListContainer.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = item.purchased ? 'purchased' : '';
    li.innerHTML = `
      <span contenteditable="true">${item.name}</span>
      <div>
        <button onclick="togglePurchased(${index})">${item.purchased ? 'Unmark' : 'Mark'} Purchased</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;
    shoppingListContainer.appendChild(li);
  });
}

// Function to add an item
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    shoppingList.push({ name: itemName, purchased: false });
    saveList();
    renderList();
    itemInput.value = '';
  }
}

// Function to toggle purchased status
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  saveList();
  renderList();
}

// Function to delete an item
function deleteItem(index) {
  shoppingList.splice(index, 1);
  saveList();
  renderList();
}

// Function to clear the list
function clearList() {
  shoppingList = [];
  saveList();
  renderList();
}

// Function to save the list to local storage
function saveList() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Attach event listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

// Render the list on page load
renderList();
