import React, { useState } from 'react';
import { Modal } from 'antd';
import { deleteWish } from "../actions/wishActions";
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import './recipeList.css';

const WishList = () => {
    const wish=useSelector((state)=>state.wishReducer.wish)
    const dispatch = useDispatch();
    //can write props.recipeObj as well
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    wish.map((elem, index)=>{
        if(wish.length > 0)
        {console.log(wish.length);
            return(
                <div className='wish-big-card1'>
                    <div class="wish-a-box">
                        <div class="wish-img-container">
                                <img src={elem.image} />
                        </div>
                        <div class="wish-text-container">
                            <div className='h3'>{elem.label}</div>
                            <p>
                            <button className='recipe' type="primary" onClick={showModal}>
                                Ingredients
                            </button>
                            <Modal
                                visible={isModalOpen}
                                title="Ingredients"
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={[
                                    <button className='recipe' key="back" onClick={handleCancel}>
                                        OK
                                    </button>,
                                    <button className='recipe' key="submit" type="primary" onClick={()=>window.open(elem.url)}>
                                        Full Recipe
                                    </button>,
                                  
                            ]}>
                                <table className='modal'>
                                    <thead>
                                        <th className='c1'>Ingredients</th>
                                        <th className='c2'>Weight</th>
                                    </thead>
                                    <tbody>
                                        {elem.ingredients.map((ingredientsObj)=> (
                                            <tr>
                                                <td>{ingredientsObj.text}</td>
                                                <td>{ingredientsObj.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Modal>                             
                            <button className='recipe' type="button" onClick={()=>window.open(elem.url)}>Full Recipe</button>
                            </p>
                            <button className="remove" onClick={()=> dispatch(deleteWish(elem))}>Remove</button>

                        </div>
                    </div>
                </div>
        )}   
        else{
            return (<div className='search-container'>
                        Empty
                    </div>)
        }
    }))
}

export default WishList;
