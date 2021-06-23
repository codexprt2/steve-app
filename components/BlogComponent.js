import React from "react";
import styles from "./BLOGCOMPONENT.module.css";
import { HiUser, HiTag } from "react-icons/hi";
import { FaComment } from "react-icons/fa";
import LineComponent from "./LineComponent";
import { IoMdQuote } from "react-icons/io";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";
import Link from "next/link";

const BlogComponent = () => {
	return (
		<div className={styles.mainContainer}>
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
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt.
					</p>
					<div className={styles.btnContainer}>
						<a className={styles.btnaContainer}> Read more</a>
					</div>
				</div>
				<div className={styles.lineContainer}>
					<LineComponent width='2.5rem' />
				</div>

				<div>
					<h1 className={styles.titleContainer}>
						<a className={styles.titleContent}>
							Standar blog post without image display
						</a>
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
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt.
				</p>
				<div className={styles.btnContainer}>
					<a className={styles.btnaContainer}> Read more</a>
				</div>
				<div className={styles.lineContainer}>
					<LineComponent width='2.5rem' />
				</div>
				<div>
					<h1 className={styles.titleContainer}>
						<a className={styles.titleContent}>
							Standar blog post without image display
						</a>
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
				<div className={styles.commentContainer}>
					<div className={styles.commentContent}>
						<div className={styles.commentOutterDiv}>
							<div className={styles.commentInnerDiv}>
								<div className={styles.roundContainer}>
									<div className={styles.roundContent}>
										<div className={styles.roundInnerContainer}>
											<FormatQuoteOutlinedIcon
												style={{ color: "#7369b9", fontSize: 45 }}
											/>
										</div>
									</div>
								</div>
								<div className={styles.bodyContainer}>
									<blockquote className={styles.bodyContent}>
										"Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore veritatis et
										quasi architecto beatae vitae dicta"
									</blockquote>
									<h6 className={styles.bodyTitle}>Stacy Taylor</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.allBlogContainer}>
				<div className={styles.allBlogContent}>
					<div className={styles.allBlogOutterDiv}>
						<a className={styles.allBlogaContainer}>View all blog posts</a>
					</div>
				</div>
			</div>
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

export default BlogComponent;
