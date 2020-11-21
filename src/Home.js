import React, { Component } from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

class Home extends Component {
	render(book_id = this.props.match.params.data) {
		// console.log(book_data);
		// let book_dataF = IsJsonString(book_data);
		// Checks if string in url is JSON data or not. Returns parsed json if it is JSON.
		// function IsJsonString(str) {
		// 	let string = str;
		// 	console.log(string);
		// 	return string;
		// 	} catch (e) {
		// 		return null;
		// 	}
		// }
		let id = book_id? book_id: null;
		// console.log(typeof data);
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