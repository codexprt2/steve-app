import styles from "./About.module.css";
import { CgLoadbarAlt } from "react-icons/cg";
import CustomizedProgressBars from "../components/ProgressBar";
import VerticalComponent from "../components/VerticalComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ContentComponent from "../components/ContentComponent";
const About = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.aboutContainer}>
				<div className={styles.aboutContent}>ABOUT ME</div>
				<div>
					<CgLoadbarAlt size={50} />
				</div>
			</div>
			<div className={styles.nameContent}>
				<h1 className={styles.h1font}>Carlos Smith</h1>
				<h7 className={styles.h6font}>Full Stack Developer</h7>
			</div>
			<div className={styles.paraDiv}>
				<div className={styles.paraContent}>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem
					</p>
				</div>
				<div className={styles.paraContent}>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem
					</p>
				</div>
			</div>

			<div className={styles.tableContainer}>
				<div className={styles.tableContent}>
					<div className={styles.ulContainer}>
						<div className={styles.mainDiv}>
							<span className={styles.spanDivRight}>Name</span>
							<span className={styles.spanDiv}>Carlos Smith</span>
						</div>
						<div className={styles.mainDiv}>
							<span className={styles.spanDivRight}>Birth</span>
							<span className={styles.spanDiv}>September 9, 1982</span>
						</div>
						<div className={styles.mainDivLast}>
							<span className={styles.spanDivRight}>City</span>
							<span className={styles.spanDiv}>Melbourne, Australia</span>
						</div>
					</div>
				</div>
				<div className={styles.tableContent}>
					<div className={styles.ulContainer}>
						<div className={styles.mainDiv}>
							<span className={styles.spanDivRight}>Email</span>
							<span className={styles.spanDiv}>youremail@gmail.com</span>
						</div>
						<div className={styles.mainDiv}>
							<span className={styles.spanDivRight}>Phone</span>
							<span className={styles.spanDiv}>+ 123 456 789 456</span>
						</div>
						<div className={styles.mainDivLast}>
							<span className={styles.spanDivRight}>Skype</span>
							<span className={styles.spanDiv}>Carlos_Smith</span>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.aboutContainer}>
				<div className={styles.aboutContent}>PROFESSIONAL SKILLS</div>
				<div>
					<CgLoadbarAlt size={50} />
				</div>
			</div>
			<div className={styles.progressContainer}>
				<div className={styles.progressContent}>
					<div className={styles.progress}>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>PHOTOSHOP</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>ILLUSTRATOR</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>INDESIGN</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
					</div>
					<div className={styles.elementDiv}>
						<VerticalComponent name='Design' />
					</div>
				</div>
				<br />
				<div className={styles.progressContent}>
					<div className={styles.progress}>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>HTML-CSS</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>JAVASCRIPT</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>PHP-MYSQL</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
					</div>
					<div className={styles.elementDiv}>
						<VerticalComponent name='CODING' />
					</div>
				</div>
				<br />

				<div className={styles.progressContent}>
					<div className={styles.progress}>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>RESPONSIBLE</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>CREATIVE</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
						<div className={styles.aboutContainer}>
							<div className={styles.pregressbarContent}>MULTITASKING</div>
							<div className={styles.progressbarContainer}>
								<CustomizedProgressBars />
							</div>
						</div>
					</div>
					<div className={styles.elementDiv}>
						<VerticalComponent name='ASSETS' />
					</div>
				</div>
			</div>

			<div className={styles.experienceContainer}>
				<div className={styles.aboutContainer}>
					<div className={styles.aboutContent}>EXPERIENCE</div>
					<div>
						<CgLoadbarAlt size={50} />
					</div>
				</div>
				<div className={styles.experienxeContent}>
					<div className={styles.experienceDiv}>
						<ExperienceComponent />
					</div>
					<div className={styles.list}>
						<ContentComponent />
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
