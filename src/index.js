console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

 document.addEventListener("DOMContentLoaded", () =>{
   console.log("Content Loaded")
   const imgDiv = document.getElementById("dog-image-container")
   const breedsList = document.getElementById("dog-breeds")
   const breedDropdown = document.getElementById("breed-dropdown")

   //First fetch request
   fetch(imgUrl)
     .then(response => {
       return response.json()
     })
     .then(json => {
       // console.log(json)
       let images = json.message
       for(image of images){
         createImage(image)
       }
     });

     //Second fetch request
     fetch(breedUrl)
     .then(response => {
       return response.json()
     })
     .then(json => {
       let breeds = json.message
       let newBreeds = []
       for (let breed in breeds) {
         if (breeds[breed].length > 1) {
           for (prefix of breeds[breed])
              newBreeds.push(`${prefix} ${breed}`)
         }
         else {
           newBreeds.push(breed)
         }
       }
       for (newBreed of newBreeds){
         createBreed(newBreed)
       }
     });

     const allLis = document.getElementsByTagName("li")

     function createImage(url) {
       const newImage = document.createElement("img")
       newImage.src = url
       imgDiv.appendChild(newImage)
     }

     function createBreed(breedName){
       const newBreed = document.createElement("li")
       newBreed.textContent = breedName
       breedsList.appendChild(newBreed)

       newBreed.addEventListener("click", () => {
         newBreed.style.color = "green"
       })
     }

     breedDropdown.addEventListener("change", (event) => {
       for (li of allLis){
         console.log(li.textContent)
         if (li.textContent.startsWith(event.target.value) ) {
           li.style.display = "block"
         }
         else {
           li.style.display = "none"
         }
       }
     })

 });
