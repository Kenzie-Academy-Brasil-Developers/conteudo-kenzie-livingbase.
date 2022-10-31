function autoClickCategory () {
    const autoClick = document.querySelectorAll('.li_filter')
  
    autoClick.forEach(element => {
        if(localStorage.getItem('filter') != '' && element.textContent == (localStorage.getItem('filter'))){
            element.click()
        }
    }
    )
}
autoClickCategory()

export {
    autoClickCategory
}

const backTop = document.querySelector('.back_top')
backTop.addEventListener('click', event => {
    window.scrollTo(0,0);
})