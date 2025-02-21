import { useRef, useState } from "react";
import React from "react";
import validate from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const emailId = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const isDataValid = validate(emailId.current.value, password.current.value);
    if (isDataValid === null) {
      setErrorMessage(null);
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value
        ).then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        });
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        };
      } else {
        signInWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            console.log("Signed In user:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setErrorMessage(errorMessage);
          });
      }
    } else {
      setErrorMessage(isDataValid);
      return;
    }

    console.log(isDataValid);
    console.log(emailId);
    console.log(password);
    return;
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <Header></Header>
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-96 p-10 bg-black/70 rounded-lg shadow-lg text-white backdrop-blur-md">
        <h1 className="text-4xl font-semibold text-center mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <fieldset className="mb-4">
            <input
              type="text"
              ref={fullName}
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Full Name"
            />
          </fieldset>
        )}
        <fieldset className="mb-4">
          <input
            type="text"
            ref={emailId}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Email Address"
          />
        </fieldset>
        <fieldset className="mb-4">
          <input
            type="password"
            ref={password}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Password"
          />
        </fieldset>{" "}
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-4 cursor-pointer"
          onClick={() => {
            handleLogin();
            if (errorMessage !== "") {
              setTimeout(() => {
                setErrorMessage(null);
              }, 2000);
            }
          }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        <p className="text-center text-sm mt-4">
          {isSignUp ? "Already have an account ? " : "New to Netflix?"}{" "}
          <button
            className="text-red-500 hover:underline cursor-pointer"
            onClick={() => {
              isSignUp ? setisSignUp(false) : setisSignUp(true);
            }}
          >
            {isSignUp ? "Sign in here" : "Sign Up Now"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
