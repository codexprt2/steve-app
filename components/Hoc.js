import React from "react";
import styles from "../styles/Hoc.module.css";
import SettingsIcon from "@material-ui/icons/Settings";
import FlareIcon from "@material-ui/icons/Flare";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const Hoc = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.toggle}>
					<div className={styles.settingDiv}>
						<a className={styles.inner} hre='#'>
							<SettingsIcon />
						</a>
					</div>
				</div>

				<div className={styles.mode}>
					<div className={styles.outer}>
						<a className={styles.inner}>
							<FlareIcon />
						</a>
					</div>
				</div>
			</div>
			<div className={styles.cardContainer}>
				<div className={styles.card1}>
					<CardOne />
				</div>

				<div className={styles.card2}>
					<CardTwo />
				</div>
			</div>
		</div>
	);
};

export default Hoc;
