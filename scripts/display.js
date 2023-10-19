// #region 
// function displayPetCards() {
//   console.log("Displaying");
//   console.log(salon.pets);
//   get the DIV to display the cards
//   const DIV = document.getElementById("petList");

//   let card = "";

//   travel the array
//   for (let i = 0; i < salon.pets.length; i++) {
//     let pet = salon.pets[i];
//     card += `
//         <div id=${pet.petID} class="petList">
//         <p>Name: ${pet.petName}</p>
//         <p>Age: ${pet.petAge}</p>
//         <p>Gender: ${pet.petGender}</p>
//         <p>Breed: ${pet.petBreed}</p>
//         <p>Service: ${pet.petService}</p>
//         <p>Type of Animal: ${pet.petType}</p>
//         <button class="btn btn-danger" onClick="deletePet(${pet.petID})">Delete</button>
//         </div>
//         `;
//   }

//   create the html template

//   insert the card into the register.html
//   DIV.innerHTML = card;
//   getTotal();
// }
// #endregion

function getTotal() {
  const TOTAL = document.getElementById("total");
  TOTAL.innerHTML = salon.pets.length;
}

function displayTable() {
  // Get the DIV element to display the pet data
  const DIV = document.getElementById("petTable");

  // Initialize the HTML content with the table headers
  let tr = "";

  // Travel the array and append each pet to the table
  for (let i = 0; i < salon.pets.length; i++) {
    let pet = salon.pets[i];
    tr += `
      <tr id=${pet.petID}>
      <td>${pet.petID}</td>
        <td>${pet.petName}</td>
        <td>${pet.petAge}</td>
        <td>${pet.petGender}</td>
        <td>${pet.petBreed}</td>
        <td>${pet.petService}</td>
        <td>${pet.petType}</td>
        <td><button class="btn btn-danger" onClick="deletePet(${pet.petID})">Delete</button></td>
      </tr>
    `;
  }

  // Insert the content into the register.html
  DIV.innerHTML = tr;
  getTotal();
}
