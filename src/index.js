const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
	
	loadImages();
	loadBreeds();
	selectBreed();
	
});

function loadImages() {
		
	fetch(imgUrl)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			let container = document.getElementById("dog-image-container");
			let imageArray = json.message;
			
			imageArray.forEach(function(image) {
				let pic = document.createElement("img");
				pic.src = image;
				container.appendChild(pic);
			});
		})
}

function loadBreeds() {
	
	fetch(breedUrl)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			
			let list = document.getElementById("dog-breeds");
			let breedArray = Object.keys(json.message);
			
			breedArray.forEach(function(breed) {
				let item = document.createElement("li");
				item.textContent = breed;
				list.appendChild(item);
				item.addEventListener("click", function() {
					item.style.color = "blue";
				});
			});
		})
}

function selectBreed() {
	const dropdown = document.getElementById("breed-dropdown");
	
	dropdown.addEventListener("change", function() {
		const dropval = document.getElementById("breed-dropdown").value;		
		const list = document.getElementById("dog-breeds");
		const items = list.getElementsByTagName("li");
		
		for (let i = 0; i < items.length; i++) {			
			if ((items[i].textContent[0] === dropval)) {
				items[i].style.display = "";
			} else {
				items[i].style.display = "none";
			}			
		}
	});
}