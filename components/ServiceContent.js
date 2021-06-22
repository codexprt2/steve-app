import React from "react";
import styles from "./SERVICE.module.css";
import { RiBriefcase4Line } from "react-icons/ri";
import { CgLoadbarAlt } from "react-icons/cg";

const ServiceContent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>Great Support</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>Print & Branding</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>

					<div className={styles.title}>Marketing</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
			</div>
			<div className={styles.lineContent}>
				<CgLoadbarAlt size={50} />
			</div>
			<div className={styles.mainContent}>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>Great Support</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>Print & Branding</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
				<div className={styles.contentDiv}>
					<div className={styles.serviceIcon}>
						<div className={styles.iconContainer}>
							<div className={styles.iconOutter}>
								<div className={styles.iconInner}>
									<RiBriefcase4Line size={25} />
								</div>
							</div>
						</div>
					</div>

					<div className={styles.title}>Marketing</div>
					<div className={styles.content}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceContent;
