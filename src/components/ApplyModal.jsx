import React from 'react'
import Button from './component/Button'
import * as CSS from '../components/component/style'


const ApplyModal = ({setApply,apply}) => {
  const onClickCancelModalHandler = ()=>{
    setApply(!apply)
  }

  return (
    <>
        <CSS.ModalOverlay>
      <CSS.ModalContent>
        <CSS.Content>
          <CSS.ModalInput placeholder='사용하는 언어를 적어주세요.'/>
          <CSS.ModalInput placeholder='github 주소를 입력해주세요.'/>
        </CSS.Content>
        <CSS.ModalButton>
          <Button type='positive'>등록하기</Button>
          <Button type='negative'
          onClick={onClickCancelModalHandler}>취소하기</Button>
        </CSS.ModalButton>
      </CSS.ModalContent>
    </CSS.ModalOverlay>
    </>
  )
}

export default ApplyModal