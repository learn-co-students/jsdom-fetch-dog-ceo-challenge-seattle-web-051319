console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", () => {
    
    renderImages();
    renderBreeds();
    // filterChoice();
    let listContent = document.getElementsByTagName("li")
    let searchBar = document.getElementById("breed-dropdown")
    searchBar.addEventListener("change", (event) =>{
        
        // renderBreeds();
        console.log(listContent);
        for (item of listContent){isIncludedInDropdown(item)}

    })
  });

  function renderImages() {
      fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
        chooseImg(json);
        // debugger;
      })
  }

  function chooseImg(json) {
    let messages = json.message
    messages.forEach(img => newElement(img))
  }
  
  function newElement(img){
    let pics = document.getElementById("dog-image-container");
    let image = document.createElement("div");
    image.innerHTML = `<img src="${img}"/>`
    pics.appendChild(image);
  }

  function renderBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      chooseBreed(json);
      // debugger;
    })
  }

  function chooseBreed(json){

      let breeds = json.message
      let allBreeds = Object.keys(breeds)
      allBreeds.forEach(breed => newBreed(breed))
    }

    
    function newBreed(breed){
        let list = document.getElementById("dog-breeds");
        let li = document.createElement("li");

        li.innerText = breed;
        list.appendChild(li);

        li.addEventListener("click", () =>{
            li.style.color = "red";
        })
    }
   
    
    

    function isIncludedInDropdown(item){
        debugger;
        if (item.textContent.startsWith(event.target.value)){
            item.style.display = ""
        }
        else {
            item.style.display = "none"
    }
    }

    

    