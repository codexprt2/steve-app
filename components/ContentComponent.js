import React from "react";
import { IoMdEgg } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import styles from "./CONTENT.module.css";

const ContentComponent = () => {
	let iconStyles = { color: "#7369b9", width: "0.9rem", height: "0.8rem" };
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<div className={styles.iconContent}>
					<IoMdEgg style={iconStyles} />
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.title}>WebDesigner – Mutation Media</div>
					<div className={styles.iconContainer}>
						<div>
							<FaCalendar
								style={{ color: "#fafafa", width: "0.9rem", height: "0.8rem" }}
							/>
						</div>
						<div className={styles.font}>Feb 2020 - </div>
						<div className={styles.current}>Current</div>
					</div>
					<div className={styles.para}>
						Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in
						reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat inventore veritatis et quasi architecto beatae
						vitae dicta sunt explicabo.
					</div>
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.iconContent}>
					<IoMdEgg style={iconStyles} />
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.title}>Web Developer – Mutation Media</div>
					<div className={styles.iconContainer}>
						<div>
							<FaCalendar
								style={{ color: "#fafafa", width: "0.9rem", height: "0.8rem" }}
							/>
						</div>
						<div className={styles.font}>Feb 2020 - </div>
						<div className={styles.font}>Nov 2019 </div>
					</div>
					<div className={styles.para}>
						Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in
						reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat inventore veritatis et quasi architecto beatae
						vitae dicta sunt explicabo.
					</div>
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.iconContent}>
					<IoMdEgg style={iconStyles} />
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.title}>SDK Developer – Mutation Media</div>
					<div className={styles.iconContainer}>
						<div>
							<FaCalendar
								style={{ color: "#fafafa", width: "0.9rem", height: "0.8rem" }}
							/>
						</div>
						<div className={styles.font}>May 2019 - </div>
						<div className={styles.font}>Sept 2019 </div>
					</div>
					<div className={styles.para}>
						Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in
						reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat inventore veritatis et quasi architecto beatae
						vitae dicta sunt explicabo.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentComponent;
