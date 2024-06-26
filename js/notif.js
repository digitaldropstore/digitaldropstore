const notification = document.getElementById("notification");
const orderDetails = document.getElementById("orderDetails");

const orderData = [
    { name: "cintya", city: "Jakarta" },
    { name: "rina", city: "Bandung" },
    { name: "Siska", city: "Surabaya" },
    { name: "Intan", city: "Purwakarta" },
    { name: "tyas", city: "Semarang" },
    { name: "endah", city: "Yogyakarta" },
    { name: "fani", city: "Kebumen" },
    { name: "milea", city: "Purwokerto" },
    // Add more order data as needed
];

function getRandomOrder() {
    const randomIndex = Math.floor(Math.random() * orderData.length);
    return orderData[randomIndex];
}

function showNotification(name, city) {
    orderDetails.textContent = `${name} dari ${city}`;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(showNextNotification, 5000); // Hide for a short time before showing next
    }, 1500); // Display for 10 seconds
}

function showNextNotification() {
    const order = getRandomOrder();
    showNotification(order.name, order.city);
}

// Start the looping notifications
showNextNotification();

// Scroll Up button functionality
const scrollUpButton = document.getElementById("scrollUp");

scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});