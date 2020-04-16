const axios = require("axios");

const sortby = 'download_count';
const getMovies = () => {
    return axios
    .get(`https://yts.mx/api/v2/list_movies.json?sort_by=${sortby}`)
    .then(res => {
        const movies = res.data.data.movies;
        return movies;
    }).then(movies => {
        movies.forEach(m => {
            if(m.year === 2018) {
                console.log(m.title);
            }
        })
    }).catch(error => {
        console.error(error);
    });
}

const seeMovie = () => {
    console.log("see moive");
}

const getMovies2 = async () => {
    try {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=${sortby}`);
        const movies = res.data.data.movies;
        movies.forEach(m => {
            if(m.year === 2018){
                console.log(m.title);
            }
        })
    } catch (e){
        console.log(e);
    }
}

const doWork = async () => {
    //console.log(await getMovies());
    console.log(await getMovies2());
    seeMovie();
}
doWork();

// callback 지옥 해결책 then 
// then 가독성 X ==> async awiat 으로 대채가능 