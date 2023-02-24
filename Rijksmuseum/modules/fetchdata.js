import $ from "./querySelector.js"
import renderData from "./render.js"

const apiURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=wJjmayJK'
const loader = document.querySelector(".loadingstate")
const section = $('section:nth-of-type(2')



function fetchData (){
    const artData = fetch(apiURL)
                    .then(response => response.json())
                    .then(data => {
                    
                    loader.style.display = 'none';

                    // changeHTML(data) 
                    console.log(data)

                    
                        renderData(data)
                
                    })

                    .catch(error => {
                        // Handle errors
                        console.error(error);
                    
                        // Hide the loading state
                        loader.style.display = 'none';
                      });
}



export default fetchData 