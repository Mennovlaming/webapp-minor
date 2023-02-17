// variables
const title = $('h2')
const artist = $('h3')
const place = $('p')
const image = $('img')
const URL = 'https://www.rijksmuseum.nl/api/nl/collection?key=wJjmayJK'
// logica
fetchData()


// functions
function fetchData (){
    const artData = fetch(URL)
                    .then(response => response.json())
                    .then(data => {

                        
                        
                    changeHTML(data) 
                    console.log(data.artObjects[1])
                    })
}
// function makeList () {
//     fetchData(URL)
//     .then(response => response.json())
//     .then(data => {
//         var artData = data

//         artData.forEach((artObjects) => {
//             artObjects.html = `<li>
//             <h2>${artObjects.title}</h2>
//             <p>${artObject.sprincipalOrFirstMaker}</p>
           
//             </li>`;
//             list.insertAdjacentHTML("beforeend", allEventsHTML);
//         })
//     })
// }
function changeHTML(data) {
    const dataTitle = data.artObjects[0].title
    const dataArtist = data.artObjects[0].principalOrFirstMaker
    const dataPlace = data.artObjects[0].productionPlaces
    

    title.innerHTML = dataTitle
    artist.innerHTML = dataArtist
    place.innerHTML = dataPlace

    image.src = data.artObjects[0].webImage.url

}

function $ (element) {
    return document.querySelector(element)
}
