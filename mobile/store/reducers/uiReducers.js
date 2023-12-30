const uiState = {
    isShopScreen:null
};
    
    const uiReducer = (state = uiState, action) => {
      switch (action.type) {

        case 'SET_SHOPSCREEN':
        return {
            ...state,
            isShopScreen:action.payload
          };
        default:
          return state;
      }
    };
    
  
    export default uiReducer;