let pets = [];

function addPet() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const breed = document.getElementById("breed").value;
  const service = document.getElementById("service").value;

  const newPet = {
    name: name,
    age: age,
    gender: gender,
    breed: breed,
    service: service,
  };
  pets.push(newPet);
  displayPets();
}
function Pet() {}

function displayPets() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";

  pets.forEach((pet, index) => {
    const petInfo = document.createElement("div");
    petInfo.classList.add("pet-info");
    petInfo.innerHTML = `
      <p>${index + 1}. Name: ${pet.name}</p>
      <p>Age: ${pet.age}</p>
      <p>Gender: ${pet.gender}</p>
      <p>Breed: ${pet.breed}</p>
      <p>Service: ${pet.service}</p>
    `;
    petList.appendChild(petInfo);
  });
}
function regitster() {}

function init() {}
