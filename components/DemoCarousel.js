import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AuthorComponent from "./AuthorComponent";
import { CgLoadbarAlt } from "react-icons/cg";

const DemoCarousel = () => {
	// const renderIndicator = ({ isSelected }) => {
	// 	return <CgLoadbarAlt size={50} isSelected={true} />;
	// };
	return (
		<Carousel showArrows={false} autoPlay={true} showStatus={false}>
			<div>
				<AuthorComponent />
			</div>
			<div>
				<AuthorComponent />
			</div>
		</Carousel>
	);
};

export default DemoCarousel;
