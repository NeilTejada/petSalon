let salon = {
  hours: {
    weekdays: "8:00am - 7:00pm",
    weekends: "9:00am - 5:00pm",
    sunday: "CLOSED ON SUNDAY!",
  },
};

function displayInfo() {
  document.getElementById("pet-header").innerHTML = `
  <p>"Servicing all your furry animals!"</p>`;
  document.getElementById(
    "pets-home"
  ).innerHTML = `<p>We are open Monday thru Friday: ${salon.hours.weekdays}, Saturday:  ${salon.hours.weekends}, and ${salon.hours.sunday}</p>`;
}
displayInfo();
