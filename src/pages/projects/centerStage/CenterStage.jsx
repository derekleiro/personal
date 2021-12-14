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
			name: "Gezako",
			img: null,
			description: `Gezako is a Software QA organisation Tool, designed to simplify software QA. Working on the Frontend
			of the web app and UI design was one of my tasks during the 3 year period, working there.`,
			demo: true,
			demoText: "Visit",
			stack: ["React", "Redux", "Firebase"],
			type: "Frontend Web App",
			id: "7368129432",
			link: "https://gezako.com/",
		},
		{
			name: "random-ly",
			img: null,
			font: "Pacifico",
			description: `random-ly is a platform where you can send messages to people around the world,
    meet new people and find people with similar interests.`,
			demo: true,
			demoText: "Visit",
			stack: ["MongoDB", "Express", "React", "Redux", "Firebase"],
			type: "Fullstack Web App",
			id: "7309229432",
			link: "https://www.random-ly.com/",
		},
		{
			name: "Lively",
			img: null,
			description: `Lively is the to-do list, goals list & time tracker made to motivate you to be more productive and 
			break bad habits.`,
			demo: true,
			demoText: "Play Store",
			stack: ["React", "Redux", "IndexxedDB", "CapacitorJS", "Ionic React"],
			type: "Mobile App",
			id: "7368129092",
			link: "https://play.google.com/store/apps/details?id=com.lively.life",
		},
		{
			name: "derekleiro.me",
			img: null,
			description: `This is my own personal website, which you are viewing currently. It displays all my current
			projects, skills and dives deeper into my personality`,
			demo: true,
			demoText: "You're here!",
			stack: ["React", "Redux"],
			type: "Frontend Web App",
			id: "7097289432",
			link: false,
		},
		{
			name: "Baringo Rehab",
			img: null,
			description: `Baringo Rehabilitation center is a community based, non-profit organisation based in Marigat, Kenya. I
			was reposponsible in designing and making the website`,
			demo: true,
			demoText: "Visit",
			stack: ["React", "Redux"],
			type: "Frontend Web App",
			id: "736872081",
			link: "https://baringorehab.org/",
		},
		{
			name: "dashboard",
			img: null,
			description: `This is a dashboard, meant to challenge my problem solving skills.`,
			demo: true,
			demoText: "Demo",
			stack: ["React", "Redux"],
			type: "Problem Solving",
			id: "7981037432",
			link: "https://upwork-77430.web.app/",
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
									font={project.font}
									demo={project.demo}
									demoText={project.demoText}
									stack={project.stack}
									type={project.type}
									link={project.link}
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
