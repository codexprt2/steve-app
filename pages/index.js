import React from "react";
import styles from "./Home.module.css";
import { CgFacebook, CgLoadbarAlt } from "react-icons/cg";
import { IconContext } from "react-icons";
import { FaVimeoSquare } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import {
	AiOutlineGoogle,
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiFillLinkedin,
	AiFillGithub,
	AiFillYoutube,
	AiFillPrinter,
} from "react-icons/ai";

const Home = () => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.heading}>
				<div className={styles.content}>
					<h1>Carlos Smith</h1>
					<p>Description</p>
				</div>
				<div className={styles.btnContainer}>
					<div className={styles.btnContent}>
						<CgFacebook />
					</div>
					<div className={styles.btnContent}>
						<AiOutlineGoogle />
					</div>
					<div className={styles.btnContent}>
						<AiOutlineTwitter />
					</div>
					<div className={styles.btnContent}>
						<AiOutlineInstagram />
					</div>
					<div className={styles.btnContent}>
						<AiFillLinkedin />
					</div>
					<div className={styles.btnContent}>
						<AiFillGithub />
					</div>
					<div className={styles.btnContent}>
						<FaVimeoSquare />
					</div>
					<div className={styles.btnContent}>
						<AiFillYoutube />
					</div>
				</div>
				<div className={styles.lineContainer}>
					<CgLoadbarAlt size={50} />
				</div>
			</div>

			<div className={styles.downloadContent}>
				<div className={styles.cvContainer}>
					<div className={styles.btnContent}>
						<IoIosArrowDropdown />
					</div>
					<div className={styles.download}>Download CV</div>
				</div>
				<div className={styles.printContainer}>
					<div className={styles.btnContent}>
						<AiFillPrinter />
					</div>
					<div className={styles.download}>Download CV</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
