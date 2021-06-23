import React from "react";
import styles from "./BLOG.module.css";
import LineComponent from "../components/LineComponent";
import BlogComponent from "../components/BlogComponent";

const blog = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>LATEST NEWS</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<div>
				<BlogComponent />
			</div>
		</div>
	);
};

export default blog;
