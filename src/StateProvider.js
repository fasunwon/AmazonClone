import React, {createContext, useContext, useReducer} from "react";

//prepares datalayer
export const StateContext = createContext();
//wrap app and provide datalayer to every component inside the app
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);