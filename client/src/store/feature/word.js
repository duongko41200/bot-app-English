import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RES_DATA } from '../../Constant/global';
import TextService from '../../services/API/tex.service';

const initialState = {
	typeText: '',
	wordObject: {},

	listData: [],
};

export const getAllText = createAsyncThunk(
	'wordStore/getAllText',
	async (payload, { getState }) => {
		try {
			const { page } = payload;
			const res = await TextService.getAllText({ page });

			return res[RES_DATA].metadata.contents;
		} catch (error) {
			throw new Error(error.message);
		}
	}
);

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
			state.wordObject = {};
		},

		//Action
	},
	extraReducers: (builder) => {
		builder.addCase(getAllText.fulfilled, (state, action) => {
			state.listData = action.payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const { SET_WORD, SET_TYPE_TEXT, RESET_WORD } =
	wordReducer.actions;

export default wordReducer.reducer;
