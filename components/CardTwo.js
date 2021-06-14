import React from "react";
import styles from "../styles/CardTwo.module.css";

const CardTwo = () => {
	return (
		<div className={styles.cardContainer}>
			<div>Image Div</div>
			<div>
				<h1>Carlos Smith</h1>
				<h3>Full Stack Developer</h3>
			</div>
			<div>
				<div>Home</div>
				<div>About</div>
				<div>PortFolio</div>
				<div>Blog</div>
				<div>Contact</div>
			</div>
		</div>
	);
};

export default CardTwo;
