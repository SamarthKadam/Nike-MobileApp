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

        case "ADD_TO_CARTITEMS":
          return {
            ...state,
            cartItems:[...state.cartItems,action.payload]
          }

        default:
          return state;
      }
    };
    
  
    export default userReducer;