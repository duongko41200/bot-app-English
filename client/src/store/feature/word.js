import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RES_DATA } from '../../Constant/global';
import TextService from '../../services/API/tex.service';

const initialState = {
	typeText: '',
	wordObject: {},

	listData: [],
	totalPages: '',
};

export const getAllText = createAsyncThunk(
	'wordStore/getAllText',
	async (payload, { state }) => {
		const listText = JSON.parse(localStorage.getItem('listText'));
		try {

			const { page } = payload;
			const res = await TextService.getAllText({ page });

			console.log('res:', res);

			if (!listText) {
				localStorage.setItem(
					'listText',
					JSON.stringify(res[RES_DATA].metadata.contents)
				);

				localStorage.setItem(
					'totalPages',
					JSON.stringify(res[RES_DATA].metadata.totalPages)
				);
				
				localStorage.setItem(
					'total',
					JSON.stringify(res[RES_DATA].metadata.total)
				);
			}

			return res[RES_DATA].metadata;
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
		SET_LIST_DATA: (state, action) => {
			state.listData = action.payload;
		},
		RESET_WORD: (state) => {
			state.wordObject = {};
		},
		SET_TOTAL_PAGE: (state, action) => {
			state.totalPages = action.payload;
		},

		//Action
	},
	extraReducers: (builder) => {
		builder.addCase(getAllText.fulfilled, (state, action) => {
			console.log('action:', action.payload);
			state.listData = action.payload.contents;
			state.totalPages = action.payload.totalPages;
		});
	},
});

// Action creators are generated for each case reducer function
export const { SET_WORD, SET_TYPE_TEXT, RESET_WORD, SET_LIST_DATA,SET_TOTAL_PAGE } =
	wordReducer.actions;

export default wordReducer.reducer;
