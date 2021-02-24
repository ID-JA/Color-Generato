import './App.css';
import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './components/SingleColor';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('crimson').all(10));

	const handleSubmit = function (e) {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			setError(false);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};
	return (
		<div className='app'>
			<div className='container'>
				<h4>Color Generator</h4>
				<form className='form' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='#dc143c'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className={error ? 'error' : null}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
			<section className='colors-container'>
				{/* Render Single Color HERE */}
				{list.map((color, index) => {
					return <SingleColor key={index} {...color} index={index} />;
				})}
			</section>
		</div>
	);
}

export default App;
