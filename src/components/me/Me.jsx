import React, { useEffect, useState } from "react";

import image_me from "../../assets/imgs/me.webp";
import { colors } from "../../constants/colors";

const Me = () => {
	const [clientWidth, setClientWidth] = useState(window.matchMedia("(max-width: 700px)").matches);

	useEffect(() => {
		window.addEventListener("resize", () =>
			setClientWidth(window.matchMedia("(max-width: 700px)").matches)
		);

		return () => {
			window.removeEventListener("resize", () =>
				setClientWidth(window.matchMedia("(max-width: 700px)").matches)
			);
		};
	}, []);

	const style = {
		container: { position: "relative" },
		img: {
			width: clientWidth ? "100%" : "500px",
			height: clientWidth ? "auto" : "500px",
			objectFit: "cover",
		},
		fade: {
			background: `linear-gradient(to top, ${colors.primary}, transparent)`,
			height: "100%",
			position: "absolute",
			bottom: "5px",
			width: "100%",
		},
	};
	return (
		<div style={style.container}>
			<img
				style={style.img}
				src={image_me}
				alt="Derek Leiro"
				title="Image of me, Derek Leiro"
				loading="lazy"
			/>
			<div style={style.fade}></div>
		</div>
	);
};

export default Me;
