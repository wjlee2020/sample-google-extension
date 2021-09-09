import getUnsplashImages from "./components/getPhotos.js";
import getRecentWorldNews from './components/getNews.js';
import showClock from "./components/getClock.js";
import getWeather from "./components/getWeather.js";

// show time
setInterval(showClock, 1000);
// api calls
getRecentWorldNews();
getUnsplashImages();
getWeather();