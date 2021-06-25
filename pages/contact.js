import React from "react";
import styles from "./CONTACT.module.css";
import LineComponent from "../components/LineComponent";
import SimpleMap from "../components/SimpleMap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosGlobe, IoIosArrowDropdown } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";

const contact = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>MAP LOCATION</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<a className={styles.aContainer}>
							<div className={styles.aInnerDiv}>
								<div className={styles.shadowDiv}>
									<SimpleMap className={styles.imageContainer} />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.workContainer} style={{ marginTop: "4rem" }}>
				<div className={styles.workContent}>CONTACT INFO</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<div className={`${styles.contactContainer} ${styles.infoContainer}`}>
				<div className={styles.contactContent}>
					<div className={styles.contactOutterDiv}>
						<div className={styles.contactInnerDiv}>
							<div className={styles.shadowInnerDiv}>
								<div className={styles.iconContainer}>
									<HiOutlineLocationMarker
										size={45}
										style={{ color: "#7369b9" }}
									/>
								</div>
							</div>
						</div>
						<h2 className={styles.iconh2Container}>
							The Company Name Inc.1234 Street Road
							<br />
							City Name,IN 567 890.
						</h2>
					</div>
				</div>

				<div className={styles.emailContent}>
					<div style={{ textAlign: "center" }}>
						<div style={{ borderRadius: "5rem" }}>
							<div
								className={styles.shadowInnerDiv}
								style={{ width: "4rem", height: "4rem" }}>
								<div className={styles.emailIcon}>
									<GoMail size={35} style={{ color: "#7369b9" }} />
								</div>
							</div>
						</div>
						<p className={styles.emailPara}>Email : name@gmail.com </p>
					</div>
				</div>
				<div className={styles.emailContent}>
					<div style={{ textAlign: "center" }}>
						<div style={{ borderRadius: "5rem" }}>
							<div
								className={styles.shadowInnerDiv}
								style={{ width: "4rem", height: "4rem" }}>
								<div className={styles.emailIcon}>
									<MdPhoneInTalk size={35} style={{ color: "#7369b9" }} />
								</div>
							</div>
						</div>
						<p className={styles.emailPara}>Phone : (513) 352-3209 </p>
					</div>
				</div>
				<div className={styles.emailContent}>
					<div style={{ textAlign: "center" }}>
						<div style={{ borderRadius: "5rem" }}>
							<div
								className={styles.shadowInnerDiv}
								style={{ width: "4rem", height: "4rem" }}>
								<div className={styles.emailIcon}>
									<IoIosGlobe size={35} style={{ color: "#7369b9" }} />
								</div>
							</div>
						</div>
						<p className={styles.emailPara}>Site : www.yoursite.com </p>
					</div>
				</div>
			</div>

			<div className={styles.workContainer} style={{ marginTop: "3rem" }}>
				<div className={styles.workContent}>SEND ME AN EMAIL</div>
				<div>
					<LineComponent />
				</div>
			</div>

			<form action='#'>
				<div className={styles.commentContainer}>
					<div className={styles.teaxtareaDiv}>
						<div className={styles.teaxtareaOutterDiv}>
							<input
								className={styles.inputDiv}
								placeholder='Name'
								name='name'
								type='text'></input>
						</div>
					</div>
					<div className={styles.teaxtareaDiv}>
						<div className={styles.teaxtareaOutterDiv}>
							<input
								className={styles.inputDiv}
								placeholder='Email'
								name='Email'
								type='text'></input>
						</div>
					</div>
					<div className={styles.teaxtareaDiv}>
						<div className={styles.teaxtareaOutterDiv}>
							<input
								className={styles.inputDiv}
								placeholder='Company'
								name='Company'
								type='text'></input>
						</div>
					</div>
					<div className={styles.teaxtareaDiv}>
						<div className={styles.teaxtareaOutterDiv}>
							<input
								className={styles.inputDiv}
								placeholder='Subject'
								name='subject'
								type='text'></input>
						</div>
					</div>
					<div className={styles.commentContent}>
						<div className={styles.textareaContent}>
							<textarea
								className={styles.textareaContainer}
								name='description'
								rows='6'
								placeholder='Type your comment ...'></textarea>
						</div>
						<div className={styles.commentContentDiv}>
							<div className={styles.postCommentDiv}>
								<a className={styles.postCommentaDiv}>Send message</a>
							</div>
						</div>
					</div>
				</div>
			</form>

			<div className={styles.lineDiv}>
				<LineComponent />
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

export default contact;
