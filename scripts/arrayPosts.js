import { fetchPage } from "./request.js"

async function getAllPosts () {
    fetchPage(0)
    fetchPage(1)
    fetchPage(2)

    const arr0 = JSON.parse(localStorage.getItem(`posts0`))
    const arr1 = JSON.parse(localStorage.getItem(`posts1`))
    const arr2 = JSON.parse(localStorage.getItem(`posts2`))
    console.log(arr0)
    console.log(arr1)
    console.log(arr2)

    const allPosts = []
    allPosts.push(...arr0, ...arr1, ...arr2)
    console.log(allPosts)    
    localStorage.setItem('allPosts', JSON.stringify(allPosts))
    console.log(allPosts)
    return allPosts
} 
getAllPosts()

const arrayCards = JSON.parse(localStorage.getItem('allPosts'))



