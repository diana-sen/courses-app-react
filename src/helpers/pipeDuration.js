export function durationConverter(minutesDuration) {
	let hours = Math.floor(minutesDuration / 60);
	let minutes = Math.round(minutesDuration % 60);
	if (minutes < 10) {
		return hours + ':0' + minutes + ' hours';
	}
	return hours + ':' + minutes + ' hours';
}
