import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../contexts/BookContext';
import { SingleBook } from '../APIs/BooksAPI';

const BookForm = ({id}) => {
	// If the URL has information then sends them to the state which sends it to the input fields
	


	const { dispatch } = useContext(BookContext);
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	const {data} = SingleBook(id);
	// console.log(data);
	useEffect(() => {
		setTitle(data?.volumeInfo.title);
		let str = String(data?.volumeInfo.authors?.map(author => (author+", ")));
		if (str !== undefined) {
			setAuthor(str);
		}
	}, [data]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(title, author);
		if(title?.trim() !== '' && author?.trim() !== '') {
			dispatch({type: 'ADD_BOOK', book: {
				title: title,
				author: author
			}});
		}
		setTitle('');
		setAuthor('');
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input className="book_form" type="text" placeholder="Title" value={title} required
				onChange={(e) => setTitle(e.target.value)} />
			<input className="book_form" type="text" placeholder="Author" value={author} required
				onChange={(e) => setAuthor(e.target.value)} />
			<input className="book_submit" type="submit" value="add book" />
		</form>
	);
}

export default BookForm;