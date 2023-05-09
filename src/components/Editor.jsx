import React, { useState } from 'react'
import Header from './Header'
import * as CSS from './component/style'
import useInput from './Hooks/useInput'
import Button from './component/Button'
import { useMutation, useQueryClient } from 'react-query'
import { addSprint } from '../axios/api'


const Editor = () => {
  const [frontend,onChangeFrontendHandler]=useInput(0)
  const [backend,onChangeBackendHandler]=useInput(0)
  const [manager,onChangeManagerHandler]=useInput(0)
  const [design,onChangeDesignHandler]=useInput(0)


  const [title,onChangeTitleHandler]=useInput('')
  const [content,onChangeContentHandler]=useInput('')

  const [warningNotice, setWarningNotice] = useState('')
  const [sprintType, setSprintType] = useState('Study');

  const mutation =useMutation(addSprint,{
    onSuccess: ()=>{
      // queryClient.invalidateQueries("getBoards")
      alert('작성 저장 성공')
    }
  })

  const fieldName = ['backend', 'frontend', 'manager', 'design']
  const fieldMaxNum = [backend,frontend,manager,design]
  const fieldInfoList =[]
  for(let i = 0; i <4; i++){
    if(fieldMaxNum[i] !== '' && fieldMaxNum[i] !== 0){
    fieldInfoList.push({fieldName:fieldName[i],fieldMaxNum:fieldMaxNum[i]})
  }}

  const newSprint={
    title,
    content,
    sprintType,
    fieldInfoList
  }



const handleStudyCheckboxChange = (event) => {
  if (event.target.checked) {
    setSprintType('Study');
  } else {
    setSprintType('Project');
  }
};

const handleProjectCheckboxChange = (event) => {
  if (event.target.checked) {
    setSprintType('Project');
  } else {
    setSprintType('Study');
  }
};

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
    mutation.mutate(newSprint)
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
        <div>
    <input
      value='Study'
      type="checkbox"
      checked={sprintType === 'Study'}
      onChange={handleStudyCheckboxChange}
    />
    Study
    <input
      value='Project'
      type="checkbox"
      checked={sprintType === 'Project'}
      onChange={handleProjectCheckboxChange}
    />
    Project
  </div>
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

