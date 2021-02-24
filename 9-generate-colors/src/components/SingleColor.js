import React, { useState, useEffect } from 'react';
import rgbToHex from '../utils';

function SingleColor({ rgb, weight, index }) {
	const bgc = rgb.join(',');
	const hex = rgbToHex(...rgb);
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => {
			clearTimeout(timeOut);
		};
	}, [alert]);
	return (
		<>
			<article
				className={`color ${index >= 10 && 'color-white'}`}
				style={{ backgroundColor: `rgb(${bgc})` }}
				onClick={() => {
					setAlert(true);
					navigator.clipboard.writeText(hex);
				}}
			>
				<p className={` ${index < 10 && 'weight'}`}>{weight}%</p>
				<p className='hex'>{hex}</p>
				<p className='alert'>{alert ? 'you copied color' : null}</p>
			</article>
		</>
	);
}

export default SingleColor;
