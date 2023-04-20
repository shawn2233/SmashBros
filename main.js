// document.querySelector('button').addEventListener('click', fightMe)

// function fightMe(){

// const input = document.querySelector("#smash").value.toLowerCase()

//  fetch(`/api/${input}`)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//       document.querySelector("#message").textContent = `Franchise:${data.franchise}, and first appeared in ${data.firstLook}`
//       document.querySelector("img").src = data.url
//   })  
// }

// Target the select element in the dom
let select = document.querySelector("select");

// ** Function to get all options and display on the dom ** //
function getOptions() {
	// Call the API that you added to the server
  fetch("/api/allCharacters")
    .then((res) => res.json())
    .then((data) => {

        // Gets all keys in the object and returns an array
        let keys = Object.keys(data);

        // Loop through the array of keys and create an option for each one, 
				// then append it to the dropdown menu (select)
        // Use i < keys.length - 1 to not display the last element "unknown"
        for (let i = 0; i < keys.length - 1; i++) {
            let option = document.createElement("option");
            option.innerText = keys[i];
            select.appendChild(option);
        }
    });
}

// run the function when the page loads
getOptions();


document.querySelector('button').addEventListener('click', fightMe)

function fightMe(){

// const input = document.querySelector("#smash").value.toLowerCase()
let userSelection = select.value;

 fetch(`/api/${userSelection}`)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    console.log(userSelection);
      document.querySelector("#message").textContent = `Franchise: ${data.franchise}`
      document.querySelector("#message2").textContent = `First appeared in ${data.firstLook}`
      document.querySelector("#pic").src = data.url
  })  
}