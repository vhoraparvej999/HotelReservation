document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form data
    var arrivalDate = document.getElementById('arrivalDate').value;
    var numberOfDays = document.getElementById('numberOfDays').value;
    var roomType = document.getElementById('roomType').value;
    var numberOfPersons = document.getElementById('numberOfPersons').value;
  
    // Perform booking confirmation (You can add your logic here, like sending data to a server or storing it locally)
    console.log("Arrival Date:", arrivalDate);
    console.log("Number of Days:", numberOfDays);
    console.log("Room Type:", roomType);
    console.log("Number of Persons:", numberOfPersons);
  
    // Example: Display confirmation message
    prompt("Plese Enter Your Email ");
    alert("Booking confirmed! Please check your email for further details.");
    alert("Thanks For Visiting.")
  });
  