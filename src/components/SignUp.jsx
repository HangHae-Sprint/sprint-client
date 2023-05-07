import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import Button from './component/Button'
import useInput from './Hooks/useInput'
import * as CSS from '../components/component/style'
import Header from './Header'
import { useMutation } from 'react-query'
import { handleSignUp } from '../axios/api'


const SignUp = () => {
  const [username,onChangeUserIdHandler]= useInput('')
  const [password,onChangePasswordHandler]= useInput('')
  const [nickname,onChangeNicknameHandler]= useInput('')
  const [email,onChangeEmailHandler]= useInput('')
  const [checkPassword,onChangeCheckPasswordHandler]= useInput('')

  const [warningNotice, setWarningNotice] = useState('')
  const navigate = useNavigate()
  const mutation = useMutation(handleSignUp,{
    onSuccess: () =>{
      alert('회원가입 성공')
      navigate('/login')
    },
    onError:(error)=>{
      alert(error.message)
    }
})

  const newSignUpPost = {
    username,
    password,
    nickname,
    email,
  }

  const onClickSingUpHandler= () =>{
    if(username.length<1){
      setWarningNotice('아이디를 입력해주세요.')
      return;
    }
    if(password.length<1){
      setWarningNotice('비밀번호를 입력해주세요.')
      return;
    }
    if(password !== checkPassword){
      setWarningNotice('비밀번호가 일치하지 않습니다.')
      return;
    }
    if(nickname.length<1){
      setWarningNotice('닉네임을 입력해주세요.')
      return;
    }
    if(email.length<1){
      setWarningNotice('이메일을 입력해주세요.')
      return;
    }
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
    <CSS.Input value={password} onChange={onChangePasswordHandler} placeholder='비밀번호'/>
    <CSS.Input value={checkPassword} onChange={onChangeCheckPasswordHandler} placeholder='비밀번호 확인'/>
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

