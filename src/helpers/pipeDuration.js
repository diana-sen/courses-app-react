export function durationConverter(minutesDuration) {
	let hours = Math.floor(minutesDuration / 60);
	let minutes = Math.round(minutesDuration % 60);
	return hours + ':' + minutes + ' hours';
}
