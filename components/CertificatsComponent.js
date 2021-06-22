import React from "react";
import { CgLoadbarAlt } from "react-icons/cg";
import styles from "./CERTIFICATS.module.css";
import { AiOutlineSolution, AiFillPrinter } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

const CertificatsComponent = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.aboutContent}>CERTIFICATS</div>
			<div>
				<CgLoadbarAlt size={50} />
			</div>
			<div className={styles.certificatDiv}>
				<div className={styles.outterDiv}>
					<div className={styles.innerDiv}>
						<div className={styles.contentDiv}>
							<div className={styles.itemDiv}>
								<div className={styles.itemInnerDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.shadowInnerDiv}>
											<AiOutlineSolution size={40} />
										</div>
									</div>
								</div>
								<div className={styles.mediaBody}>
									<h5 className={styles.titleDiv}>
										Full Stack Developer Nanodegreee
									</h5>
									<span className={styles.spanDiv}>
										Certificat ID: 8975
										<br />
										<span className={styles.spanInnerDiv}>23 March 2019</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.outterDiv}>
					<div className={styles.innerDiv}>
						<div className={styles.contentDiv}>
							<div className={styles.itemDiv}>
								<div className={styles.itemInnerDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.shadowInnerDiv}>
											<AiOutlineSolution size={40} />
										</div>
									</div>
								</div>
								<div className={styles.mediaBody}>
									<h5 className={styles.titleDiv}>
										Full Stack Developer Nanodegreee
									</h5>
									<span className={styles.spanDiv}>
										Certificat ID: 8975
										<br />
										<span className={styles.spanInnerDiv}>23 March 2019</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.lastDiv}>
				<div className={styles.lastInnerDiv}>
					<CgLoadbarAlt size={50} />
				</div>
			</div>
			<div className={styles.downloadContent}>
				<div className={styles.cvContainer}>
					<div className={styles.btnContent}>
						<IoIosArrowDropdown />
					</div>
					<div className={styles.download}>DOWNLOAD MY CV</div>
				</div>
				<div className={styles.printContainer}>
					<div className={styles.btnContent}>
						<AiFillPrinter />
					</div>
					<div className={styles.download}>PRINT MY RESUME</div>
				</div>
			</div>
		</div>
	);
};

export default CertificatsComponent;
