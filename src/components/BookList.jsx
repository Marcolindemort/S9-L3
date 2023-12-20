import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => (
	<>
		<h2 className="my-4">Genere: {props.category}</h2>
		<Container>
			<Row xs={1} md={4} className="g-4">
				{props.genre.map((book) => (
					<SingleBook asin={book.asin} img={book.img} title={book.title} category={book.category} price={book.price} />
				))}
			</Row>
		</Container>
	</>
);

export default BookList;
