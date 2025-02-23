import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { removeUser } from "../../utils/userSlice";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/login");
        dispatch(removeUser());
      }
    });

    return;
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
