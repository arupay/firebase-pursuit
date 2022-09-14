import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Firebase";

export const Login = () => {
  const user = useContext(UserContext);
  const history = useNavigate();
  useEffect(() => {
    if (user) {
      history("/loggedInPage");
    }
  }, [user, history]);

  return (
    <div>
      <section>
        <div>
          <button onClick={signInWithGoogle}>Sign in With google</button>
          <button onClick={signOut}> sign out</button>
        </div>
      </section>
    </div>
  );
};
