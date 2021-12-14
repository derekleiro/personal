import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { pageTransitions, pageVariants } from "../../constants/animations";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const Nav = () => {
	const state = useSelector((store) => store.nav);
	const end = useRef(null);

	const [clientWidth, setClientWidth] = useState(
		window.matchMedia("(max-width: 985px)").matches
	);

	useEffect(() => {
		window.addEventListener("resize", () =>
			setClientWidth(window.matchMedia("(max-width: 500px)").matches)
		);

		return () => {
			window.removeEventListener("resize", () =>
				setClientWidth(window.matchMedia("(max-width: 500px)").matches)
			);
		};
	}, []);

	useEffect(() => {
		end.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	const styles = {
		navBar: {
			display: "flex",
			position: clientWidth ? "static" : "fixed",
			right: 0,
			top: 0,
			whiteSpace: "nowrap",
			overflow: "auto",
		},
		current: { color: colors.highlight },
		navItem: {
			margin: "10px",
			color: colors.alt,
			fontFamily: fonts.regular,
			cursor: "pointer",
			listStyleType: "none",
		},
		fade: {
			width: "50px",
			height: "30px",
			position: "absolute",
			top: 0,
		},
		fadeLeft: {
			left: 0,
			background: `linear-gradient(to right, ${colors.primary}, transparent)`,
		},
		fadeRight: {
			right: 0,
			background: `linear-gradient(to left, ${colors.primary}, transparent)`,
		},
	};

	const current = { ...styles.navItem, ...styles.current };
	const item = { ...styles.navItem };
	return (
		<motion.section
			initial="init"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
		>
			<nav style={styles.navBarContainer}>
				{clientWidth && (
					<span style={{ ...styles.fade, ...styles.fadeLeft }}></span>
				)}

				<ul style={styles.navBar}>
					<li>
						<Link to="/" style={state === "/" ? current : item}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/projects" style={state === "/projects" ? current : item}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/skills" style={state === "/skills" ? current : item}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="/me" style={state === "/me" ? current : item}>
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" style={state === "/contact" ? current : item}>
							Contact
						</Link>
						<span style={{ marginLeft: "15px" }} ref={end}></span>
					</li>
				</ul>

				{clientWidth && (
					<span style={{ ...styles.fade, ...styles.fadeRight }}></span>
				)}
			</nav>
		</motion.section>
	);
};

export default Nav;
