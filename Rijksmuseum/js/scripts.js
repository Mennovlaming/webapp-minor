// variables
const title = $('h2')
const artist = $('h3')
const place = $('p')
const image = $('img')
const ul = $('ul')
const section = $('section:nth-of-type(2')
const apiURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=wJjmayJK'

const loader = document.querySelector(".loadingstate")
// logica
fetchData()

// functions
 function fetchData (){
    const artData = fetch(apiURL)
                    .then(response => response.json())
                    .then(data => {
                    
                    loader.style.display = 'none';

                    // changeHTML(data) 
                    console.log(data)

                    
                    for(let i = 0; data.artObjects.length; i++) {
                        section.insertAdjacentHTML ("beforeend", `
                        <article>
                            <h2>${data.artObjects[i].title}</h2>
                            <h3>${data.artObjects[i].principalOrFirstMaker}</h3>
                            <p>${data.artObjects[i].productionPlaces}</p>
                            <img src="${data.artObjects[i].webImage.url}" />
                        </article>
                        `)
                    }
                    })

                    .catch(error => {
                        // Handle errors
                        console.error(error);
                    
                        // Hide the loading state
                        loader.style.display = 'none';
                      });
}


console.log(loader)

function changeHTML(data) {
    const dataTitle = data.artObjects[0].title
    const dataArtist = data.artObjects[0].principalOrFirstMaker
    const dataPlace = data.artObjects[0].productionPlaces
    

    title.innerHTML = dataTitle
    artist.innerHTML = dataArtist
    place.innerHTML = dataPlace

    image.src = data.artObjects[0].webImage.url

}

// JS slice s1000 gebruiken om kleinere afbeeldingen te krijgen.

function $ (element) {
    return document.querySelector(element)
}
