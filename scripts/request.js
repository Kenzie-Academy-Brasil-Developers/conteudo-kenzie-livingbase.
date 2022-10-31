const baseUrl = 'https://m2-api-living.herokuapp.com/news'


async function fetchPage (page) {
    const request = await fetch(`${baseUrl}?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const response = await request.json()
    localStorage.setItem(`posts${page}`, JSON.stringify(response.news))
    return response.news
}

async function getPostById () {
    const postId = await JSON.parse(localStorage.getItem('postId'))
    const request = await fetch(`${baseUrl}/${postId}`)
    const response = await request.json()
    return response
}


export{
    fetchPage,
    getPostById
}