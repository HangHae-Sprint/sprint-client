import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import Button from './component/Button'
import useInput from './Hooks/useInput'
import * as CSS from '../components/component/style'
import Header from './Header'


const SignUp = () => {
  const [userId,onChangeUserIdHandler]= useInput('')
  const [password,onChangePasswordHandler]= useInput('')
  const [nickname,onChangeNicknameHandler]= useInput('')
  const [email,onChangeEmailHandler]= useInput('')
  const [checkPassword,onChangeCheckPasswordHandler]= useInput('')

  const [warningNotice, setWarningNotice] = useState('')

  const onClickSingUpHandler= () =>{
    if(userId.length<1){
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

  } 
  return (
    <>
    <Header/>
    <CSS.Main>
      <CSS.LoginBox>
    <CSS.Title>회원가입</CSS.Title>
    <CSS.Form>
    <CSS.Input value={userId} onChange={onChangeUserIdHandler} placeholder='아이디'/>
    <CSS.Input value={password} onChange={onChangePasswordHandler} placeholder='비밀번호'/>
    <CSS.Input value={checkPassword} onChange={onChangeCheckPasswordHandler} placeholder='비밀번호 확인'/>
    <CSS.Input value={nickname} onChange={onChangeNicknameHandler} placeholder='닉네임'/>
    <CSS.Input value={email} onChange={onChangeEmailHandler} placeholder='이메일'/>
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

