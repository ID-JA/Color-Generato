const componenetToHex = function (c) {
	const hex = c.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = function (r, g, b) {
	return '#' + componenetToHex(r) + componenetToHex(g) + componenetToHex(b);
};

export default rgbToHex;
