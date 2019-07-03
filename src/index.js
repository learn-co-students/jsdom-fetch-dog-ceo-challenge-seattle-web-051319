const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const imageContainer = document.getElementById("dog-image-container");
const breedsList = document.getElementById("dog-breeds");
const selectDropdown = document.getElementById("breed-dropdown")

function main() {
    fetchDogImages();
    fetchDogBreeds();
}

function fetchDogImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayDogImages(json.message));
}

function fetchDogBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => displayDogBreeds(json.message))
}

function displayDogImages(imgUrls) {
    for(let url of imgUrls) {
        let image = document.createElement("img");
        image.src = url;
        imageContainer.appendChild(image);
    }
}

function displayDogBreeds(breeds) {
    for(let breed in breeds) {
        addItem(breed);
    }

    selectDropdown.addEventListener("change", () => filterBreeds(breeds))
}

function filterBreeds(breeds) {
    while (breedsList.firstChild) {
        breedsList.removeChild(breedsList.firstChild);
    }
    let selection = event.target.value;
    for(let breed in breeds) {
        if (breed[0] === selection) {
            addItem(breed)
        }
    }
}

function addItem(breed) {
    let item = document.createElement("li");
    item.textContent = breed;
    breedsList.appendChild(item);

    item.addEventListener("click", () => {
        event.target.style.color = "red"
    });
}

main()