// Event booking form
const eventForm = document.getElementById("event-form");
if (eventForm) {
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("event-name").value;
    const participants = parseInt(document.getElementById("participants").value);
    const date = document.getElementById("event-date").value;

    const pricePerPerson = 200000; // нэг хүний үнэ

    // Minimum 20 хүн шалгах
    if (participants < 20) {
      alert("Event booking requires at least 20 participants.");
      return;
    }

    const totalPrice = participants * pricePerPerson;

    // Summary-г гаргах
    const summaryDiv = document.getElementById("event-summary");
    summaryDiv.innerHTML = `
      Thank you, <strong>${name}</strong>!<br>
      Your event for <strong>${participants}</strong> participants on <strong>${date}</strong> has been booked.<br>
      <strong>Total Price: ${totalPrice.toLocaleString()}₮</strong>
    `;

    // Form-ийг цэвэрлэх
    eventForm.reset();
  });
}
