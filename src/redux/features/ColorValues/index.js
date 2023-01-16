import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  value: {
    red: 255,
    green: 255,
    blue: 255,
    opacity: 100,
    decimalOpacity: 1
  }
}

export const colorValuesSlice = createSlice({
  name: 'colorValue',
  initialState: initialStateValue,
  reducers: {
    resetColors: (state) => { state.value = initialStateValue },
    setRGB: (state, action) => { state.value[action.payload.key] = action.payload.value },
    setOpacity: (state, action) => { 
      state.value.opacity = action.payload;
      state.value.decimalOpacity = action.payload / 100;
    }
  }
});

export const { resetColors, setRGB, setOpacity } = colorValuesSlice.actions;
export default colorValuesSlice.reducer;