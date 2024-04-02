import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	typeText: '',
	wordObject: {},
};

export const wordReducer = createSlice({
	name: 'wordStore',
	initialState,
	reducers: {
		SET_WORD: (state, action) => {
			state.wordObject[`${Object.keys(action.payload)}`] =
				action.payload[`${Object.keys(action.payload)}`];
		},
		SET_TYPE_TEXT: (state, action) => {
			console.log('action type text:', action);
			state.typeText = action.payload;
		},
		RESET_WORD: (state) => {
			state.wordObject = {}
		}
	},
});

// Action creators are generated for each case reducer function
export const { SET_WORD, SET_TYPE_TEXT,RESET_WORD } = wordReducer.actions;

export default wordReducer.reducer;
