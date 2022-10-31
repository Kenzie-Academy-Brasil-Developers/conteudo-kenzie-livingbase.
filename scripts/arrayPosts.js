import { fetchPage } from "./request.js"

async function getAllPosts () {
    fetchPage(0)
    fetchPage(1)
    fetchPage(2)

    const arr0 = JSON.parse(localStorage.getItem(`posts0`))
    const arr1 = JSON.parse(localStorage.getItem(`posts1`))
    const arr2 = JSON.parse(localStorage.getItem(`posts2`))

    const allPosts = []
    allPosts.push(...arr0, ...arr1, ...arr2)   
    localStorage.setItem('allPosts', JSON.stringify(allPosts))

    return allPosts
} 
getAllPosts()

const arrayCards = JSON.parse(localStorage.getItem('allPosts'))



