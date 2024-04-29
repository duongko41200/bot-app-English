import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RES_DATA } from '../../Constant/global';
import TextService from '../../services/API/tex.service';

const initialState = {
	typeText: '',
	wordObject: {},

	listData: [],
	totalPages: '',
	totalText: '',


	listTextReview: [],
	totalPagesReview: '',
	totalListTextReview: '',

	openModalDetailText: false,
};

export const getAllText = createAsyncThunk(
	'wordStore/getAllText',
	async (payload, { state }) => {
		const listText = JSON.parse(localStorage.getItem('listText'));
		try {
			const { page, limit } = payload;
			const res = await TextService.getAllText({ page, limit });

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

export const getListTextByFilter = createAsyncThunk(
	'wordStore/getListTextByFilter',
	async (payload, { state }) => {
		const listText = JSON.parse(localStorage.getItem('listText'));
		try {
			const { page, limit, level, typeText, date } = payload;

			console.log("duosng",payload)
			const res = await TextService.getListTextByFilter({
				page,
				limit,
				level,
				typeText,
				date,
			});

			console.log('res  asdasddf:', res);

			// if (!listText) {
			// 	localStorage.setItem(
			// 		'listText',
			// 		JSON.stringify(res[RES_DATA].metadata.contents)
			// 	);

			// 	localStorage.setItem(
			// 		'totalPages',
			// 		JSON.stringify(res[RES_DATA].metadata.totalPages)
			// 	);

			// 	localStorage.setItem(
			// 		'total',
			// 		JSON.stringify(res[RES_DATA].metadata.total)
			// 	);
			// }

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
		SET_TOTAL_TEXT: (state, action) => {
			state.totalText = action.payload;
		},
		SET_OPEN_MODAL_DETAIL_TEXT: (state, action) => {
			state.openModalDetailText = action.payload;
		},

		//Action
	},
	extraReducers: (builder) => {
		builder.addCase(getAllText.fulfilled, (state, action) => {
			console.log('action:', action.payload);
			state.listData = action.payload.contents;
			state.totalPages = action.payload.totalPages;
		});

		builder.addCase(getListTextByFilter.fulfilled, (state, action) => {
			console.log('action:', action.payload);
			state.listTextReview = action.payload.contents;
			state.totalPagesReview = action.payload.totalPages;
			state.totalListTextReview = action.payload.total
		});
	},
});

// Action creators are generated for each case reducer function
export const {
	SET_WORD,
	SET_TOTAL_TEXT,
	SET_TYPE_TEXT,
	RESET_WORD,
	SET_LIST_DATA,
	SET_TOTAL_PAGE,
	SET_OPEN_MODAL_DETAIL_TEXT,
} = wordReducer.actions;

export default wordReducer.reducer;
