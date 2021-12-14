import React, { useState } from "react";
import { motion } from "framer-motion";

import "../../../assets/fonts/project_fonts.css";

import { pageTransitions, pageVariants } from "../../../constants/animations";
import Partition from "../../../components/partition/PartitionContainer";
import Card from "../../../components/card/Card";
import back_icon from "../../../assets/icons/back.png";
import next_icon from "../../../assets/icons/next.png";

const CenterStage = () => {
	const data = [
		{
			name: "Backend",
			img: null,
			description: `This is the stack/tech/skills I am experienced in and use in majority of my projects for 
            backend & API development.`,
			stack: [
				"MongoDB",
				"Node",
				"Express",
				"Firebase",
				"Python",
				"API development",
				"Git",
			],
			id: "7368129432",
		},
		{
			name: "Frontend",
			img: null,
			description: `This is the stack/tech/skills I am experienced in and use in majority of my projects to
            develop interactive interfaces to display data from the backend.`,
			stack: [
				"React",
				"Redux",
				"Firebase",
				"IndexxedDB",
				"JavaScript",
				"HTML 5",
				"CSS 3",
				"Framer Motion",
				"Git",
				"User experience",
				"Design consistency",
				"Minimal design language",
			],
			id: "7309229432",
		},
		{
			name: "App development",
			img: null,
			description: `This is the stack/tech/skills I am experienced in and use in majority of my projects to
            develop mobile apps for both iOS & Android.`,
			stack: [
				"IndexxedDB",
				"CapacitorJS",
				"Ionic React",
				"Flutter",
				"React Native",
				"Git",
			],
			id: "7368129092",
		},
	];
	const [renderData, setRenderData] = useState(data.slice(0, 3));
	const [index, setIndex] = useState(0);

	const handleBackClick = () => {
		const new_index = index - 1;
		setIndex(new_index);
		setRenderData(data.slice(new_index, new_index + 3));
	};

	const handleNextClick = () => {
		const new_index = index + 1;
		setIndex(new_index);
		setRenderData(data.slice(new_index, new_index + 3));
	};

	const style = {
		part: {
			display: "table",
			alignItems: "center",
			justifyContent: "center",
			flex: 1,
		},
		imgContain: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		img: { width: "35px", height: "35px", cursor: "pointer" },
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
				{index ? (
					<span style={style.imgContain}>
						<img
							onClick={handleBackClick}
							src={back_icon}
							style={style.img}
							alt="See previous project"
						/>
					</span>
				) : null}

				{renderData &&
					renderData.map((project) => {
						return (
							<div
								key={`${project.id}:${project.description}`}
								style={style.part}
							>
								<Card
									name={project.name}
									img={project.img ? project.img : null}
									description={project.description}
									stack={project.stack}
								/>
							</div>
						);
					})}

				{index !== Math.floor(data.length / 3) + 1 && data.length > 3 ? (
					<span style={style.imgContain}>
						<img
							onClick={handleNextClick}
							src={next_icon}
							style={style.img}
							alt="See next project"
						/>
					</span>
				) : null}
			</Partition>
		</motion.section>
	);
};

export default CenterStage;
