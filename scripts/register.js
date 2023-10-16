let salon = { pets: [] };

//object constructor
function Pet(name, age, gender, breed, service, type) {
  this.petName = name;
  this.petAge = age;
  this.petGender = gender;
  this.petBreed = breed;
  this.petService = service;
  this.petType = type;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtTypeOfAnimal");

function isPetValid(aPet) {
  // let petValidation = true;

  // if (aPet.petName == "") {
  //   petValidation = false;
  //   inputName.classList.add("error");
  // }
  // if (aPet.petAge === "") {
  //   petValidation = false;
  //   inputAge.classList.add("error");
  // }
  // return petValidation;
  const petFieldNames = [
    "petName",
    "petAge",
    "petGender",
    "petBreed",
    "petService",
    "petType",
  ];
  let petValidation = true;

  const inputFieldValues = {
    petName: inputName,
    petAge: inputAge,
    petGender: inputGender,
    petBreed: inputBreed,
    petService: inputService,
    petType: inputType,
  };

  petFieldNames.forEach((fieldName) => {
    const inputValue = aPet[fieldName];
    const inputElement = inputFieldValues[fieldName];

    if (inputValue === "") {
      petValidation = false;
      inputElement.classList.add("error");
    }
  });

  return petValidation;
}

function addPet() {
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputGender.value,
    inputService.value,
    inputType.value
  );
  if (isPetValid(newPet) == true) {
    salon.pets.push(newPet);
    displayPetCards();
    //displayPets();
    clearPetForm();
  }

  console.log(salon.pets);
}

// function displayPets() {
//   const petList = document.getElementById("petList");
//   petList.innerHTML = "";

//   salon.pets.forEach((pet, index) => {
//     const petInfo = document.createElement("div");
//     petInfo.classList.add("pet-info");
//     petInfo.innerHTML = `
//       <p>${index + 1}. Name: ${pet.petName}</p>
//       <p>Age: ${pet.petAge}</p>
//       <p>Gender: ${pet.petGender}</p>
//       <p>Breed: ${pet.petBreed}</p>
//       <p>Type of Service: ${pet.petService}</p>
//       <p>Type of Animal: ${pet.petType}</p>
//     `;
//     petList.appendChild(petInfo);
//   });
// }

function clearPetForm() {
  (inputName.value = ""),
    (inputAge.value = ""),
    (inputGender.value = ""),
    (inputBreed.value = ""),
    (inputGender.value = ""),
    (inputService.value = ""),
    (inputType.value = "");
}

function init() {
  let pet1 = new Pet("Scooby", 70, "Male", "Dane", "The Works", "Dog");
  let pet2 = new Pet(
    "Scrappy,",
    2,
    "Female",
    "Bully",
    "Ear cleaning",
    "Rabbit"
  );
  salon.pets.push(pet1, pet2);
  console.log(pet1);
  console.log(pet2);
  displayPetCards();
}
window.onload = init;
