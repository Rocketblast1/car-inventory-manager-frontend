import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from './FooterStyle';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		C.D.O.G Car Dealer
	</h1>
	<Container>
		<Row>
		
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Buy New Cars</FooterLink>
			<FooterLink href="#">Buy sold Cars</FooterLink>
			<FooterLink href="#">Make a reservation for test drive</FooterLink>
			<FooterLink href="#">Hold/Buy your car online! </FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">805-767-9834</FooterLink>
			<FooterLink href="#">cdog@gmail.com</FooterLink>
			<FooterLink href="#">143 Main street,NY</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};

export default Footer;