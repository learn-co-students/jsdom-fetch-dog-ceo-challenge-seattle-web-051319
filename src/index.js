console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdownValue = document.querySelector("select").value
console.log(dropdownValue);
const allBreeds = [];
const dropdown = document.getElementById("breed-dropdown")
dropdown.addEventListener('change', () => {
  console.log('changed!');
  let filteredDogs = allBreeds.filter(dog => {
    return dog[0] === dropdown.value;
  })
  console.log('filtered Dogs', filteredDogs)

})
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
  for (let dog in breed) {
    allBreeds.push(dog);
    const listItem = document.createElement('li')
    listItem.addEventListener('click', ()=>{listItem.style.color="blue"})
    listItem.textContent = dog
    breedList.appendChild(listItem)
  }



}

//     if (dog.slice(0,1) == dropdownValue) { //dog's first letter is equal to dropdown value )



// This is how you get dropdown value
// document.querySelector("select").value

// for each dropdown option value,


// <label for="select-breed">Filter Breeds That Start with:</label>
// <select id="breed-dropdown" name="select-breed">













// fetchDogs()
fetchBreeds()
