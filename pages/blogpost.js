import React from "react";
import styles from "./BLOGPOST.module.css";
import LineComponent from "../components/LineComponent";
import Link from "next/link";
import { HiUser, HiTag } from "react-icons/hi";
import { FaComment, FaRegComments } from "react-icons/fa";
import { FaVimeoSquare } from "react-icons/fa";
import { CgFacebook, CgLoadbarAlt } from "react-icons/cg";
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

const blogpost = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>THE BLOG</div>
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
									<img
										className={styles.imageContainer}
										src='/assets/img/pic.jpeg'
									/>
								</div>
							</div>
						</a>
					</div>
					<div>
						<h1 className={styles.titleContainer}>
							<Link className={styles.titleContent} href='/blogpost'>
								Which design layout solution should you use ?
							</Link>
						</h1>
						<span className={styles.spanContainer}>13 Dec</span>
					</div>
					<ul className={styles.ulContainer}>
						<li className={styles.liContainer}>
							<span className={styles.liSpan}>
								<HiUser />
							</span>
							<span className={styles.liSpan}>
								Post by
								<a href='#' style={{ margin: "3px", color: "#7369b9" }}>
									Benaissa Ghrib
								</a>
							</span>
						</li>
						<li className={styles.liContainer}>
							<span className={styles.liSpan}>
								<HiTag />
							</span>
							<span className={styles.liSpan}>
								Tagged in
								<a href='#' style={{ margin: "3px", color: "#7369b9" }}>
									Web Design
								</a>
							</span>
						</li>
						<li className={styles.liContainer}>
							<span className={styles.liSpan}>
								<FaComment />
							</span>
							<span className={styles.liSpan}>
								Comments
								<a href='#' style={{ margin: "3px", color: "#7369b9" }}>
									(2)
								</a>
							</span>
						</li>
					</ul>
					<hr className={styles.hrContainer} />
					<p className={styles.paraContainer}>
						Spices are used extensively in Moroccan food. Although some spices
						have been imported to Morocco through the Arabs for thousands of
						years, many ingredients—like saffron from Talaouine, mint and olives
						from Meknes, and oranges and lemons from Fes—are home-grown, and are
						being exported internationally. Common spices include cinnamon,
						cumin, turmeric, ginger, paprika, coriander, saffron, mace, cloves,
						fennel, anise, nutmeg, cayenne pepper, fenugreek, caraway, black
						pepper and sesame seeds. Twenty-seven spices are combined for the
						famous Moroccan spice mixture ras el hanout.Common herbs in Moroccan
						cuisine include mint, parsley, coriander, oregano, peppermint,
						marjoram, verbena, sage and bay laurel.
					</p>
					<p className={styles.paraContainer}>
						Morocco produces a large range of Mediterranean fruits, vegetables
						and even some tropical ones. Common meats include beef, goat, mutton
						and lamb, chicken and seafood, which serve as a base for the
						cuisine. Characteristic flavorings include lemon pickle, argan oil,
						cold-pressed, unrefined olive oil and dried fruits. As in
						Mediterranean cuisine in general, the staple ingredients include
						wheat, used for bread and couscous, and olive oil; the third
						Mediterranean staple, the grape, is eaten as a dessert, though a
						certain amount of wine is made in the country
					</p>
					<h4 className={styles.titleContent}>Morrocan Couscous</h4>
					<p>
						The main Moroccan dish most people are familiar with is couscous,
						the old national delicacy. Beef is the most commonly eaten red meat
						in Morocco, usually eaten in a tagine with a wide selection of
						vegetables. Chicken is also very commonly used in tagines, or
						roasted.Lamb is also heavily consumed, and since Moroccan sheep
						breeds store most of their fat in their tails, Moroccan lamb does
						not have the pungent flavour that Western lamb and mutton have.
					</p>
					<figure className={styles.figureContainer}>
						<div className={styles.figureContent}>
							<div className={styles.figureInnerDiv}>
								<div className={styles.shadowDiv}>
									<img
										className={styles.imgDiv}
										src='/assets/img/pic.jpeg'></img>
								</div>
							</div>
						</div>
						<figcaption className={styles.figCaptionContainer}>
							Moroccan Couscous with vegetables
						</figcaption>
					</figure>
					<h5 className={styles.h5Container}>Moroccan Couscous</h5>
					<p>
						Usually, seasonal fruits rather than cooked desserts are served at
						the close of a meal. A common dessert is kaab el ghzal ("gazelle's
						horns"), a pastry stuffed with almond paste and topped with sugar.
						Another is "Halwa chebakia", pretzel-shaped dough deep-fried, soaked
						in honey and sprinkled with sesame seeds; it is eaten during the
						month of Ramadan. Coconut fudge cakes, 'Zucre Coco', are popular
						also.
					</p>
					<div className={styles.ulContainer}>
						<ul>
							<li>The Art of Moroccan Cuisine</li>
							<li>An Introduction to Mediterranean Cuisine</li>
							<li>Moroccan cuisine is influenced by Morocco's interactions</li>
							<li>Mediterranean cuisine</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.socialMediaDiv}>
				<hr
					className={styles.hrContainer}
					style={{
						marginBottom: "3rem",
						marginTop: "3rem",
						marginLeft: "5rem",
					}}
				/>
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
					<li className={styles.liSocialMediaDiv}>
						<Link className={styles.linkContainer} href='#'>
							<span className={styles.iconContainer}>
								<AiOutlineInstagram />
							</span>
						</Link>
					</li>
					<li className={styles.liSocialMediaDiv}>
						<Link className={styles.linkContainer} href='#'>
							<span className={styles.iconContainer}>
								<AiFillLinkedin />
							</span>
						</Link>
					</li>
					<li className={styles.liSocialMediaDiv}>
						<Link className={styles.linkContainer} href='#'>
							<span className={styles.iconContainer}>
								<AiFillGithub />
							</span>
						</Link>
					</li>
					<li className={styles.liSocialMediaDiv}>
						<Link className={styles.linkContainer} href='#'>
							<span className={styles.iconContainer}>
								<FaVimeoSquare />
							</span>
						</Link>
					</li>
					<li className={styles.liSocialMediaDiv}>
						<Link className={styles.linkContainer} href='#'>
							<span className={styles.iconContainer}>
								<AiFillYoutube />
							</span>
						</Link>
					</li>
				</ul>
				<hr
					className={styles.hrContainer}
					style={{
						marginBottom: "3rem",
						marginTop: "3rem",
						marginLeft: "5rem",
					}}
				/>
			</div>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>COMMENTS(4)</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<div className={styles.commentContainer}>
				<div className={styles.commentContent}>
					<ul className={styles.commentUl}>
						<li className={styles.commentLi}>
							<div>
								<div className={styles.commentOutterDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.commentInnerDiv}>
											<div className={styles.shadowInnerDiv}>
												<img
													className={styles.commentImageDiv}
													src='/assets/img/profile.jpeg'
												/>
											</div>
										</div>
									</div>
									<div className={styles.dateDiv}>
										<a className={styles.dateaContainer}>Benaissa Ghrib</a>
										<small className={styles.smallContainer}>
											10th January 2019
										</small>
									</div>
								</div>
							</div>
							<p className={styles.paraContainer}>
								A typical lunch meal begins with a series of hot and cold
								salads, followed by a tagine or Dwaz. Often, for a formal meal,
								a lamb or chicken dish is next, or couscous topped with meat and
								vegetables. Moroccans either eat with fork, knife and spoon or
								with their hands using bread as a utensil depending on the dish
								served. The consumption of pork and alcohol is uncommon due to
								religious restrictions
							</p>
							<a href='#' style={{ display: "flex" }}>
								<span className={styles.commentIcon}>
									<FaRegComments size={30} style={{ color: "#7369b9" }} />
								</span>
								<div
									style={{
										color: "#7369b9",
										marginTop: "7px",
										marginLeft: "4px",
										fontSize: "1rem",
									}}>
									Reply
								</div>
							</a>
						</li>
						<li className={styles.commentLi}>
							<div>
								<div className={styles.commentOutterDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.commentInnerDiv}>
											<div className={styles.shadowInnerDiv}>
												<img
													className={styles.commentImageDiv}
													src='/assets/img/profile.jpeg'
												/>
											</div>
										</div>
									</div>
									<div className={styles.dateDiv}>
										<a className={styles.dateaContainer}>Benaissa Ghrib</a>
										<small className={styles.smallContainer}>
											10th January 2019
										</small>
									</div>
								</div>
							</div>
							<p className={styles.paraContainer}>
								A typical lunch meal begins with a series of hot and cold
								salads, followed by a tagine or Dwaz. Often, for a formal meal,
								a lamb or chicken dish is next, or couscous topped with meat and
								vegetables. Moroccans either eat with fork, knife and spoon or
								with their hands using bread as a utensil depending on the dish
								served. The consumption of pork and alcohol is uncommon due to
								religious restrictions
							</p>
							<a href='#' style={{ display: "flex" }}>
								<span className={styles.commentIcon}>
									<FaRegComments size={30} style={{ color: "#7369b9" }} />
								</span>
								<div
									style={{
										color: "#7369b9",
										marginTop: "7px",
										marginLeft: "4px",
										fontSize: "1rem",
									}}>
									Reply
								</div>
							</a>
							<div className={styles.commentDiv}>
								<div className={styles.commentOutterDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.commentInnerDiv}>
											<div className={styles.shadowInnerDiv}>
												<img
													className={styles.commentImageDiv}
													src='/assets/img/profile.jpeg'
												/>
											</div>
										</div>
									</div>
									<div className={styles.dateDiv}>
										<a className={styles.dateaContainer}>Benaissa Ghrib</a>
										<small className={styles.smallContainer}>
											10th January 2019
										</small>
									</div>
								</div>
								<p className={styles.paraContainer}>
									Salads include both raw and cooked vegetables, served either
									hot or cold Cold salads include zaalouk, an aubergine and
									tomato mixture, and taktouka (a mixture of tomatoes, smoked
									green peppers, garlic and spices) characteristic of the cities
									of Taza and Fes, in the Atlas Another cold salad is called
									Bakoula, or Khoubiza. It consists of braised mallow leaves,
									but can also be made with spinach or arugula, with parsley,
									cilantro, lemon, olive oil and olives.
								</p>
								<a href='#' style={{ display: "flex" }}>
									<span className={styles.commentIcon}>
										<FaRegComments size={30} style={{ color: "#7369b9" }} />
									</span>
									<div
										style={{
											color: "#7369b9",
											marginTop: "7px",
											marginLeft: "4px",
											fontSize: "1rem",
										}}>
										Reply
									</div>
								</a>
							</div>
						</li>
						<li className={styles.commentLi}>
							<div>
								<div className={styles.commentOutterDiv}>
									<div className={styles.shadowDiv}>
										<div className={styles.commentInnerDiv}>
											<div className={styles.shadowInnerDiv}>
												<img
													className={styles.commentImageDiv}
													src='/assets/img/profile.jpeg'
												/>
											</div>
										</div>
									</div>
									<div className={styles.dateDiv}>
										<a className={styles.dateaContainer}>Benaissa Ghrib</a>
										<small className={styles.smallContainer}>
											10th January 2019
										</small>
									</div>
								</div>
							</div>
							<p className={styles.paraContainer}>
								A typical lunch meal begins with a series of hot and cold
								salads, followed by a tagine or Dwaz. Often, for a formal meal,
								a lamb or chicken dish is next, or couscous topped with meat and
								vegetables. Moroccans either eat with fork, knife and spoon or
								with their hands using bread as a utensil depending on the dish
								served. The consumption of pork and alcohol is uncommon due to
								religious restrictions
							</p>
							<a href='#' style={{ display: "flex" }}>
								<span className={styles.commentIcon}>
									<FaRegComments size={30} style={{ color: "#7369b9" }} />
								</span>
								<div
									style={{
										color: "#7369b9",
										marginTop: "7px",
										marginLeft: "4px",
										fontSize: "1rem",
									}}>
									Reply
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.workContainer}>
				<div className={styles.workContent}>LEAVE A COMMENT</div>
				<div>
					<LineComponent />
				</div>
			</div>
			<form action='#'>
				<div className={styles.commentContainer}>
					<div className={styles.commentContent}>
						<div className={styles.textareaContent}>
							<textarea
								className={styles.textareaContainer}
								name='description'
								rows='6'
								placeholder='Type your comment ...'></textarea>
						</div>
					</div>
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
								placeholder='Name'
								name='name'
								type='text'></input>
						</div>
					</div>
					<div className={styles.commentContentDiv}>
						<div className={styles.postCommentDiv}>
							<a className={styles.postCommentaDiv}>Post comment</a>
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

export default blogpost;
