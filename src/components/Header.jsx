import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error occured", error);
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black to-transparent z-50">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-lg border-2 border-gray-400 hover:border-white transition-all duration-300 cursor-pointer"
            src={
              user.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="User Profile"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-xl p-2 rounded-md cursor-pointer transition-colors duration-300"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
