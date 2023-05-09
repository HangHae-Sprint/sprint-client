//configStore =>중앙 데이터 관리소(state)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import sprint from "../modules/sprintMenu";



const store = configureStore({
  //여기에 reducer가 들어간다.
  reducer: {
    sprint
  }
})

export default store