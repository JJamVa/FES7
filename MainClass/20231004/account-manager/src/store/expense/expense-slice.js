import { createSlice } from "@reduxjs/toolkit";
// store를 쪼개서 관리

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        // 지출 목록을 관리
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'icecream', price: 1500 }],
        income: 1000000
    },
    reducers: {
        // addExpenseAction => 액션 type의 이름
        addExpenseAction: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload)
        },
        setIncomeAction: (currentSlice,action) => {
            console.log('setIncomeAction');
            currentSlice.income = action.payload;
        }
    }
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보내기
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;


// slice에서 생성한 reducer들을 외부로 내보내기
export default expenseSlice.reducer