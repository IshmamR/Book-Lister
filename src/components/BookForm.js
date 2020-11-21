import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = ({data}) => {
	// If the URL has information then sends them to the state which sends it to the input fields
	useEffect(() => {
		if (data) {
			setTitle(data.title);
			setAuthor(data.author);
		}
	}, [data]);

	const { dispatch } = useContext(BookContext);
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	// console.log(data);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(title, author);
		if(title.trim() !== '' && author.trim() !== '') {
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