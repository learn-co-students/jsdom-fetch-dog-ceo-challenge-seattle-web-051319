console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdownValue = document.querySelector("select").value
// console.log(dropdownValue);
const allBreeds = [];
const dropdown = document.getElementById("breed-dropdown")

// <div id="dog-image-container">
//   <!-- images here -->
// </div>
function fetchDogs(){
  fetch(imgUrl)
  .then( res => res.json() )
  .then( json => json["message"].forEach(dog => addDog(dog)))
  // addDog()
}
function addDog(url){
  const imageContainer = document.getElementById('dog-image-container')
  const image = document.createElement('img')
  image.src = url
  imageContainer.appendChild(image)
}

// <ul id="dog-breeds">
// </ul>
function fetchBreeds(){
  fetch(breedUrl)
  .then( res => res.json() )
  .then( json => addBreed(json.message))
}
function addBreed(breed){
  // initially, list all dog breeds
  const breedList = document.getElementById('dog-breeds')
  breedList.innerHTML = '';

  for (let dog in breed) {
    allBreeds.push(dog);
    const listItem = document.createElement('li')
    listItem.addEventListener('click', ()=>{listItem.style.color="blue"})
    listItem.textContent = dog
    breedList.appendChild(listItem)
  }

}

function filterBreeds(filterValue){
  const breeds = document.getElementById("dog-breeds").children
  // console.log("breeds")

  for (let i = 0; i < breeds.length; i++){
    if (breeds[i].innerText[0] !==  filterValue){
      // console.log(breeds[i].innerText)
      breeds[i].style.display = "none";
    } else {
      breeds[i].style.display = '';
    }
  }

}
function breedEventListener(){

  dropdown.addEventListener("change", function(){
    filterBreeds(dropdown.value)
    // console.log(dropdown)
  })
  // console.log('filtered Dogs', dropdown.value)


}








//displays images
fetchDogs()

fetchBreeds()
breedEventListener();
