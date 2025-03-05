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
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_PHOTO_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-md px-4 sm:px-6 lg:px-8">
        <div className="bg-black/80 sm:bg-black/70 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>

          <div className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                ref={fullName}
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Full Name"
              />
            )}

            <input
              type="text"
              ref={emailId}
              className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email Address"
            />

            <input
              type="password"
              ref={password}
              className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {errorMessage}
            </p>
          )}

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 rounded mt-4 sm:mt-6 transition-all duration-300"
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

          <p className="text-center text-sm mt-4 text-gray-300">
            {isSignUp ? "Already have an account? " : "New to Netflix? "}
            <button
              className="text-red-500 hover:underline cursor-pointer"
              onClick={() => {
                setisSignUp(!isSignUp);
              }}
            >
              {isSignUp ? "Sign in here" : "Sign Up Now"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
