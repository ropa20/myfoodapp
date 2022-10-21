export const addWish = (data) => {

    return(dispatch)=> {
        dispatch({
            type:"ADD_WISH", //WHAT TO DO
                data
            })
    }
}

export const deleteWish= (data)=>{
    return(dispatch)=> {
        dispatch({
            type:"DELETE_WISH", //WHAT TO DO
                data
            })
    }
}
