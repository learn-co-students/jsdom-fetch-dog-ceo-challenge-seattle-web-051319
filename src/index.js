// console.log('%c HI', 'color: firebrick')

function getDogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(resp){
    return resp.json();
  })
  .then(function(json){
    renderDogs(json);
    // console.log(json)
  })

}

function renderDogs(json) {
  let img_url = json.message  //why couldn't I skip this step, json.forEach
  img_url.forEach(dog => {
    const div = document.getElementById('dog-image-container');
    let image = document.createElement('span')
    image.innerHTML = `<img src="${dog}"/>`  //alternative to innerHTML?
    div.appendChild(image);
   });
}

 function getBreeds(){
   fetch("https://dog.ceo/api/breeds/list/all")
   .then(function(resp){
     return resp.json();
   })
   .then(function(json){
     displayBreeds(json);
     // console.log(json)
   })
 }

 function displayBreeds(json){
   let breed_url = json.message
   let breedList = Object.keys(breed_url)
     breedList.forEach(breed => {
     const ul = document.getElementById('dog-breeds');
     let breedListItem = document.createElement('li');
     breedListItem.textContent = breed;
     ul.appendChild(breedListItem);

     breedListItem.addEventListener("click", function(event) { //want to make this into a function
       breedListItem.style.color = "red";
    })

  })
}

//  function clickHandler(breedListItem){
//    breedListItem.addEventListener("click", function(event) {
//      console.log(breedListItem)
//      alert('I was clicked!');
// })};

  function dropDownSelector(){
    let listContent = document.getElementsByTagName("li")
    const selectElement = document.getElementById("breed-dropdown");

    selectElement.addEventListener("change", (event) => {
      alert('I was selected!');
      for (item of listContent){isIncludedInDropdown(item)
  }})};

  function isIncludedInDropdown(item){
    if (item.textContent.startsWith(event.target.value)){
      dummy = event.target.value
      console.log(dummy)
      item.style.display = ""
    }
    else {
      item.style.display = "none"
     }
   }

 document.addEventListener('DOMContentLoaded', function() {

  getDogs();
  getBreeds();
  dropDownSelector();

 });
