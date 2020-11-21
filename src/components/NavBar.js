import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
	const {books} = useContext(BookContext);
	return (
		<div className="navbar">
			<h1>Books to read</h1>
			<p>{ books.length } books left. Keep reading!</p>
		</div>
	)
}

export default NavBar;