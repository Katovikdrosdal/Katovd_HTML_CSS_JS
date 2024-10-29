function limitToppings() {
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    if (toppings.length > 3) {
        alert("You can select up to 3 toppings only.");
        toppings[toppings.length - 1].checked = false;
    }
}

function displayOrder() {
    const size = document.querySelector('input[name="size"]:checked').value;
    const filling = document.querySelector('input[name="filling"]:checked').value;
    const crust = document.querySelector('input[name="crust"]:checked').value;

    let price = size === "Large" ? 12 : size === "Medium" ? 10 : 8;
    price += (crust === "Cheese-Stuffed" || crust === "Gluten-Free") ? 2 : 0;

    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'))
                          .map(topping => topping.value);
    price += toppings.length;

    const orderSummary = `Your order of 1 ${size} ${filling} pizza with a ${crust} crust and ${
        toppings.length > 0 ? toppings.join(", ") : "no"
    } toppings will be delivered to you within 59 minutes!\nTotal price: $${price}. Thank you for ordering.`;

    alert(orderSummary);
}

document.querySelectorAll('input[name="topping"]').forEach(topping => {
    topping.addEventListener('change', limitToppings);
});
