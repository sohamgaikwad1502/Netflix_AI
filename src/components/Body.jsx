import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        console.log("Here i am");
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        ></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
