import { useRef, useState } from "react";
import React from "react";
import validate from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BACKGROUND_PHOTO_URL } from "../../utils/constants";

const Login = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const emailId = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const isDataValid = validate(emailId.current.value, password.current.value);
    if (isDataValid === null) {
      setErrorMessage(null);
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            const updated_user = updateProfile(user, {
              displayName: fullName.current.value,
            });
            const { uid, email, displayName } = updated_user;
            dispatch(addUser({ uid, email, displayName }));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorMessage);
          });
      }
    } else {
      setErrorMessage(isDataValid);
      return;
    }
    return;
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0">
        <img
          src={BACKGROUND_PHOTO_URL}
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
