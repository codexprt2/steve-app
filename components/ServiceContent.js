import React from "react";
import styles from "./SERVICE.module.css";
import { RiBriefcase4Line } from "react-icons/ri";

const ServiceContent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<div className={styles.contentDiv}>
					<div className={styles.iconContainer}>
						<div className={styles.iconOutter}>
							<div className={styles.iconInner}>
								<RiBriefcase4Line size={25} />
							</div>
						</div>
					</div>
					<div className={styles.title}>Great Support</div>
					<div>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.iconContainer}>
						<div className={styles.iconOutter}>
							<div className={styles.iconInner}>
								<RiBriefcase4Line size={25} />
							</div>
						</div>
					</div>
					<div className={styles.title}>Great Support</div>
					<div>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.iconContainer}>
						<div className={styles.iconOutter}>
							<div className={styles.iconInner}>
								<RiBriefcase4Line size={25} />
							</div>
						</div>
					</div>

					<div className={styles.title}>Great Support</div>
					<div>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceContent;
