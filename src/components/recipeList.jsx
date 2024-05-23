import React, { useState } from "react";
import { Modal } from "antd";
import { addWish, deleteWish } from "../actions/wishActions";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import WishList from "../components/wishList";
// import './recipeList.css';

const RecipeList = (props) => {
  const wish = useSelector((state) => state.wishReducer.wish);
  console.log(wish);
  const [heart, setheart] = useState(false);
  const dispatch = useDispatch();
  const recipeObj = props.recipeObj;
  // console.log("wish", wish);
  // console.log("recipe", props);

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
  const handleWishlist = (item) => {
    if (wish.some((e) => e.label === item.recipe.label)) {
      /* wish contains the element we're looking for */
      console.log("nope");
      dispatch(deleteWish(item.recipe));
    } else {
      console.log("come on in");
      dispatch(addWish(item.recipe));
    }
  };

  const isWished = (item) =>
    wish.length > 0
      ? wish.some((e) => e.label === item.recipe.label)
        ? "fa-solid fa-heart fa-2xl wished-item"
        : "fa-solid fa-heart fa-2xl not-wished-item"
      : "fa-solid fa-heart fa-2xl not-wished-item";

  return (
    // <div className='s-container'>
    recipeObj?.map((elem, index) => {
      // console.log("elem", elem.recipe.label);
      // console.log("elem", elem);
      // {test(elem.recipe)}
      return (
        <div className="bigcards">
          <div className="big-card1">
            <div class="a-box">
              <div class="img-container">
                {/* <i className={isWished(recipeObj)} onClick={()=> wish.includes(recipeObj) ? console.log("nope") : dispatch(addWish(recipeObj))}></i> */}
                <i
                  className={isWished(elem)}
                  onClick={() => handleWishlist(elem)}
                ></i>
                <div className="inner-skew">
                  <img src={elem.recipe.image} />
                </div>
              </div>
              <div class="text-container">
                <div className="h3">{elem.recipe.label}</div>
                <p>
                  <button className="recipe" type="primary" onClick={showModal}>
                    Ingredients
                  </button>
                  <Modal
                    visible={isModalOpen}
                    title="Ingredients"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <button
                        className="recipe"
                        key="back"
                        onClick={handleCancel}
                      >
                        OK
                      </button>,
                      <button
                        className="recipe"
                        key="submit"
                        type="primary"
                        onClick={() => window.open(elem.recipe.url)}
                      >
                        Full Recipe
                      </button>,
                    ]}
                  >
                    <table className="modal">
                      <thead>
                        <th className="c1">Ingredients</th>
                        <th className="c2">Weight</th>
                      </thead>
                      <tbody>
                        {elem.recipe.ingredients.map((ingredientsObj) => (
                          <tr>
                            <td>{ingredientsObj.text}</td>
                            <td>{ingredientsObj.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Modal>
                  <button
                    className="recipe"
                    type="button"
                    onClick={() => window.open(elem.recipe.url)}
                  >
                    Full Recipe
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    })

    // </div>
  );
};

export default RecipeList;
