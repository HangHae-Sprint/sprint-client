import React, { useState } from 'react'
import Button from './component/Button'
import * as CSS from '../components/component/style'
import useInput from './Hooks/useInput'
import { useMutation } from 'react-query'
import { ApplySprint, isLikePost } from '../axios/api'
import { useNavigate } from 'react-router-dom'


const ApplyModal = ({setApply,apply,data}) => {
  const [link,onChangeLinkHandler] = useInput('')
  const [position, setPosition] = useState('frontend');
  const [warningNotice, setWarningNotice] = useState('')
  const mutation = useMutation(ApplySprint,{
    onSuccess: ()=>{
      alert('신청이 완료 되었습니다.')
    },
    onError:(error) =>{
      alert('실패')
    }
  })
  const application = {
    id:data.sprintId,
    position,
    link,
  }

  const onClickApplyButtonHandler = () =>{
    const urlRegex = /^(http(s)?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    if(link === !urlRegex.test(link)){
      setWarningNotice('URL형식으로 입력해주세요.')
      return;
    }
    mutation.mutate(application)
    setApply(!apply)

  }

  const onClickCancelModalHandler = ()=>{
    setApply(!apply)
  }
  //position 핸들러
  const handlerPositionCheckboxChange = (e)=>{
    setPosition(e.target.value)
  }

  return (
    <>
        <CSS.ModalOverlay>
      <CSS.ModalContent>
        <CSS.Content>
          <CSS.CheckBox>
          
          <CSS.PositionBox>
            
            {data.fieldObjectList.map((item)=>{
              return (
                <>
                <input
                type='checkbox'
                value={item.fieldName}
                checked={position ===item.fieldName}
                onChange={handlerPositionCheckboxChange}
                />{item.fieldName}</>
              )
            })}
          </CSS.PositionBox>
        </CSS.CheckBox>
          <CSS.ModalInput 
          value={link}
          onChange={onChangeLinkHandler}
          placeholder='github 주소를 입력해주세요.'/>
          <CSS.WarningNotice>{warningNotice}</CSS.WarningNotice>
        </CSS.Content>
        <CSS.ModalButton>
          <Button type='positive'
          onClick={onClickApplyButtonHandler}>등록하기</Button>
          <Button type='negative'
          onClick={onClickCancelModalHandler}>취소하기</Button>
        </CSS.ModalButton>
      </CSS.ModalContent>
    </CSS.ModalOverlay>
    </>
  )
}

export default ApplyModal