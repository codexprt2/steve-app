import React from "react";
import styles from "./AUTHOR.module.css";
import Image from "next/image";

const AuthorComponent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.outterDiv}>
				<div className={styles.mainContent}>
					<div className={styles.maindiv}>
						<div className={styles.testimonialImage}>
							<div className={styles.testimonialImageBorder}>
								<Image
									class={styles.imageDiv}
									src='/assets/img/profile.jpeg'
									width={500}
									height={500}
								/>
							</div>
						</div>
						<p className={styles.paragraphDiv}>
							"Mountain Pose is the base for all standing poses it gives you a
							sense of how to ground in to your feet and feel the earth below
							you."
						</p>
					</div>
				</div>
				<div className={styles.innerDiv}>
					<span className={styles.spanDiv}>Melissa Wagner</span>
					<small className={styles.smallDiv}>Business Manager</small>
				</div>
			</div>
			<div className={styles.outterDiv}>
				<div className={styles.mainContent}>
					<div className={styles.maindiv}>
						<div className={styles.testimonialImage}>
							<div className={styles.testimonialImageBorder}>
								<Image
									class={styles.imageDiv}
									src='/assets/img/profile.jpeg'
									width={500}
									height={500}
								/>
							</div>
						</div>
						<p className={styles.paragraphDiv}>
							"Mountain Pose is the base for all standing poses it gives you a
							sense of how to ground in to your feet and feel the earth below
							you."
						</p>
					</div>
				</div>
				<div className={styles.innerDiv}>
					<span className={styles.spanDiv}>Melissa Wagner</span>
					<small className={styles.smallDiv}>Business Manager</small>
				</div>
			</div>
		</div>
	);
};

export default AuthorComponent;
