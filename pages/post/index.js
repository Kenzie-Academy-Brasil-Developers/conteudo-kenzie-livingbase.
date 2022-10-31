import { getPostById } from "../../scripts/request.js"

const btnHome = document.getElementById('home')
btnHome.addEventListener('click', event => {
    window.location.href = '../home/index.html'
})

const backTop = document.querySelector('.back_top')
backTop.addEventListener('click', event => {
    window.scrollTo(0,0);
})

const postId = async function () {
    const postElements = await getPostById()
    const post = document.querySelector('.post')
    console.log(postElements)
    const postTitleContainer = document.createElement('div')
    const postTitleContainerTexts = document.createElement('div')
    const postTitle = document.createElement('h1')
    const postDescription = document.createElement('p')
    const postBodyContainer = document.createElement('div')
    const postImg = document.createElement('img')
    const postContent = document.createElement('p')

    postTitle.innerText = postElements.title
    postDescription.innerText = postElements.description
    postImg.src = postElements.image
    postContent.innerText = postElements.content

    post.classList = 'post flex flex-column align-center justify-center'
    postTitleContainer.classList = 'post_title_container flex align-center justify-center'
    postTitleContainerTexts.classList = 'post_title_container_texts flex flex-column gap1'
    postTitle.classList = 'post_title text1'
    postDescription.classList = 'post_description text2'
    postBodyContainer.classList = 'post_body flex flex-column align-center justify-center'
    postImg.classList = ''
    postContent.classList = 'post_content text2'

    postTitleContainerTexts.append(postTitle, postDescription)
    postTitleContainer.appendChild(postTitleContainerTexts)
    postBodyContainer.append(postImg, postContent)
    post.append(postTitleContainer, postBodyContainer)


}
postId()

const backHomeByCategory = function () {
    const categoriesToBack = document.querySelectorAll('.filter_buttons');
    console.log(categoriesToBack)
    categoriesToBack.forEach(button => {
        button.addEventListener('click', event => {
        event.preventDefault()
        const filter = button.innerText
        localStorage.setItem('filter', `${filter}`)
        window.location.href = '../home/index.html'
    })
    })
}
backHomeByCategory()