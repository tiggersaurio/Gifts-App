
export const GifItem = ({ title, url, id, rating, username,import_datetime }) => {



  return (

   

<div className="card col-5 m-2 shadow-lg p-1 bg-body rounded" >
<img src={ url } alt= { title }  rat ={rating} className="card-img-top h-50 w-90 p-1 rounded" />
<div className="card-body text-center">
  <h5 className="card-title font-weight-bold ">{title}</h5>
  <p className="card-text"> <span>Autor: {username}</span> </p>
  <p className="card-text"> <span>Fecha: {import_datetime}</span> </p>
 
</div>
</div>


  )
}



