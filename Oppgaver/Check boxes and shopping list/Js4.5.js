function showSelectedItems() {
    const checkboxes = document.querySelectorAll('input[name="item"]:checked');
    const selectedItems = [];

    checkboxes.forEach((checkbox) => {
        selectedItems.push(checkbox.value);
    });

    const displayDiv = document.getElementById('selectedItems');
    if (selectedItems.length > 0) {
        displayDiv.innerHTML = "Selected items: " + selectedItems.join(", ");
    } else {
        displayDiv.innerHTML = "No items selected";
    }
}
