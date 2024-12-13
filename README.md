
 ## Name : Kenneth Kipkoech
### Week 2 Code Challenge
## clone
https://github.com/Ken3795/My-Shopping-List
This repository contains JavaScript solutions for the Week 1 challenges:
## overview
This project is a simple shopping list application built with plain JavaScript, HTML, and CSS. It allows users to add, edit, mark items as purchased, delete items, and clear the entire list. The application persists the shopping list in the browser's local storage, ensuring that the list is retained across sessions.

## Features
Add Items: Users can add items to the shopping list.
Edit Items: Inline editing is enabled for item names.
Mark as Purchased: Users can toggle the "purchased" status of an item.
Delete Items: Items can be removed from the list individually.
Clear List: The entire shopping list can be cleared at once.
Local Storage: The shopping list is saved in the browser's local storage, ensuring persistence.
Code Explanation
## Initialization
The shopping list is initialized from localStorage, or an empty array is used if no previous list exists.
javascript
Copy code
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
DOM Elements
Key DOM elements like input fields, buttons, and the list container are accessed using document.getElementById.
## Functions
renderList: Updates the DOM to reflect the current state of the shopping list.
addItem: Adds a new item to the list and updates the display.
togglePurchased: Toggles the purchased status of an item.
deleteItem: Removes an item from the list by its index.
clearList: Clears the entire shopping list.
saveList: Saves the shopping list to local storage.
## Event Listeners
Event listeners are added to handle adding items, clearing the list, and pressing Enter in the input field:
javascript
## Copy code
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
## Rendering on Load
The list is rendered on page load to ensure the UI matches the saved state in local storage:
javascript
Copy code
renderList();
## How to Use
Add Items: Enter the name of the item in the input field and click "Add" or press Enter.
Mark as Purchased: Click the "Mark Purchased" button next to an item to toggle its status.
Edit Items: Double-click on an item name to edit it directly.
Delete Items: Click the "Delete" button next to an item to remove it.
Clear List: Click the "Clear" button to remove all items from the list.
## How to Run
Save the code to an index.html file.
Open the file in a web browser.
The application will load and allow interaction immediately.
## Future Enhancements
Search and Filter: Add functionality to search or filter items by name or status.
Styling: Improve the user interface with better CSS styles.
Undo/Redo: Allow users to undo or redo actions.
Mobile Optimization: Enhance the app for better usability on mobile devices.
## Requirements
A modern web browser with JavaScript enabled.