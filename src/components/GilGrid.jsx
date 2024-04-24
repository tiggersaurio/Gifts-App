import { useEffect,useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GilGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimages(newImages);
    }

    useEffect( () => {
        getImages();
    },[])

  return (
    <>
      <div className='my-2 text-center' >
        <h3 className='m-2'> <span className=' badge rounded-pill bg-dark text-white p-2'>{ category }</span> </h3>

        <div className="row justify-content-md-center">
            
               {images.map(( image ) =>(
                   
                     <GifItem key = { image.id} {...image}/>
               ))} 
            
        </div>
        </div>
    </>
  )
}




