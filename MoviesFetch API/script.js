// alert("hi");
// console.log('work');
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86d890b46amsh3552d85eb331ad5p144e05jsn302197b143ba',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};
async function getData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json()
            .then(data => {
                const list = data.d;
                console.log(list);
                list.map((item) => {
                    // console.log(item)
                    const name = item.l;
                    // console.log(name);
                    const poster = item.i.imageUrl;
                    // console.log(poster);
                    const movie = `<li><img src='${poster}'> <h2>${name}</h2></li>`
                    // console.log(movie);
                    document.querySelector('#movies').innerHTML += movie;
                })
            })

    } catch (error) {
        console.error(error);
    }
}
getData();