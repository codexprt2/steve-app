import React from "react";
import styles from "./VERTICAL.module.css";

const VerticalComponent = ({ name }) => {
	return (
		<div className={styles.mainContainer}>
			<span className={styles.title}>{name}</span>
		</div>
	);
};

export default VerticalComponent;
