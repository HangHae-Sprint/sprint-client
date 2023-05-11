import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CSS from "./component/style";
import MenuBar from "./MenuBar";

const Header = ({ setFilterType }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()
  const homeIconButtonHandler = () => {
    navigate('/')
  }

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <CSS.Header>
        <CSS.HeaderTitle>SPRINT</CSS.HeaderTitle>
        <MenuBar
          isActive={isActive}
          toggleMenu={toggleMenu}
          setFilterType={setFilterType}
        />
        <CSS.HomeIconBox>
        <CSS.HomeIcon onClick={homeIconButtonHandler}/>
        </CSS.HomeIconBox>
      </CSS.Header>

    </div>
  );
};

export default Header;
