import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import image_me from "../../assets/imgs/me.webp";
import { nav } from "../../store/actions/nav";
import CenterStage from "./centerStage/CenterStage";

const Projects = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(nav("/projects"));
	}, [dispatch]);

	return (
		<>
			<Helmet>
				<title>Derek Leiro • Projects</title>
				<meta
					name="description"
					content="Projects I have worked on, in the past"
					data-react-helmet="true"
				/>
				<meta
					property="og:title"
					content="Derek Leiro • Projects"
					data-react-helmet="true"
				/>
				<meta property="og:type" content="website" data-react-helmet="true" />
				<meta property="og:image" content={image_me} data-react-helmet="true" />
				<meta
					property="og:image:url"
					content={image_me}
					data-react-helmet="true"
				/>
				<meta
					property="og:image:type"
					content="image/png"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:width"
					content="500"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:height"
					content="500"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:alt"
					content="Derek Leiro"
					data-react-helmet="true"
				/>
				<meta
					property="og:description"
					content="Projects I have worked on, in the past"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:card"
					content="summary"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:site"
					content="Derek Leiro"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:title"
					content="Derek Leiro • Projects"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:description"
					content="Projects I have worked on, in the past"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:image"
					content={image_me}
					data-react-helmet="true"
				/>
				<meta
					property="twitter:image:alt"
					content="Derek Leiro"
					data-react-helmet="true"
				/>
				<meta
					name="keywords"
					content="web developers, Frontend developers, Rising talent, Lively, React developers, React, MERN stack"
					data-react-helmet="true"
				/>
				<meta name="robots" content="index, follow" data-react-helmet="true" />
				<meta name="author" content="Derek Leiro" data-react-helmet="true" />
			</Helmet>

			<CenterStage />
		</>
	);
};

export default Projects;
