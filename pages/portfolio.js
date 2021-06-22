import React from "react";
import styles from "./PORTFOLIO.module.css";
import { CgLoadbarAlt } from "react-icons/cg";
import LineComponent from "../components/LineComponent";
import SkillCategory from "../components/SkillCategory";

const portfolio = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>MY WORKS</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<div className={styles.skillContainer}>
				<SkillCategory />
			</div>
		</div>
	);
};

export default portfolio;
