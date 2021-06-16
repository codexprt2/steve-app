import React from "react";
import styles from "./EXPERIENCE.module.css";
import { RiBriefcase4Line } from "react-icons/ri";
import ProgressBar from "./ProgressBar";

const ExperienceComponent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.iconContainer}>
				<div className={styles.iconOutter}>
					<div className={styles.iconInner}>
						<RiBriefcase4Line size={25} />
					</div>
				</div>
			</div>
			<div className={styles.progressBarContainer}>
				<div className={styles.lineDiv}></div>
			</div>
		</div>
	);
};

export default ExperienceComponent;
