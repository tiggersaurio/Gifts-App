import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GilGrid } from './components/GilGrid'


export const ControlGiftsApp = () => {
  
    const [categories, setCategories] = useState([]);


    const onAddCategory = (newCategory) => {

      if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }


  return (
    <>
    <h1>Control Gifts App</h1>
    <div className='container' >
    <AddCategory onNewCategory = {(event) => onAddCategory(event)}/>

    
        { categories.map(category => (
          <GilGrid key = { category } category = {category}/>
        )
            

        )}
</div>
    </>
    
  )
}
