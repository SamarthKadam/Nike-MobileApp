const userState = {
    name:null,
    id:null
};
    
    const userReducer = (state = userState, action) => {
      switch (action.type) {

        case 'INITIALIZE_USER':
        return {
            ...state,
            id: action.payload.id,
            name: action.payload.name
          };
        

        default:
          return state;
      }
    };
    
  
    export default userReducer;