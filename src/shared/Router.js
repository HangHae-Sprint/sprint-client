import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import Editor from "../components/Editor";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../page/Home";
import Main from "../page/Main";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="editor" element={<Editor />} />
        <Route path="main" element={<Main />} />
        <Route path="/main/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
