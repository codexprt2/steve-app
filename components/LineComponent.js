import React from "react";
import styles from "./LINE.module.css";

const LineComponent = ({ width }) => {
	console.log("width", width);
	return (
		<div>
			<hr className={styles.dividerContainer} style={{ width: width }}></hr>
		</div>
	);
};

export default LineComponent;
