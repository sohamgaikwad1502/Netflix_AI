import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [isHomePage, setHomePage] = useState(true);
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black to-transparent z-50">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
