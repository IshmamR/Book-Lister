import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BooksAPI from './APIs/BooksAPI';
import Google from './imgs/poweredby.png';

const Books = () => {
	const [term, setTerm] = useState("");
	
	// const [data, setData] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		var query = document.forms["book_search"]["search"].value;
		// console.log(term);
		if(query.trim() !== "") {
			setTerm(query);
		}
	}
	// console.log(term);
	const {data} = BooksAPI(term);
	// console.log(data);
	const handleSlider = () => {
		let slide = document.querySelector('.sidebar');
		let slideBtn = document.querySelector('.slide-btn');
		if(slide.classList.contains('active')) {
			slide.classList.remove('active');
			slideBtn.innerHTML = '&gt;';
		} else {
			slide.classList.add('active');
			slideBtn.innerHTML = 'X';
		}
	}

	return(
		<div className="Books">
			<div className="sidebar">
				<div className="slider">
					<button className="slide-btn" onClick={handleSlider}>&gt;</button>
				</div>
				<Link to="/cat"><div>Category</div></Link>
				<Link to="/tag"><div>Tag</div></Link>
				<Link to="/pri"><div>Price</div></Link>
				<form name="book_search" onSubmit={handleSubmit}>
					<input className="book_form" type="text" name="search" placeholder="Search" />
				</form>
				<div className="poweredby">
					<img src={Google} alt="powered by Google" />
				</div>
			</div>

			<div className="main">
				{data? (
					data.items?.map(book => {
					return (
						<div className="book_card" key={book.id}>
							<div className="img_title">
								<img src={book.volumeInfo.imageLinks?.thumbnail}
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
								<Link to={"/add_book/"+book.id}>
									<button>Add To List</button>
								</Link>
								<a href={book.volumeInfo.infoLink}
									target="_blank" rel="noreferrer">
									<button>More Info</button>
								</a>
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