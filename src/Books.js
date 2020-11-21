import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import BooksAPI from './APIs/BooksAPI';

const Books = () => {
	const [term, setTerm] = useState("");
	// const [data, setData] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		var query = document.forms["book_search"]["search"].value;
		console.log(term);
		setTerm(query);
	}
	console.log(term);
	const {data} = BooksAPI(term);
	console.log(data);

	return(
		<div className="Books">
			<div className="sidebar">
				<Link to="/cat"><div>Category</div></Link>
				<Link to="/tag"><div>Tag</div></Link>
				<Link to="/pri"><div>Price</div></Link>
				<form name="book_search" onSubmit={handleSubmit}>
					<input className="book_form" type="text" name="search" placeholder="Search" />
				</form>
			</div>

			<div className="main">
				{data? (
					data.items?.map(book => {
					return (
						<div className="book_card" key={book.id}>
							<div className="img_title">
								<img src={book.volumeInfo.imageLinks.thumbnail}
								 alt="..." />
								 <div className="title_d">
								 	<h1>{book.volumeInfo.title}</h1>
								 	<p>{book.volumeInfo.description?.slice(0,250)}</p>
								 	<p><small>
								 		Author: <strong>
								 			{book.volumeInfo.authors?.map(author => (author+", "))}
								 			</strong>
								 		<br />
								 		Rating: <strong>{book.volumeInfo.averageRating}</strong>
								 	</small></p>
								 </div>
							</div>

							 <div className="btns">
							 	<Link to="/"><button>Add To List</button></Link>
							 	<Link to="/"><button>Buy The Book</button></Link>
							 </div>
						</div>
					);
				})
				) : (
				"..."
				)}
				
			</div>
		</div>
	);
}

export default Books;