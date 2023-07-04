import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: number;
  text: string;
  responseStatus: number;

}

const initialState: State = {
  value: 0,// dropdown value
  text: '',//prompt
  responseStatus: -1,//isLoading
};

export const name = 'dataType';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setPrompt: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setResponseStatus: (state, action: PayloadAction<number>) => {
      state.responseStatus = action.payload;
    },
  },
});

export default slice;

export const { actions, reducer } = slice;
