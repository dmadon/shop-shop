import React,{createContext,useContext} from "react";
import {useProductReducer} from './reducers';

// create the container to hold our global state data and functionality so we can provide it throughout our app:
const StoreContext = createContext();
// Every Context object comes with two components, a Provider and Consumer.
// The Provider is a special type of React component that we wrap our application in
// so it can make the state data that's passed into it as a prop available to all other components.
// Here, we are destructuring the Provider component from our StoreContext object we just created.
const {Provider} = StoreContext;

const StoreProvider = ({value=[],...props}) => {
    const [state, dispatch] = useProductReducer({
        products:[],
        cart:[],
        cartOpen:false,
        categories:[],
        currentCategory:''
    });

    // use this to confirm it works
    console.log(state);
    return <Provider value={[state,dispatch]} {...props} />
};

const useStoreContext = () => {
    // the useContext React hook allows us to use the state created from the createContext function
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };