import React from "react";
import styled from "styled-components";
import { Button } from "./component/style";

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
          <li className="btn-group">
            <Button type="positive" href="#">
              로그인
            </Button>
            <Button type="positive" href="#">
              회원가입
            </Button>
          </li>
        </ul>
      </MenuBarDropdown>
    </MenuBarContainer>
  );
};

export default MenuBar;

const MenuBarContainer = styled.div`
  /* position: relative; */
  z-index: 1;
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
  /* margin-top: 130px; */
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* 그림자 효과 */

  &.active {
    transform: translateX(0);
  }

  ${MenuBarContainer}.active & {
    display: block;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 20px;
  }

  a {
    display: block;
    font-size: 16px;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-radius: 3px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #eee;
    }
  }
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    & > * {
      margin: 0 5px;
    }
  }
`;
