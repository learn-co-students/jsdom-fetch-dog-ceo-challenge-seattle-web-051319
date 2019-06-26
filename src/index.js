document.addEventListener('DOMContentLoaded', (event) => {
  getImages()
  getBreeds()
  getFilterValue()
  loadEventListeners()
});



const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {

 //Find where to insert the image 
 let dogDiv = document.getElementById("dog-image-container")

  fetch(imgUrl).then(function(response) {
    return response.json()
  }).then(function(json){
    //Extract images links 
    let imageLinks = json.message

    for (let i = 0; i < imageLinks.length; i++) {
      //Declare a new img element 
      let imageTag = document.createElement("img")

      //Change the src of that element to the url in our images array
      imageTag.setAttribute("src", imageLinks[i])

      //Insert the new image into the DOM --> HTML
      dogDiv.appendChild(imageTag)

      dogDiv.appendChild(document.createElement('br'))
    }
  });
}

function getBreeds() {

  console.log("getting breeds")

  let filterValue = document.getElementById("breed-dropdown").value

  fetch(breedUrl).then(function(response) {
    return response.json()
  }).then(function(json){
    //Extract images links 
    let breeds = json.message
    displayBreeds(breeds, filterValue)
  })

}

function loadEventListeners() {
  // Adding an event listener to the entrire document 
  document.addEventListener("click", function(event) {
    let clickedItem = event.target

    if (clickedItem.tagName === "LI") {
      clickedItem.style.color = "blue"
    }
    
  })

  let filterValue = document.getElementById("breed-dropdown")
  filterValue.addEventListener("change", function() {
    filterBreeds(filterValue.value)
  })
}


function displayBreeds(breeds) {
  const breedList = document.getElementById("dog-breeds")
  breedList.innerHTML = '';

  for (let key in breeds) {
    let liTag = document.createElement("li")
    liTag.innerText = key
    breedList.appendChild(liTag)

  }
}

function filterBreeds(filterValue) {
  const breeds = document.getElementById("dog-breeds").children
  for (let i = 0; i < breeds.length; i++) {
    if (breeds[i].innerText[0] !== filterValue) {
      breeds[i].style.display = "none";
    } else {
      breeds[i].style.display = "";
    }
  }
}

