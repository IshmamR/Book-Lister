import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav = () => {
	return (
		<div className="nav">
			<h2><Link to="/">BookLister</Link></h2>
			<div className="book_search_link">
				<NavLink to="/books">Search Books</NavLink>
			</div>
		</div>
	)
}

export default Nav;