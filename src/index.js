console.log('%c HI', 'color: firebrick')

const imgURL = function fetchImg() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => imgs(json))
}

function imgs(pics){
    dogHouse = document.getElementById('#dog-image-container')
    pics.forEach(dog => {
        dogHouse.appendChild(dog)
    })
}