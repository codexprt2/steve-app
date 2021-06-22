import React, { useState } from "react";
import styles from "./SKILL.module.css";
import LineComponent from "./LineComponent";

const SkillCategory = () => {
	const [isAllSelected, setIsAllSelected] = useState(false);
	const [isWebDesign, setIsWebDesign] = useState(false);
	const [isGraphicDesign, setGraphicDesign] = useState(false);
	const [isMotionDesign, setIsMotionDesign] = useState(false);
	const onClick = (val) => {
		if (val === "all") {
			setIsAllSelected(true);
			setIsWebDesign(false);
			setGraphicDesign(false);
			setIsMotionDesign(false);
		} else if (val === "webdesign") {
			setIsWebDesign(true);
			setIsAllSelected(false);
			setGraphicDesign(false);
			setIsMotionDesign(false);
		} else if (val === "graphicdesign") {
			setGraphicDesign(true);
			setIsWebDesign(false);
			setIsAllSelected(false);
			setIsMotionDesign(false);
		} else if (val === "motiongraphic") {
			setIsMotionDesign(true);
			setIsAllSelected(false);
			setIsWebDesign(false);
			setGraphicDesign(false);
		}
	};

	return (
		<div>
			<div className={styles.mainContainer}>
				<div className={styles.mainContent}>
					<ul className={styles.ulContainer}>
						<li className={styles.liContainer}>
							<a
								className={
									isAllSelected ? styles.aContaineractive : styles.aContainer
								}
								onClick={() => onClick("all")}>
								all
							</a>
						</li>
						<li className={styles.liContainer}>
							<a
								className={
									isWebDesign ? styles.aContaineractive : styles.aContainer
								}
								onClick={() => onClick("webdesign")}>
								WEB DESIGN
							</a>
						</li>
						<li className={styles.liContainer}>
							<a
								className={
									isGraphicDesign ? styles.aContaineractive : styles.aContainer
								}
								onClick={() => onClick("graphicdesign")}>
								GRAPHIC DESIGN
							</a>
						</li>
						<li className={styles.liContainer}>
							<a
								className={
									isMotionDesign ? styles.aContaineractive : styles.aContainer
								}
								onClick={() => onClick("motiongraphic")}>
								MOTION GRAPHIC
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.lineDiv}>
				<LineComponent width='2.75rem' />
			</div>
		</div>
	);
};

export default SkillCategory;
