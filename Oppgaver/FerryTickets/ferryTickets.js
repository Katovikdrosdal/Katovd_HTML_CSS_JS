function calculatePrice() {
    const numAdults = parseInt(document.getElementById("numAdults").value) || 0;
    const numChildren = parseInt(document.getElementById("numChildren").value) || 0;
    const numCompliments = parseInt(document.getElementById("numCompliments").value) || 0;

    const journeyType = document.getElementById("journeyType").value;


    const priceAdult = 100;
    const priceChild = 50;
    const priceCompliment = 60;

    let totalPrice = (numAdults * priceAdult) + (numChildren * priceChild) + (numCompliments * priceCompliment);

    if (journeyType === "roundTrip") {
        totalPrice *= 0.75;
    }

    document.getElementById("result").textContent = `The total price for ${numAdults} adults, ${numChildren} children, and ${numCompliments} courtesy passengers is ${totalPrice} kroner. Have a good trip!`;
}

