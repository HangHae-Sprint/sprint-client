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


const dummyData = 
    {
      sprintId : 10,
      title : '프론트엔드 면접질문 발표 스터디원 모집',
      nickname : 'stella',   
      content : `프론트엔드 면접 준비를 같이할 스터디원을 모집합니다.
      특별한 지식이 없어도 참여 가능하며, 일주일에 한번 진행할 예정입니다. 
      주제는 자율로 선정해서 발표하는 형식으로 진행되며, 궁금한 사항은 댓글 달아주시면 
      답변드릴 수 있도록 하겠습니다.`,
      numLikes : 10,
      isLiked : false,
      createdAt : 'LocalDateTime',
      modifiedAt : 'LocalDateTime',
      sprintType : 'Project',
      commentList : [
        { 
          id: 4, 
          username: 'username12',
          nickname: 'nickname', 
          comment: '프론트 실력은 어느정도여야 가능한가요?', 
          createdAt: '2022-12-          15T13:42:06.690346 ',
          modifiedAt: '2022-12-15T13:42:06.690346', 
            sprintType : 'Study',
            numLikes : 10,
            isLiked : true,
            isMyComment : true,
        }, 
        { 
          id: 3, 
          username: 'username12',
          nickname: 'nickname', 
          comment: '모집은 언제까지 하시나요?', 
          createdAt: '2022-12-          15T13:42:06.690346', 
          modifiedAt: '2022-12-15T13:42:06.690346', 
            sprintType : 'Study',
            numLikes : 10,
            isLiked : true,
            isMyComment : true
        }, 
      ],
      fieldObjectList : [
        {
      fieldName : 'frontend',
      fieldMemberCount : 3,
      fieldMaxNum : 5
          },
        {
      fieldName : 'backend',
      fieldMemberCount : 2,
      fieldMaxNum : 3
          },
      {
        fieldName : 'design',
        fieldMemberCount : 1,
        fieldMaxNum : 3
        },
      ], 
    isMySprint : true
  }


const Detail = () => {
  const [comment,onChangeCommentHandler] =useInput('')
  const [modify,setModify] = useState(false)
  // const [Liked,setLiked]= useState(true)

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
          {dummyData.title}
        <SupportStatus 
          nickname={dummyData.nickname}
          fieldObjectList={dummyData.fieldObjectList}/>
        </ CSS.DetailTitle>
        <CSS.ApplyButtonBox>
        <Button size='180' type='positive'>신청하기</Button>
        </CSS.ApplyButtonBox>
        </CSS.DetailSection>

        <CSS.DetailContent>{dummyData.content}</CSS.DetailContent>
        <CSS.DetailEdit>
          <CSS.DetailLike>
          {/* {Liked ? 
          <CSS.Heart onClick={isLikeHandler}/>:<CSS.BeanHeart onClick={isLikeHandler}/>}  */}
        <IsLike/>

          <CSS.Like>좋아요 {dummyData.numLikes} 개</CSS.Like>
          </CSS.DetailLike>

          <CSS.DetailButtonBox>
            <Button size='80' type={'positive'}
            onClick={onClickModifyHandler}>수정</Button>
            <Button size='80' type={'negative'}>삭제</Button>
          </CSS.DetailButtonBox>
        </CSS.DetailEdit>
      </article>}
      {modify && <DetailModify modify={modify}
      setModify={setModify}/>}
        <section>

      <CSS.CommentForm onSubmit={(e)=>e.preventDefault()}>
        
        <CSS.CommentInput 
        value={comment}
        onChange={onChangeCommentHandler}
        placeholder='댓글을 입력해주세요.'/>
        <Button size='80' type='positive'>등록</Button>
      </CSS.CommentForm >
      <Comment commentList={dummyData.commentList}/>
      </section>
    </CSS.Main>
    </>
  )
}

export default Detail