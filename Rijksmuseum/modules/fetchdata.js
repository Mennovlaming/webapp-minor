import $ from "./querySelector.js"
import renderData from "./render.js"

const apiURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=wJjmayJK'
const loader = document.querySelector("section:first-of-type")
const section = $('section:nth-of-type(2')

function fetchData (){
    fetch(apiURL)
                    .then(response => response.json())
                    .then(data => {
                     
                     loader.style.display = 'none';

                    // changeHTML(data) 
                    console.log(data)
                        // Set global state of articles;
                        window.articles = data.artObjects;
                        renderData(window.articles);
                
                    })

                    .catch(error => {
                        // Handle errors
                        console.error(error);
                    
                        // Hide the loading state
                         loader.style.display = 'none';
                      });
}



export default fetchData 