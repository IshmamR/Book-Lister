import React, { Component } from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

class Home extends Component {
	render(book_id = this.props.match.params.data) {
		let id = book_id? book_id: null;
		// console.log(typeof id);
		return (
			<div className="Home">
				<BookContextProvider>
					<NavBar />
					<BookList />
					<BookForm id={id} />
				</BookContextProvider>
			</div>
		);
	}
}

export default Home;
// {"title": "yayy", "author": "hello"}