/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
// 1
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column }) // function from data.js
    updateDraggingHtml({ over: column }) // function from view.js
}

// 2
// • When a user clicks and holds their mouse on an order and drags it to a different column, the column should highlight green to indicate it can be dropped in that column. 
const handleDragStart = (event) => {
    c
}

// 3
// • If a user drops the dragged order in a new column, it should be removed from the current column and added to the new column.
// • Once a user drops the dragged order anywhere, all column highlights should be removed.
const handleDragEnd = (event) => {}

// 4
/* • Clicking the "?" icon should open a "Help" overlay with instructions on how to use the app. 
• If the "Help" overlay is open, clicking the "Close" button should remove the overlay.
• When any overlay is closed, the focus should return to the "Add Order" button.`
*/
const handleHelpToggle = (event) => {
    const helpOverlay = document.querySelector('.overlay__title')

    // element.addEventListener('event', function) // put event and function to execute
    helpOverlay.addEventListener('click', function() { // (unnamed function) if click happens, run the following function
        console.log('clicked') // just to check if function is being called
        helpOverlay.style.background = 'red' // (the function) changes style here when my div is clicked

    })
   

    if (helpOverlay.classList.contains)
}


// 5
// • The “Add Order” button should start as focused, meaning space/enter can be pressed immediately to add an order.
document.addEventListener("DOMContentLoaded", function() {
    const addOrderButton = document.querySelector(".button button_primary");
    addOrderButton.focus();
  });

// • Clicking the "Add Order" button should open an "Add Order" overlay where users can enter order text and a table number. 

// • If the "Add Order" overlay is closed and opened again, it should be blank.
  

const handleAddToggle = (event) => {}

// 6
// • Clicking the "Add" button in the "Add Order" overlay should remove the overlay and add a new order to the "Ordered" column.
// • Clicking "Cancel" in the "Add Order" overlay should remove the overlay without adding the information as an order. 
const handleAddSubmit = (event) => {}

// 7
// •	Clicking on an order should open an "Edit Order" overlay.  
const handleEditToggle = (event) => {}

// 8
// • Clicking the "Cancel" button in the "Edit Order" overlay should close the overlay without applying any changes.
// • Clicking the "Update" button in the "Edit Order" overlay should close the overlay and apply any changes to the relevant order.
// • If the "Status" value is changed and "Update" is pressed in the "Edit Order" overlay, the order should be moved to the selected column.

const handleEditSubmit = (event) => {}

// 9
// •	Clicking the "Delete" button in the "Edit Order" overlay should remove the order entirely.
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}