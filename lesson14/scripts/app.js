const API_URL = "https://jsonplaceholder.typicode.com/photos"
const photosContainer = document.querySelector(".photos")
const loader = document.querySelector(".loader")

const data = fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
        title: "Hello World",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/600/92c952"
    })
})

async function fetchPhotos(){
    const response = await fetch(API_URL);

    if (response.status !== 200) {
        loader.innerHTML = "Failed to load"
        return;
    }

    loader.style.display = "none"

    return await response.json()
}

async function renderPhotos() {
    const photos = await fetchPhotos();

    for (let photo of photos) {
        const photoEl = document.createElement("div");
        const title = document.createElement("div")
        const img = document.createElement("img")

        photoEl.classList.add("photo")
        title.classList.add("title")

        title.innerHTML = photo.title;
        img.src = photo.url;

        photoEl.appendChild(title);
        photoEl.appendChild(img)

        photosContainer.appendChild(photoEl)
    }
}

renderPhotos()

// const data = {
//     name: "James",
//     password: "jamesbond"
// }

// const jsonString = JSON.stringify(data)

// console.log(jsonString);


// const jsonData = JSON.parse(jsonString)

// console.log(jsonData);
