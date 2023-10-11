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
  pets: [
    {
      name: "Tito",
      age: 3,
    },
    {
      name: "Moco",
      age: 1,
    },
  ],
};

function displayInfo() {
  document.getElementById(
    "pets"
  ).innerHTML = `Welcome to ${salon.name}, our store hours are: ${salon.hours.open} to ${salon.hours.close}.`;
}
displayInfo();

function displayPetNames() {
  console.log(salon.pets[0].name);
  console.log(salon.pets[1].age);
}
displayPetNames();
