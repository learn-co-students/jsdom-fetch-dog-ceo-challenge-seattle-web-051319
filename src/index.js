console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchdogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => {
  console.log(res)
  return res.json()
})

  .then(json => {
    // console.log(json.message)
    return playfetch(json.message)

  })
}

function playfetch(dogs) {
  // console.log(dogs)
  const doggyPics = document.getElementById("dog-image-container")
    dogs.forEach(function(dog) {
      console.log(dog)
    let pics = document.createElement("img")
    pics.setAttribute("src", dog)
    doggyPics.appendChild(pics)
    console.log(doggyPics)
    }

  )
}

function fetchbreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
    console.log(res)
    return res.json()
  })

    .then(json => {
       console.log(json.message)
      return breedfetch(json.message)

    })
  }

  function breedfetch(breeds){
    const ul = document.getElementById("dog-breeds")
    console.log( breeds)

    let doggos = Object.keys(breeds)

    doggos.forEach(function(doge) {
        let li = document.createElement('li')
        li.addEventListener("click", () =>{
            li.style.color = "purple";
        })
        li.innerText = doge
        ul.appendChild(li)
    })
    return doggos;
  }

function filterBreeds(fetchdogs){
  const findPupper = document.getElementsByTagName("select");
  console.log(findPupper)
  findPupper[0].addEventListener("change", () =>{
    let choice = document.getElementsByTagName("option")
    console.log(choice[0])
    let dogSelect = breedfetch.forEach(function(doge){
      console.log(doge[0])
    })

    // for(let i = 0; i < choice.length; i++){
    //
    //   if choice[i] ==
    // }

  });

}
  fetchbreeds();
  filterBreeds();
