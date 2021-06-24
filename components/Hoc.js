import React from "react";
import styles from "../styles/Hoc.module.css";
import SettingsIcon from "@material-ui/icons/Settings";
import FlareIcon from "@material-ui/icons/Flare";
import { CgFacebook } from "react-icons/cg";
import CardTwo from "./CardTwo";
import Link from "next/link";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";

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
					{children}

					<div className={styles.lastContent}>
						<div className={styles.lastContainer}>
							<p className={styles.paraContainer}>
								Font by
								<a
									className={styles.paraContent}
									href='https://www.flaticon.com'>
									flaticon.com
								</a>
								Under
								<a
									className={styles.paraContent}
									href='https://creativecommons.org/licenses/by/3.0/'>
									CC:
								</a>
								<a
									className={styles.paraContent}
									href='https://www.flaticon.com/authors/eucalyp'>
									Eucalyp
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className={styles.card2}>
					<CardTwo />
					<div className={styles.footerDiv}>
						<p className={styles.footerPara}>© 2020 Mutationthemes.</p>
						<ul className={styles.ulSocialMediaDiv}>
							<li className={styles.liSocialMediaDiv}>
								<Link className={styles.linkContainer} href='#'>
									<span className={styles.iconContainer}>
										<CgFacebook />
									</span>
								</Link>
							</li>
							<li className={styles.liSocialMediaDiv}>
								<Link className={styles.linkContainer} href='#'>
									<span className={styles.iconContainer}>
										<AiOutlineGoogle />
									</span>
								</Link>
							</li>
							<li className={styles.liSocialMediaDiv}>
								<Link className={styles.linkContainer} href='#'>
									<span className={styles.iconContainer}>
										<AiOutlineTwitter />
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hoc;
