import React from 'react'
import Header from './Header'
import * as CSS from './component/style'
import useInput from './Hooks/useInput'


const Editor = () => {
  const [frontend,onChangeFrontendHandler]=useInput('')
  const [backend,onChangeBackendHandler]=useInput('')
  const [manager,onChangeManagerHandler]=useInput('')
  const [design,onChangeDesignHandler]=useInput('')


  return (
    <>
    <Header/>
    <main>
      <CSS.Form>
      <input/>
      <textarea/>
      </CSS.Form>

      <CSS.SupportAreas>
        <ul>
        <CSS.NumberOfApplicantsLi>
          Front-End Developer
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Back-End Developer
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Project-Manager
        </CSS.NumberOfApplicantsLi>
        <CSS.NumberOfApplicantsLi>
          Designer
        </CSS.NumberOfApplicantsLi>
        </ul>
        <CSS.InputSection>
        <CSS.NumberOfApplicantsInput value={frontend} onChange={onChangeFrontendHandler}/>
        <CSS.NumberOfApplicantsInput value={backend} onChange={onChangeBackendHandler}/>
        <CSS.NumberOfApplicantsInput value={manager} onChange={onChangeManagerHandler}/>
        <CSS.NumberOfApplicantsInput value={design} onChange={onChangeDesignHandler}/> 
        </CSS.InputSection>
      </CSS.SupportAreas>
    </main>
    </>
  )
}

export default Editor