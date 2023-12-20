import { Badge, Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => (
	<Col key={props.asin}>
		<Card className="h-100">
			<Card.Img variant="top" src={props.img} />
			<Card.Body className="d-flex flex-column justify-content-end align-items-center">
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					Genere: {props.category} - <Badge>Prezzo: {props.price}</Badge>
				</Card.Text>
				<Button variant="primary">Compra</Button>
			</Card.Body>
		</Card>
	</Col>
);

export default SingleBook;
