let salon = { pets: [] };

let counter = 0;
//object constructor
function Pet(name, age, gender, breed, service, type) {
  this.petName = name;
  this.petAge = age;
  this.petGender = gender;
  this.petBreed = breed;
  this.petService = service;
  this.petType = type;
  this.petID = counter++;
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

  let inputFieldValues = {
    petName: inputName,
    petAge: inputAge,
    petGender: inputGender,
    petBreed: inputBreed,
    petService: inputService,
    petType: inputType,
  };

  petFieldNames.forEach((fieldName) => {
    let inputValue = aPet[fieldName];
    let inputElement = inputFieldValues[fieldName];
    inputElement.classList.remove("error");

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
    inputService.value,
    inputType.value
  );
  if (isPetValid(newPet) == true) {
    salon.pets.push(newPet);
    //displayPetCards();
    displayTable();
    //displayPets();
    clearPetForm();
  }

  console.log(salon.pets);
}

function clearPetForm() {
  (inputName.value = ""),
    (inputAge.value = ""),
    (inputGender.value = ""),
    (inputBreed.value = ""),
    (inputGender.value = ""),
    (inputService.value = ""),
    (inputType.value = "");
}

function deletePet(ID) {
  console.log("Deleting pet" + ID);
  let deleteIndex;

  //remove from html
  document.getElementById(ID).remove();

  //remove from the array
  for (let i = 0; i < salon.pets.length; i++) {
    let pet = salon.pets[i];
    if (pet.petID == ID) {
      deleteIndex = i;
    }
  }
  salon.pets.splice(deleteIndex, 1);
  //displayPetCards();
  //displayTable();
  displayTable();
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
  //displayPetCards();
  displayTable();
}
window.onload = init;
