const apiKey = 'FWoJCqKOhIbkbixjWFIi9ACqmZYYOfYs';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(response => response.json())
.then(({data}) => {
   //let url = data.data.images.original.url;
   //const url2 = data.data.images.original.url; SOLO HACE REFERENCIA AL OBJETO
    //console.log(url2);

    const {url} = data.images.original;
    
    const imagen = document.createElement('img');
    imagen.src = url;
    document.body.append(imagen);
   // console.log(url);

})
.catch(console.warn);

