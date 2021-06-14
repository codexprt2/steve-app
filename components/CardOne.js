import React from "react";
import styles from "../styles/CardOne.module.css";

const CardOne = () => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.heading}>
				<div className={styles.content}>
					<h1>Carlos Smith</h1>
					<h3>Description</h3>
				</div>
				<div className={styles.btnContainer}>
					<div>F</div>
					<div>G</div>
					<div>T</div>
					<div>I</div>
					<div>L</div>
					<div>Git</div>
					<div>V</div>
					<div>Y</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default CardOne;
