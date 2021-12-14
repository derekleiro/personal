import React, { lazy, Suspense } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import particlesOptions from "./constants/particles.json";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import { fonts } from "./constants/fonts";

import "./assets/fonts/home_fonts.css";
import Loading from "./components/loading/Loading";

const App = () => {
	const styles = {
		app: {
			color: "white",
			background: "transparent",
			position: "fixed",
			width: `80%`,
			height: "100%",
			margin: "0 auto 0 auto",
			paddingTop: "50px",
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

	const Particles = lazy(() => import("react-tsparticles"));
	const Projects = lazy(() => import("./pages/projects/Projects"));
	const Skills = lazy(() => import("./pages/skills/Skills"));
	const About = lazy(() => import("./pages/about/About"));
	const Contact = lazy(() => import("./pages/contact/Contact"));

	return (
		<Router>
			<Suspense fallback={<></>}>
				<Particles
					options={particlesOptions}
					style={styles.particleContainer}
				/>
			</Suspense>

			<main style={styles.app}>
				<Nav />

				<Switch>
					<Route
						path="/"
						exact={true}
						component={() => <Route path="/" exact={true} component={Home} />}
					/>

					<Route
						path="/projects"
						exact={true}
						component={() => (
							<Suspense fallback={<Loading />}>
								<Projects />
							</Suspense>
						)}
					/>
					<Route
						path="/skills"
						exact={true}
						component={() => (
							<Suspense fallback={<Loading />}>
								<Skills />
							</Suspense>
						)}
					/>
					<Route
						path="/me"
						exact={true}
						component={() => (
							<Suspense fallback={<Loading />}>
								<About />
							</Suspense>
						)}
					/>
					<Route
						path="/contact"
						exact={true}
						component={() => (
							<Suspense fallback={<Loading />}>
								<Contact />
							</Suspense>
						)}
					/>
					<Redirect path="*" to="/" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
