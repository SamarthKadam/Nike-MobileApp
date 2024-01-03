export const InitializeUser=(value)=>{
    return {
        type:"INITIALIZE_USER",
        payload:value
    }
}

export const InitializeFavourites=(value)=>{

    const data=value.map((val)=>val.id);
    return {
        type:"INITIALIZE_FAVOURITES",
        payload:data
    }
}

export const AddToFavourites=(value)=>{
    return {
        type:"ADD_TO_FAVOURITES",
        payload:value
    }
}