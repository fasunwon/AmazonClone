export const initialState={
    basket:[],
    user:null
};
//Selector
export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=>item.price + amount, 0);

//Keeping track of what enters and leaves the data layer
//redux 
const reducer = (state, action)=>{
    //console.log(action);
    switch(action.type){
        case'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            };
        case 'REMOVE_FROM_BASKET':
            //targeting its first occurence assuming the item was added more than once
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.title === action.title
            );
            //...state.basket means current item in basket
            let newBasket = [...state.basket];
            if(index >=0){
                //removes item in basket by 1 specified by its index in the array
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cannot remove Product (title: ${action.title}) due to its
                absence`)
            }
            return{
                ...state,
                basket:newBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
};

export default reducer;