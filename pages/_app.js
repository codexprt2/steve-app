import "../styles/globals.css";
import Hoc from "../components/Hoc";

function MyApp({ Component, pageProps }) {
	return (
		<Hoc>
			<Component {...pageProps} />
		</Hoc>
	);
}

export default MyApp;
