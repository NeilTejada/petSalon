function displayPetCards() {
  console.log("Displaying");
  console.log(salon.pets);
  //get the DIV to display the cards
  const DIV = document.getElementById("petList");
  let card = "";

  //travel the array
  for (let i = 0; i < salon.pets.length; i++) {
    let pet = salon.pets[i];
    card += `
        <div class="petList">
        <p>Name: ${pet.petName}</p>
        <p>Age: ${pet.petAge}</p>
        <p>Gender: ${pet.petGender}</p>
        <p>Breed: ${pet.petBreed}</p>
        <p>Service: ${pet.petService}</p>
       <p>Type of Animal: ${pet.petType}</p>
        </div>
        `;
  }

  //create the html template

  //insert the card into the register.html
  DIV.innerHTML = card;
}
