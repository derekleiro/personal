import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Particles from "react-tsparticles";
import particlesOptions from "./constants/particles.json";
import { fonts } from "./constants/fonts";

import "./assets/fonts/fonts.css";
import Nav from "./components/nav/Nav";

const styles = {
	app: {
		color: "white",
		background: "transparent",
		position: "fixed",
		width: "clamp(800px, 80%, 80%)",
		height: "100%",
		margin: "50px auto 0 auto",
		fontFamily: fonts.regular,
		left: "50%",
		transform: "translate(-50%, 0)",
		overflow: "auto",
	},
	particleContainer: {
		width: "100%",
		height: "100%",
		position: "fixed",
		zIndex: -1,
	},
};

const App = () => {
	return (
		<Router>
			<Particles options={particlesOptions} style={styles.particleContainer} />
			<main style={styles.app}>
				<Nav />
				<Switch>
					<Route location="/" exact={true} component={Home} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
