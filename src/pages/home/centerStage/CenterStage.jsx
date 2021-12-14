import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { pageTransitions, pageVariants } from "../../../constants/animations";
import Partition from "../../../components/partition/PartitionContainer";
import Part from "../../../components/partition/Part";
import Ribbon from "../../../components/shapes/Ribbon";
import Me from "../../../components/me/Me";
import { colors } from "../../../constants/colors";

import IG from "../../../assets/icons/ig.png";
import LINKEDIN from "../../../assets/icons/linkedin.png";
import TWIT from "../../../assets/icons/twit.png";
import GIT from "../../../assets/icons/git.png";

const CenterStage = () => {
	const [clientWidth, setClientWidth] = useState(
		window.matchMedia("(max-width: 985px)").matches
	);

	useEffect(() => {
		window.addEventListener("resize", () =>
			setClientWidth(window.matchMedia("(max-width: 985px)").matches)
		);

		return () => {
			window.removeEventListener("resize", () =>
				setClientWidth(window.matchMedia("(max-width: 985px)").matches)
			);
		};
	}, []);

	const style = {
		h2: { color: colors.accent, lineHeight: 0 },
		h1: { fontSize: "60px", lineHeight: 1.1, color: colors.highlight },
		p: { color: colors.alt, lineHeight: 0 },
		socials: { display: "flex", marginTop: "25px", cursor: "pointer" },
		item: { flex: 1 },
		img: { width: "25px", height: "25px" },
	};
	return (
		<motion.section
			initial="init"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
		>
			<Partition>
				<Part
					flex={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Me />
				</Part>
				<Part
					flex={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div>
						<section>
							<h2 style={style.h2}>Hello, I'm</h2>
							<h1 style={style.h1}>
								Derek <br /> Lemayan <br /> Leiro
							</h1>
							<p style={style.p}>MERN Stack / Frontend Developer</p>
						</section>
						<div style={style.socials}>
							<div style={style.item}>
								<a
									href="https://www.instagram.com/derekleiro/"
									target="_blank"
									rel="noreferrer"
								>
									<img style={style.img} src={IG} alt="My Instagram" />
								</a>
							</div>
							<div style={style.item}>
								<a
									href="https://linkedin.com/in/derekleiro"
									target="_blank"
									rel="noreferrer"
								>
									<img style={style.img} src={LINKEDIN} alt="My LinkedIn" />
								</a>
							</div>
							<div style={style.item}>
								<a
									href="https://www.twitter.com/derekleiro/"
									target="_blank"
									rel="noreferrer"
								>
									<img style={style.img} src={TWIT} alt="My Twitter" />
								</a>
							</div>
							<div style={style.item}>
								<a
									href="https://github.com/derekleiro"
									target="_blank"
									rel="noreferrer"
								>
									<img style={style.img} src={GIT} alt="My Github" />
								</a>
							</div>
						</div>
					</div>
				</Part>

				{!clientWidth && (
					<Ribbon customStyle={{ position: "absolute", top: 0, right: 0 }} />
				)}
			</Partition>
		</motion.section>
	);
};

export default CenterStage;
