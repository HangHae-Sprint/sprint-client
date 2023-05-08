import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

//회원가입 API
const handleSignUp = async (props) => {
  console.log(props);
  try {
    const response = await instance.post(`/api/user/register`, {
      username: props.username,
      password: props.password,
      nickname: props.nickname,
      email: props.email,
    });
    return response.data;
  } catch (error) {
    throw new Error("회원가입 실패 ");
  }
};

// //로그인 API
// const handleLogin = async (props) => {
//   try {
//     const response = await instance.post(`/login`, {
//       id: props.id,
//       password: props.password
//     })
//     return response.data
//   }
//   catch (error) {
//     if (error.response.status !== 201) {
//       return error.response.data
//     }
//   }
//   // throw new Error(error.message)
// }

// //인가 API
// const getLoginData = async () => {
//   const accessToken = Cookies.get('token');
//   const response = await instance.get(`/user`, {
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${accessToken}`,
//     }
//   })

//   return response
// }
export { handleSignUp };
