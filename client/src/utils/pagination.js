import { LIMIT_LIST_TEXT_OF_PAGE } from "../Constant/global";

const functionPagination = (page, textData) => {

	const startIndex = (page - 1) * LIMIT_LIST_TEXT_OF_PAGE;
	const endIndex = page * LIMIT_LIST_TEXT_OF_PAGE;

	const paginatePage = textData.slice(startIndex, endIndex);

	return paginatePage;
};

export {functionPagination}
