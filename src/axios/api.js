import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Cookies.get("token"),
  },
});

//회원가입 API
const handleSignUp = async (props) => {
  try {
    const response = await instance.post(`/api/user/register`, {
      username: props.username,
      password: props.password,
      nickname: props.nickname,
      email: props.email,
    });
    return response.data;
  } catch (error) {
    //todo: 서버에서 예외처리 하면 추후 변경
    throw new Error("회원가입이 실패했습니다.");
  }
};

//로그인 API
const handleLogin = async (props) => {
  try {
    const response = await instance.post(`/api/user/login`, {
      username: props.username,
      password: props.password,
    });
    // return response.data

    const jwtToken = response.headers.get("Authorization");
    // const token = TokenExtractor(jwtToken)
    return jwtToken;
  } catch (error) {
    throw new Error(error.message);
  }
};

//sprint 추가
const addSprint = async (newSprint) => {
  await jwtInstance.post("/api/sprint", newSprint);
};

//sprint 상세조회
const detailSprint = async (props) => {
  try {
    const response = await jwtInstance.get(`/api/sprint/${props}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//sprint 수정
const detailModify = async (props) => {
  await jwtInstance.put(`/api/sprint/${props.id}`, {
    title: props.title,
    content: props.content,
  });
};

//신청하기
const ApplySprint = async (props) => {
  // console.log('props axios:', props)
  try {
    const response = await jwtInstance.post(`/api/sprint/join/${props.id}`, {
      position: props.position,
      link: props.link,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//sprint 좋아요
const isLikePost = async (props) => {
  await jwtInstance.post(`/api/like/sprint/${props}`);
};

//sprint All 조회
const allSprint = async () => {
  try {
    const response = await jwtInstance.get(`/api/sprint`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// My Study 조회
const myStudy = async () => {
  try {
    const response = await jwtInstance.get(`/api/sprint`);
    // const response = await jwtInstance.get(`/api/sprint/mystudy`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// My Project 조회
const myProject = async () => {
  try {
    const response = await jwtInstance.get(`/api/sprint`);
    // const response = await jwtInstance.get(`/api/sprint/myproject`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 댓글 작성(추가)
const writeComment = async () => {
  try {
    const response = await jwtInstance.post("/api/{sprintId}");
    return response.data;
  } catch (error) {
    // Handle the error if the comment could not be created
    throw new Error(error.message);
  }
};

// 댓글 삭제하기
const deleteComment = async (commentId) => {
  try {
    const response = await jwtInstance.delete(`/api/{sprintId}/{commentId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  handleSignUp,
  handleLogin,
  addSprint,
  detailSprint,
  detailModify,
  isLikePost,
  allSprint,
  myStudy,
  myProject,
  ApplySprint,
  writeComment,
  deleteComment,
};
