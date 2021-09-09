const newsUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GETYOURKEY';
const newsTitle = document.getElementById('news');

let count = 0;

const getRecentWorldNews = async () => {
    try {
        let response = await fetch(newsUrl)
        let data = await response.json()
        let articleResults = data.results
        // console.log(articleResults)
        let news = articleResults.map(article => article.title)
        let articleUrls = articleResults.map(article => article.short_url)
        let newsInterval = setInterval(() => {
            let articleUrlAnchor = document.getElementById('news-url')
            articleUrlAnchor.href = articleUrls[count]
            newsTitle.textContent = news[count]
            count++
            if (count >= 34) {
                count = 0;
            }
        }, 3000)

        // newsTitle.addEventListener('mouseenter', () => {
        //     console.log('ennter')
        //     clearInterval(newsInterval);
        // })

    } catch (e) {
        console.log(e)
        newsTitle.textContent = 'Currently not available'
    }
}

export default getRecentWorldNews;