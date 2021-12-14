import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import CenterStage from "./centerStage/CenterStage";
import { nav } from "../../store/actions/nav";
import image_me from "../../assets/imgs/me.webp";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(nav("/"));
	}, [dispatch]);

	return (
		<>
			<Helmet>
				<title>Derek Leiro • Home</title>
				<meta
					name="description"
					content="Hello, my name is Derek Lemayan Leiro. I am a Frontend & MERN Stack developer based in Kenya"
					data-react-helmet="true"
				/>
				<meta
					property="og:title"
					content="Derek Leiro • Home"
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
					content="Hello, my name is Derek Lemayan Leiro. I am a Frontend & MERN Stack developer based in Kenya"
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
					content="Derek Leiro • Home"
					data-react-helmet="true"
				/>
				<meta
					property="twitter:description"
					content="Hello, my name is Derek Lemayan Leiro. I am a Frontend & MERN Stack developer based in Kenya"
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

export default Home;
