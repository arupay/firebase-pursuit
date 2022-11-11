import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Firebase";

export const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/loggedInPage");
    }
  }, [user, navigate]);

  return (
    <div>
      <section>
        <div>
          Text here
          <button onClick={signInWithGoogle}>Sign in With GOOGLE</button>
          <button onClick={logOut}> sign out</button>
        </div>
      </section>
    </div>
  );
};
