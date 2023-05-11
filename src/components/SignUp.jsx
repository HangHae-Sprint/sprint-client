import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { handleSignUp } from '../axios/api'
import * as CSS from '../components/component/style'
import Button from './component/Button'
import Header from './Header'
import useInput from './Hooks/useInput'


const SignUp = () => {
  const [username,onChangeUserIdHandler]= useInput('')
  const [password,onChangePasswordHandler]= useInput('')
  const [nickname,onChangeNicknameHandler]= useInput('')
  const [email,onChangeEmailHandler]= useInput('')
  const [checkPassword,onChangeCheckPasswordHandler]= useInput('')

  const [warningNotice, setWarningNotice] = useState('')
  const navigate = useNavigate()
  const mutation = useMutation(handleSignUp,{
    onSuccess: (data) =>{
      alert(data.msg)
      navigate('/login')
    },
    onError:(error)=>{
      setWarningNotice(error.message)
    }
})

  const newSignUpPost = {
    username,
    password,
    nickname,
    email,
  }

  const onClickSingUpHandler= () =>{
    //숫자와 소문자로만 입력 정규표현식 
    const regex = /^[a-z0-9]+$/;
    //이메일형식으로 입력 정규표현식
    const emailRegex = /^\S+@\S+\.\S+$/;
    if(username.length<2 || !regex.test(username)){
      setWarningNotice('아이디를 영문 소문자 + 숫자로만 입력해주세요.')
      return;
    }
    if(password.length<1 || !regex.test(password)){
      setWarningNotice('비밀번호를 영문 소문자 + 숫자로만 입력해주세요.')
      return;
    }
    if(password !== checkPassword){
      setWarningNotice('비밀번호가 일치하지 않습니다.')
      return;
    }
    if(nickname.length<1 || !regex.test(username)){
      setWarningNotice('닉네임을 영문 소문자 + 숫자로만 입력해주세요.')
      return;
    }
    if(email.length<1 || !emailRegex.test(email)){
      setWarningNotice('올바른 이메일 주소를 입력해주세요.')
      return;
    }
    setWarningNotice('')
    mutation.mutate(newSignUpPost)
  } 
  return (
    <>
    <Header/>
    <CSS.Main>
      <CSS.LoginBox>
    <CSS.Title>회원가입</CSS.Title>
    <CSS.Form onSubmit={(e)=>e.preventDefault()}>
    <CSS.Input value={username} onChange={onChangeUserIdHandler} placeholder='아이디'/>
    <CSS.Input type='password' value={password} onChange={onChangePasswordHandler} placeholder='비밀번호'/>
    <CSS.Input type='password' value={checkPassword} onChange={onChangeCheckPasswordHandler} placeholder='비밀번호 확인'/>
    <CSS.Input value={nickname} onChange={onChangeNicknameHandler} placeholder='닉네임'/>
    <CSS.Input type='email' value={email} onChange={onChangeEmailHandler} placeholder='이메일'/>
    </CSS.Form>
    <CSS.WarningNotice>{warningNotice}</CSS.WarningNotice>
    <Button 
    onClick={onClickSingUpHandler}
    type='positive'
    size='200'
    >회원가입</Button>
    </CSS.LoginBox>
    </CSS.Main>
    </>
  )
}

export default SignUp;

