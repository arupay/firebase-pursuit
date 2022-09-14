//React useContext()
//We need to set up a context that will expose a global state vlue to all our components
//Essentially, if a user is held in context state he can navigatie inside our applicaiton, otherwise
//he will be rerouted to login page

//This file is responsible for listening for any changes in firebase auth object and then updating
//the state in our context to be consumed by our components

import React, { useEffect, useState, createContext } from "react";
import { auth } from "../Firebase";

export const UserContext = createContext(null);
//This is a context that our components will consume -- initialized with null
// Note: When invoked, createContext(), creates a new component for our context . After creating a context we have accesss to a component anywhere in our app called <UserContext.Provider />. Any component nested within this component has access to special attribute on <UserContext.Provider /> called value.

// Now that we have a USERCONTEXT we need to :
// Create UserProvider component that will handle UserContext state.
// Render our UserContext.Provider inside of our UserProvider
// Import our auth instance from services/firebase.js, listen for changes, and update state accordingly

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //listen for changes
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      {/* // the props.children will render any value that is passed to our
      //component without us specifically invoking those // values in our
      template */}
      <div>{props.children}</div>
    </UserContext.Provider>
  );
  //   Note: the onAuthStateChanged() method creates something called an Observer from a library called RXJS. This Observer listens for any changes on the object it was called on will fire whatever callback we specify once the Observer signals a change.
};
