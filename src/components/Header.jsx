import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { gptPageStateChange } from "../../utils/gptSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userExist = auth.currentUser;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  };

  const handleGptPage = () => {
    dispatch(gptPageStateChange());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-b from-black to-transparent z-50">
      <img
        className="w-24 sm:w-32 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {userExist && (
        <>
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <div className="w-8 h-6 flex flex-col justify-between relative">
              <div
                className={`w-full h-1 bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-45 absolute top-2.5 left-0"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 absolute bottom-2.5 left-0"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-4">
            <button
              className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 cursor-pointer"
              onClick={handleGptPage}
            >
              GPT Search
            </button>
            <img
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border-2 border-gray-400 hover:border-white transition-all duration-300 cursor-pointer"
              src={
                userExist.photoURL ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt="User Profile"
            />
            <button
              className="bg-red-500 text-white hover:bg-red-600 text-sm sm:text-base md:text-xl px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md cursor-pointer transition-colors duration-300"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/90 md:hidden">
              <div className="flex flex-col items-center py-4 space-y-4">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                  onClick={handleGptPage}
                >
                  GPT Search
                </button>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-lg border-2 border-gray-400"
                    src={
                      userExist.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    }
                    alt="User Profile"
                  />
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
