import React from "react";
import { useMoralis } from "react-moralis";
import Button from "@mui/material/Button";

const AuthButton = (props) => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log into Resume Chain" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user ? user.get("ethAddress") : "no-user");
        })
        .catch(function (error) {
          console.log(error);
        });
      //TODO : Retrieve user data from blockchain and update the state in the store
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };
  return (
    <>
      {isAuthenticated ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={logOut}
          {...props}
        >
          Logout : {user.get("ethAddress").substring(0, 10) + "..."}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={login}
          {...props}
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default AuthButton;
