//async, await

const getImagen = async() => {
    try{
        const apiKey = 'FWoJCqKOhIbkbixjWFIi9ACqmZYYOfYs';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json();
        const {url} = data.images.original;
        const images = document.createElement('img');
        images.src = url;
        document.body.append(images);
    }catch(error){
        console.log(error);
    }
}

getImagen();