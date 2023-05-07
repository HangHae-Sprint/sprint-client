import React, { useState } from 'react'
import Header from './Header'
import * as CSS from './component/style'
import useInput from './Hooks/useInput'
import Button from './component/Button'


const Editor = () => {
  const [frontend,onChangeFrontendHandler]=useInput('')
  const [backend,onChangeBackendHandler]=useInput('')
  const [manager,onChangeManagerHandler]=useInput('')
  const [design,onChangeDesignHandler]=useInput('')
  const [title,onChangeTitleHandler]=useInput('')
  const [content,onChangeContentHandler]=useInput('')

  const [isCheckedProject,setIsCheckedProject]=useState(false)
  const [isCheckedStudy,setIsCheckedStudy]=useState(true)
  const [warningNotice, setWarningNotice] = useState('')
  const handleStudyCheckboxChange = () =>{
      setIsCheckedStudy(!isCheckedStudy)
      setIsCheckedProject(!isCheckedProject)
  }

  const handleProjectCheckboxChange = () =>{
      setIsCheckedProject(!isCheckedProject)
      setIsCheckedStudy(!isCheckedStudy)
  }
  const onClickSavePosting = ()=>{
    if(title.length<1){
      setWarningNotice('제목을 입력해주세요.')
      return;
    }
    if(content.length<1){
      setWarningNotice('내용을 입력해주세요.')
      return;
    }
    if(frontend.length<1 && backend.length<1 && manager.length<1 && design.length<1){
      setWarningNotice('최대인원을 한명이라도 적어주세요.')
      return;
    }
  }
  return (
    <>
    <Header/>
    <CSS.Main>
      <CSS.Form onSubmit={(e)=>e.preventDefault()}>
      모집글 제목<CSS.EditorInput 
      value={title}
      onChange={onChangeTitleHandler}/>
      모집글 내용<CSS.EditorTextarea 
      value={content}
      onChange={onChangeContentHandler}
      />
      </CSS.Form >
      <CSS.SelectionType>
        <h3>모집 종류</h3>
        <CSS.CheckBox>
        <div><input
        value='Study'
        type="checkbox"
        checked={isCheckedStudy}
        onChange={handleStudyCheckboxChange}
        />Study</div>
        <div><input 
        value='Project'
        type="checkbox"
        checked={isCheckedProject}
        onChange={handleProjectCheckboxChange}
        />Project</div>
        </CSS.CheckBox>
      </CSS.SelectionType>
      모집 인원
      <CSS.SupportAreas>
        <CSS.UlBox>
        <CSS.NumberOfApplicantsLi>
          Front-End Developer
          <CSS.NumberOfApplicantsInput 
          value={frontend} 
          onChange={onChangeFrontendHandler}/>
          
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Back-End Developer
          <CSS.NumberOfApplicantsInput 
          value={backend} 
          onChange={onChangeBackendHandler}/>
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Project-Manager
          <CSS.NumberOfApplicantsInput 
          value={manager} 
          onChange={onChangeManagerHandler}/>
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Designer
          <CSS.NumberOfApplicantsInput 
          value={design} 
          onChange={onChangeDesignHandler}/>
        </CSS.NumberOfApplicantsLi>
        </CSS.UlBox>

        <CSS.NumberBox>
        <CSS.Number>명</CSS.Number>
        <CSS.Number>명</CSS.Number>
        <CSS.Number>명</CSS.Number>
        <CSS.Number>명</CSS.Number>
        </CSS.NumberBox>
      </CSS.SupportAreas>
      <CSS.WarningNotice>{warningNotice}</CSS.WarningNotice>
      <CSS.ButtonBox>
      <Button size='150' type='positive'
      onClick={onClickSavePosting}
      >저장하기</Button>
      <Button size='150' type='negative'>취소하기</Button>
      </CSS.ButtonBox>
      
    </CSS.Main>
    </>
  )
}

export default Editor

