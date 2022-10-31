import { autoClickCategory } from "../pages/home/index.js"
import { renderCards } from "./cards.js"


const arrayCards = JSON.parse(localStorage.getItem('allPosts'))

function eventFilter () {
    const filterButtons = document.querySelectorAll('.li_filter')
    const mainList = document.getElementById('ulPosts')

    filterButtons.forEach(button => {
        button.addEventListener('click', () =>{
            mainList.innerHTML = ''
            const filter = button.innerText
            if(filter === 'Todos') {
                renderCards(arrayCards)
            }
            const filteredCards = filterCard(filter)
            renderCards(filteredCards)
        })
    })
}
eventFilter()


function filterCard(category) {
    const cardsFiltered = arrayCards.filter(elem => elem.category.includes(category))
        return cardsFiltered
    }
autoClickCategory()
