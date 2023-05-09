import React from 'react'
import * as CSS from './component/style'


const SupportStatus = (props) => {
  return (
    <CSS.Article>
    <div>작성자 : {props.nickname}</div>
    <div>지원현황 :</div>
    {props.fieldObjectList.map((item)=>{
      return(
        <CSS.Section key={item.fieldName}>

          <div> {item.fieldName}</div>
          <div>{item.nowMemberCount} / {item.fieldMaxNum}</div>
        </CSS.Section>
      )
    })}
    </CSS.Article>
  )
}

export default SupportStatus