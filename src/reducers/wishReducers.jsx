// holds your current state and action
const initialData={
    wish:[], 
}

const wishReducer=(state=initialData, action)=>{
    console.log("state", state);
    switch(action.type)
    {
        case "ADD_WISH" :
        return{
            ...state, //previos state
            wish:[...state.wish, action.data]
        }
        
        case "DELETE_WISH" :
        console.log(action.data.label);
        console.log(state.wish);
        const newList=(state.wish.filter(e => e.label !== action.data.label))
            return{
                ...state, //previos state
                wish : newList
            }
    
        default: {
            return {
                ...state
            }
        }
    }
}
export default wishReducer;