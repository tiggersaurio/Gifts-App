
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=vs2nv5LQPeAt06DsY2Z5nRoKoQwehmn3&q=${ category }&limit=10`;
    console.log(url)
    const resp = await fetch(url);
    const { data } = await resp.json(); 
    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url,
        rating: img.rating, 
        username: img.username,
        import_datetime: img.import_datetime

    }));

    return gifs;
}
