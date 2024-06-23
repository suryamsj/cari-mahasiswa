/**
 * @param {string | any[]} string
 */
export function yearChange(string) {
	const tahun = string.slice(0, 4);
	const semester = string.slice(4);
	return `Semester ${semester} - ${tahun}`;
}
