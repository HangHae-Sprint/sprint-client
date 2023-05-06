import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './component/Button'
import Header from './Header'
import useInput from './Hooks/useInput'
import * as CSS from '../components/component/style'

const Login = () => {
  const [userName, onChangeUserNameHandler ] = useInput('')
  const [password, onChangPasswordHandler] = useInput('')

  const [warningNotice, setWarningNotice] = useState('')

  const onClickLoginHandler = ()=>{
    if(userName.length <1 ){

      setWarningNotice('아이디를 입력해주세요')
      console.log('아이디를 입력해주세요.')
      return;
    }
    if(password.length <1 ){
      setWarningNotice('비밀번호를 입력해주세요')
      return;
    }

  }
  return (
    <div>
    <Header/>

    <CSS.Main>
    <CSS.Title>로그인</CSS.Title>
    <CSS.Form>
    <CSS.Input value={userName} onChange={onChangeUserNameHandler}/>
    <CSS.Input value={password} onChange={onChangPasswordHandler}/>
    </CSS.Form>
    <CSS.WarningNotice>{warningNotice}</CSS.WarningNotice>
    <Button type='positive'
    size='150'
    onClick={onClickLoginHandler}>로그인</Button>
    

    <CSS.SignupGuide>
    <span>계정이 없으신가요?</span>
    <Link to='/signUp'>
      <Button>회원가입</Button>
      </Link>
    </CSS.SignupGuide>
    </CSS.Main>


    </div>
  )
}

export default Login