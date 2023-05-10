import { createSlice } from "@reduxjs/toolkit";

const initialState = { sprintList: 'all' }

const sprintMenuSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    listRefer: (state, action) => {
      return { ...state, sprintList: action.payload }
    },
  }
});


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { listRefer } = sprintMenuSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default sprintMenuSlice.reducer;