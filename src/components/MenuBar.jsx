import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listRefer } from "../redux/modules/sprintMenu";
import * as CSS from "./component/style";
import { Button } from "./component/style";

const MenuBar = ({ isActive, toggleMenu }) => {
  const [isMySprintOpen, setIsMySprintOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('token'))
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleMySprint = () => {
    setIsMySprintOpen(!isMySprintOpen);
  };

  const handleMyMakeSprintProjectClick = () => {
    dispatch(listRefer("MyMakeSprint"));
    navigate("/main");
  };

  const handleParticipateSprintClick = () => {
    dispatch(listRefer("ParticipateSprint"));
    navigate("/main");
  };
  const handleAllListClickHandler = () => {
    dispatch(listRefer("all"));
    navigate("/main");
  }
  const logoutOnClickHandler = () =>{
    Cookies.remove('token')
    setIsLoggedIn(false)
    navigate('/main')
  }
  const Editor = () => {
    if(!isLoggedIn){
      alert('로그인 후 이용 가능합니다.')
      return;
    }
    navigate('/editor')
  }

  return (
    <CSS.MenuBarContainer>
      <CSS.HamburgerButton className="hamburger" zIndex={100} onClick={toggleMenu}>
        <CSS.HamburgerLine />
        <CSS.HamburgerLine />
        <CSS.HamburgerLine />
      </CSS.HamburgerButton>
      <CSS.MenuBarDropdown className={`menu-bar ${isActive ? "active" : ""}`}>
        <ul>
          <CSS.MenuBarTopContainer>

            {!isLoggedIn && <li className="btn-group">
              <Link to="/login">
                <Button type="positive">Log in</Button>
              </Link>
              <Link to="/signUp">
                <Button type="positive">Join us</Button>
              </Link>
            </li>}
            {isLoggedIn && <li className="btn-group">
                <Button size='100' type="negative" onClick={logoutOnClickHandler}>Log out</Button>
            </li>}

            <div style={{ height: "50px" }}></div>
              <Button size='160' type="positive" onClick={Editor}> 스터디 / 프로젝트 만들기</Button>


          </CSS.MenuBarTopContainer>


          <Button size='160' type="positive" onClick={handleAllListClickHandler}>전체 리스트</Button>
          <div style={{ height: "50px" }}></div>

          <li>
            <Button href="#" onClick={toggleMySprint}>
              My Sprint {isMySprintOpen ? "▲" : "▼"}
            </Button>

            <div style={{ height: "10px" }}></div>
            {isMySprintOpen && (
              <div>
                <Button type="negative" onClick={handleMyMakeSprintProjectClick}>
                내가 만든 SPRINT
                </Button>
                <div style={{ height: "20px" }}></div>
                <Button type="negative" onClick={handleParticipateSprintClick}>
                  참여중인 SPRINT
                </Button>
              </div>
            )}
          </li>
        </ul>
        <footer>
          항해99 14기 14조<br/><br/>
          SPRINT <br/>
          (단거리달리기)<br/><br/>
          최유리 최민재<br/><br/>
          강재형 정종현<br/>
          김민규 황인용<br/><br/>
          
        </footer>
      </CSS.MenuBarDropdown>

    </CSS.MenuBarContainer>
  );
};

export default MenuBar;


