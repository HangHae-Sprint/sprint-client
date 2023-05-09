import React from 'react'
import Button from './component/Button'
import Header from './Header'
import * as CSS from '../components/component/style'
import Comment from './Comment'
import SupportStatus from './SupportStatus'
import useInput from './Hooks/useInput'
import { useState } from 'react'
import DetailModify from './DetailModify'
import { Link } from 'react-router-dom'
import IsLike from './IsLike'
import { useQuery } from 'react-query'
import { detailSprint } from '../axios/api'
import ApplyModal from './ApplyModal'





const Detail = () => {
  
  const [comment,onChangeCommentHandler] =useInput('')
  const [modify,setModify] = useState(false)
  const [apply,setApply]= useState(false)

  const applyButtonHandler = () => {
    setApply(!apply)
  }
  const {isLoading, isError, data} = useQuery('detailSprint',()=>detailSprint(22))
  console.log(data)
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {Error.message}</div>
  const onClickModifyHandler = () => {
    setModify(!modify)
  }
  // const isLikeHandler = ()=>{
  //   setLiked(!Liked)
  // }
  return (
    <>
    <Header/>
    <CSS.Main>
      {!modify && 
      <article>
        <CSS.DetailSection>
        <CSS.DetailTitle>
          {data.title}
        <SupportStatus 
          nickname={data.nickname}
          fieldObjectList={data.fieldObjectList}/>
        </ CSS.DetailTitle>
        <CSS.ApplyButtonBox>
        <Button size='180' type='positive' onClick={applyButtonHandler}>신청하기</Button>
        {apply && <ApplyModal apply={apply} setApply={setApply}/>}
        </CSS.ApplyButtonBox>
        </CSS.DetailSection>

        <CSS.DetailContent>{data.content}</CSS.DetailContent>
        <CSS.DetailEdit>
          <CSS.DetailLike>
          {/* {Liked ? 
          <CSS.Heart onClick={isLikeHandler}/>:<CSS.BeanHeart onClick={isLikeHandler}/>}  */}
        <IsLike data={data}/>

          <CSS.Like>좋아요 {data.numLikes} 개</CSS.Like>
          </CSS.DetailLike>

          {data.isMySprint && <CSS.DetailButtonBox>
            <Button size='80' type={'positive'}
            onClick={onClickModifyHandler}>수정</Button>
            <Button size='80' type={'negative'}>삭제</Button>
          </CSS.DetailButtonBox>}
        </CSS.DetailEdit>
      </article>}
      {modify && <DetailModify data={data} modify={modify}
      setModify={setModify}/>}
        <section>

      <CSS.CommentForm onSubmit={(e)=>e.preventDefault()}>
        
        <CSS.CommentInput 
        value={comment}
        onChange={onChangeCommentHandler}
        placeholder='댓글을 입력해주세요.'/>
        <Button size='80' type='positive'>등록</Button>
      </CSS.CommentForm >
      {/* todo: API응답에 commentList못가져옴  */}
      <Comment commentList={data.commentList}/>
      </section>
    </CSS.Main>
    </>
  )
}

export default Detail