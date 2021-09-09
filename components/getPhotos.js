const mainBody = document.body;
const unsplashAuthor = document.getElementById('unsplash-author');
const unsplashDetail = document.getElementById('unsplash-detail');
const unsplashAnchor = document.getElementById('unsplash-anchor');

const imageUrl = 'https://api.unsplash.com/photos/random/?client_id=GETYOURKEY';
const getUnsplashImages = async () => {
    mainBody.style.background = '#aaaaaa';
    try {
        let response = await fetch(imageUrl)
        let data = await response.json()
        console.log(data)
        mainBody.style.backgroundImage = `url(${data.urls.full})`
        mainBody.style.backgroundSize = 'cover'
        mainBody.style.backgroundPosition = 'center'
        unsplashAuthor.textContent = `photo by: ${data.user.username}`
        unsplashAnchor.href = data.user.links.html
        unsplashDetail.textContent = data.user.location
    } catch (e) {
        console.log(e)
        mainBody.style.backgroundColor = '#aaaaaa'
    }
}

export default getUnsplashImages;