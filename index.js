const images = document.querySelector("image")
const lists = document.querySelector("ul li")

lists.forEach((e, i) => {
    e.addEventListener('click', () => {
        images.forEach((el) => {


            el.classList.remove("show")
        })
        lists.forEach((el) => {
            el.classList.remove('active')
        })
        e.classList.add('active')
        images[i].classList.add("show")
    });
})