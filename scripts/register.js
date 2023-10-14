let salon = { pets: [] };

// let pets = [];

//object constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

function addPet() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("txtAge").value;
  const gender = document.getElementById("txtGender").value;
  const breed = document.getElementById("txtBreed").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("typeOfAnimal").value;

  const newPet = new Pet(name, age, gender, breed, service, type);
  console.log(newPet);
  salon.pets.push(newPet);
  displayPets();

  console.log(salon.pets);
}

function displayPets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";

  salon.pets.forEach((pet, index) => {
    const petInfo = document.createElement("div");
    petInfo.classList.add("pet-info");
    petInfo.innerHTML = `
      <p>${index + 1}. Name: ${pet.name}</p>
      <p>Age: ${pet.age}</p>
      <p>Gender: ${pet.gender}</p>
      <p>Breed: ${pet.breed}</p>
      <p>Type of Service: ${pet.service}</p>
      <p>Type of Animal: ${pet.type}</p>
    `;
    petList.appendChild(petInfo);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("txtAge").value = "";
  document.getElementById("txtGender").value = "";
  document.getElementById("txtBreed").value = "";
  document.getElementById("service").value = "";
  document.getElementById("type-of-animal").value = "";
}

function init() {
  let pet1 = new Pet("Scooby", 70, "Male", "Dane");
  let pet2 = new Pet("Scrappy,", 2, "Female", "Bully");
  console.log(pet1);
  console.log(pet2);
}
init();
