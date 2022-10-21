import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './recipeList';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Empty } from 'antd';

const Search=()=> {
    const [timeoutId, updateTimeoutId] = useState();
    const [recipeList, updateRecipeList] = useState([]);
    const [response, setResponse] = useState([]);
    const navigate = useNavigate();
    const wish=useSelector((state)=>state.wishReducer.wish)

    const APP_ID= "cae8a2bb"; 
    const APP_KEY= "c85221f1352260a5ef5c360083b3e3fc"; 
    const [searchString, setSearchString] = useState('');
    const fetchRecipe = async (searchString) => { //await means async
        if(searchString.length){
            const response = await axios.get(
                `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
                );
                setResponse(response.data.hits)
        }
    };
    const onTextChange = (event) => {
        setSearchString(event.target.value)
    }
    useEffect(()=>{
        if(searchString.length>0)
        {
            fetchRecipe(searchString)
        }
        else{
            updateRecipeList([])
        }
        
    },[searchString])

    useEffect(()=>{
        if(searchString.length>0 )
        {
            updateRecipeList(response)
        }
        else{
            updateRecipeList([])
        }
        
    },[searchString, response])


  return (
    <div>
        <div className='search'>
            <input className='search-bar' type="text" placeholder="  search" onChange={onTextChange}/>
            <button className='cart'>
            {(wish.length >0) ? <Link to='/wishlist' className='link'><i className="fa-solid fa-heart fa-2xl"></i></Link>: <Link to='/wishlistIsEmpty' className='link'><i className="fa-solid fa-heart fa-2xl"></i></Link>}
            </button>
        </div>
        <div >
            {(recipeList.length > 0) && <div className='search-container'>
            {(recipeList.length > 0) &&<RecipeList recipeObj={recipeList} />}
            </div>
            }
        </div>
    </div>
  )
}

export default Search;
                        