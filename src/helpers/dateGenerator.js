/*
export function dateConverter(date) {
	let newFormatDate = date.split('/');
	let day = newFormatDate[0];
	let month = newFormatDate[1];
	let year = newFormatDate[2];
	return day + '.' + month + '.' + year;
}
*/

export function getcurrentDate() {
	const currentDate = new Date();
	return (
		currentDate.getDate() +
		'/' +
		(currentDate.getMonth() + 1) +
		'/' +
		currentDate.getFullYear()
	);
}
