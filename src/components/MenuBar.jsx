import React from "react";
import styled from "styled-components";

const MenuBar = ({ isActive, toggleMenu }) => {
  return (
    <MenuBarContainer>
      <HamburgerButton className="hamburger" zIndex={100} onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>
      <MenuBarDropdown className={`menu-bar ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">스터디 만들기</a>
          </li>
          <li>
            <a href="#">프로젝트 만들기</a>
          </li>
        </ul>
      </MenuBarDropdown>
    </MenuBarContainer>
  );
};

export default MenuBar;

const MenuBarContainer = styled.div`
  position: relative;
`;

const HamburgerButton = styled.button`
  display: inline-block;
  z-index: ${(props) => props.zIndex || "auto"};
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;

const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #333;
`;

const MenuBarDropdown = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &.active {
    transform: translateX(0);
  }

  ${MenuBarContainer}.active & {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-radius: 3px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #eee;
    }
  }
`;
