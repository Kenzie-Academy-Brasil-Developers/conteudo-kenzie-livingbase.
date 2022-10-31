const ulCards = document.getElementById('ulPosts')

function renderCards (array) {
        array.forEach(element => {
        const li = document.createElement('li');
        const cardContainer = document.createElement('div');
        const cardImg = document.createElement('img')
        const cardTextsContainer = document.createElement('div')
        const cardTitle = document.createElement('h2');
        const cardDescription = document.createElement('p');
        const cardButton = document.createElement('button')

        li.classList = 'flex'
        cardImg.src = element.image
        cardImg.classList = 'card_img'
        cardTitle.innerText = element.title;
        cardDescription.innerText = element.description;
        li.classList = 'card'
        cardButton.innerText = 'Acessar conteúdo'

        cardDescription.classList = 'text2'
        cardContainer.classList = 'card_container flex flex-column'
        cardButton.classList = 'btn_access'
        cardTitle.classList = 'card_title text5'
        cardTextsContainer.classList = 'card_text_container flex flex-column align-start'

        cardButton.addEventListener('click', event => {
            localStorage.setItem('postId', JSON.stringify(element.id));
            window.location.href = '../post/index.html'

        })
        cardTextsContainer.append(cardTitle, cardDescription, cardButton)
        cardContainer.append(cardImg, cardTextsContainer);
        li.appendChild(cardContainer);
        ulCards.appendChild(li);
    });
}

export {renderCards}