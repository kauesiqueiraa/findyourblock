const filterElement = document.querySelector('.search input')

const cards = document.querySelectorAll('.cards .card')

const bnt = document.querySelector(".search-btn")

bnt.addEventListener("click", filterCards())

filterElement.addEventListener('input', filterCards)

function filterCards() {
    console.log('Alo')

    if (filterElement.value != '') {
        for (let card of cards) {
            let name = card.querySelector('h3');

            name = name.textContent.toLowerCase()

            let filterText = filterElement.value.toLowerCase()

            if (!name.includes(filterText)) {
                card.style.display = "none"
            } else {
                card.style.display = "block"
            }
        }
    }
    else {
        for ( let card of cards) {
            card.style.display = "block"
        }

    }

}