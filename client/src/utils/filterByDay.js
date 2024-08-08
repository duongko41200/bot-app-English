function convertToDate(dateString) {
	const [year, month, day] = dateString.split('/').map(Number);
	return new Date(year, month - 1, day);
}
function filterByDayBeforeToday(data) {
	const today = new Date();

	return data.filter((item) => {
		const itemDate = convertToDate(item.day);
		return itemDate <= today;
	});
}


export {filterByDayBeforeToday}