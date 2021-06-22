import React from "react";
import styles from "./TESTIMONIALS.module.css";
import { CgLoadbarAlt } from "react-icons/cg";
import DemoCarousel from "./DemoCarousel";

const TestimonialsComponent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.aboutContent}>TESTIMONIALS</div>
			<div>
				<CgLoadbarAlt size={50} />
			</div>
			<div className={styles.testimonialContainer}>
				<DemoCarousel />
			</div>
		</div>
	);
};

export default TestimonialsComponent;
