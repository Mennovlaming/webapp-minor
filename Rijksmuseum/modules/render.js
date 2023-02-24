// genereer HTML
import $ from "./querySelector.js"

const section = $('section:nth-of-type(2')

function renderData (data) {
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
}

export default renderData