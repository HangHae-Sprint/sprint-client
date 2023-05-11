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
    throw new Error(error.response.data.msg);

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
    throw new Error(error.response.data.msg);
  }
};

//sprint 추가
const addSprint = async (newSprint) => {
  await jwtInstance.post("/api/sprint", newSprint);
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

//sprint 삭제
const deleteSprint = async (sprintId) => {
  try {
    const response = await jwtInstance.delete(`/api/sprint/${sprintId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//신청하기
const ApplySprint = async (props) => {
  try {
    const response = await jwtInstance.post(`/api/sprint/join/${props.id}`, {
      position: props.position,
      link: props.link,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//sprint 좋아요
const isLikePost = async (props) => {
  await jwtInstance.post(`/api/like/sprint/${props}`);
};




//내가 만든 스프린트 조회 
const myMakeSprint = async () => {

  try {
    const response = await jwtInstance.get(`/api/sprint/mysprint`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 참여중인 스프린트 조회
const participateSprint = async () => {
  try {
    const response = await jwtInstance.get(`api/sprint/joinlist`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 댓글 작성(등록)
const writeComment = async (props) => {
  console.log(props)
  try {
    const response = await jwtInstance.post(`/api/${props.sprintId}`, {
      username: props.username,
      nickname: props.nickname,
      content: props.content
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 댓글 삭제하기
const deleteComment = async (sprintId, commentId) => {
  try {
    const response = await jwtInstance.delete(`/api/${sprintId}/${commentId}`);
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
  ApplySprint,
  writeComment,
  deleteComment,
  deleteSprint,
  myMakeSprint,
  participateSprint
};
