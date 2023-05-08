import React from 'react'
import * as CSS from '../components/component/style'
import Button from './component/Button'


const DetailModify = (props) => {

  const onClickModifyHandler = () => {
    props.setModify(false)
  }
  const onClickCancelHandler = () => {
    props.setModify(false)
  }
  return (
    <>
    <section>
      <CSS.Form onSubmit={(e)=>e.preventDefault()}>
      <CSS.EditorInput/>
      <CSS.EditorTextarea/>
      </CSS.Form>
      <CSS.DetailModifyButtonBox>
        <Button size='80' type={'positive'}
        onClick={onClickModifyHandler}>저장</Button>
        <Button size='80' type={'negative'}
        onClick={onClickCancelHandler}>취소</Button>
      </CSS.DetailModifyButtonBox>
    </section>
      </>
  )
}

export default DetailModify