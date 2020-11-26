import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    btn_radio: '',
    check: [],
    name: '',
    email: '',
    phone: ''
  },
  reducers: {
    chooseType: (state, action) => { state.btn_radio = action.payload },
    chooseCategory: (state, action) => { state.check = action.payload },
    chooseName: (state, action) => { state.name = action.payload },
    chooseEmail: (state, action) => { state.email = action.payload },
    choosePhone: (state, action) => { state.phone = action.payload }
  }
})

export const reducer = rootSlice.reducer;

export const { chooseType, chooseCategory, chooseName, chooseEmail, choosePhone } = rootSlice.actions