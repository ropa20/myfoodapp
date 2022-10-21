import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RecipeList from './recipeList';
import './recipeList.css'

const Specials=()=> {
    const [recipeList, updateRecipeList] = useState([]);
    const APP_ID= "cae8a2bb";
    const APP_KEY= "c85221f1352260a5ef5c360083b3e3fc"; 
    
    useEffect(() => { //better to use useeffect for static data output
        axios.get(`https://api.edamam.com/search?q=egg&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then((response) => {
          updateRecipeList(response.data.hits);
        });
      }, []);

   
  return (
        <div className='scroll'>
            {recipeList.length>0 && <RecipeList recipeObj = {recipeList} />}
        </div>
  )
}

export default Specials;