import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { pageTransitions, pageVariants } from "../../constants/animations";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const styles = {
	navBar: { display: "flex", position: "fixed", right: 0, top: 0 },
	current: { color: colors.highlight },
	navItem: {
		margin: "10px",
		color: colors.alt,
		fontFamily: fonts.regular,
		cursor: "pointer",
		listStyleType: "none",
	},
};

const Nav = () => {
	return (
		<motion.section
			initial="init"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
		>
			<nav
				style={styles.navBarContainer}
				aria-label="Top navigation bar container"
			>
				<ul style={styles.navBar} aria-label="Top navigation bar">
					<li>
						<Link to="/" style={{ ...styles.navItem, ...styles.current }}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/projects" style={styles.navItem}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/skills" style={styles.navItem}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="/me" style={styles.navItem}>
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" style={styles.navItem}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</motion.section>
	);
};

export default Nav;
