let salon = {
  name: "The Fashion Pet",
  address: {
    street: "Palm Ave.",
    number: "123",
    zip: "111456",
  },
  hours: {
    open: "9:00 am",
    close: "7:00 pm",
  },
};

function displayInfo() {
  document.getElementById(
    "pets-home"
  ).innerHTML = `Welcome to ${salon.name}, our store hours are: ${salon.hours.open} to ${salon.hours.close}.`;
}
displayInfo();
