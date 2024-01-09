const userState = {
    name:null,
    id:null,
    favourites:[],
    cartItems:[]
};
    
    const userReducer = (state = userState, action) => {
      switch (action.type) {

        case 'INITIALIZE_USER':
        return {
            ...state,
            id: action.payload.id,
            name: action.payload.name
          };

        case "INITIALIZE_FAVOURITES":
          return {
            ...state,
            favourites:action.payload
          }

        case "INITIALIZE_CARTITEMS":
          return {
            ...state,
            cartItems:action.payload
          }

        case "ADD_TO_FAVOURITES":
          return {
            ...state,
            favourites:[...state.favourites,action.payload]
          }

        case "REMOVE_FROM_FAVOURITES":
          state.favourites=state.favourites.filter((val)=>val!=action.payload);
          return {
            ...state
          }

        case "ADD_TO_CARTITEMS":
          return {
            ...state,
            cartItems:[...state.cartItems,action.payload]
          }

        case "REMOVE_FROM_CART":
          state.cartItems=state.cartItems.filter((val)=>val!=action.payload)
          return {
            ...state
          }

        default:
          return state;
      }
    };
    
  
    export default userReducer;