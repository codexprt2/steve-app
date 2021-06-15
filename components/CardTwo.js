import React from "react";
import styles from "../styles/CardTwo.module.css";
import { HiHome } from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { GrCamera } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { CgMail } from "react-icons/cg";

import Image from "next/image";
import { style } from "@material-ui/system";

const CardTwo = () => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgDiv}>
				<div className={styles.profileImage}>
					<div className={styles.profileImageBorder}>
						<Image
							class={styles.roundedCircle}
							src='/assets/img/profile.jpeg'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
			<div className={styles.titleContainer}>
				<h2>Carlos Smith</h2>
				<p>Full Stack Developer</p>
			</div>
			<div className={styles.pageContainer}>
				<a href='/home'>
					<div className={styles.homeContainer}>
						<div style={{ alignItems: "center" }}>
							<span className={styles.element}>Home</span>
						</div>

						<div>
							<HiHome size={20} />
						</div>
					</div>
				</a>
				<a href='/about'>
					<div className={styles.homeContainer}>
						<div style={{ alignItems: "center" }}>
							<span className={styles.element}>About</span>
						</div>

						<div>
							<ImUser size={20} />
						</div>
					</div>
				</a>
				<a href='/portfolio'>
					<div className={styles.homeContainer}>
						<div style={{ alignItems: "center" }}>
							<span className={styles.element}>PortFolio</span>
						</div>

						<div>
							<GrCamera size={20} />
						</div>
					</div>
				</a>
				<a href='/blog'>
					<div className={styles.homeContainer}>
						<div style={{ alignItems: "center" }}>
							<span className={styles.element}>Blog</span>
						</div>

						<div>
							<TiMessages size={20} />
						</div>
					</div>
				</a>
				<a href='/contact'>
					<div className={styles.homeContainer}>
						<div style={{ alignItems: "center" }}>
							<span className={styles.element}>Contact</span>
						</div>

						<div>
							<CgMail size={20} />
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default CardTwo;
