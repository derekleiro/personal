import React, { useEffect, useState } from "react";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import Button from "../button/Button";

const Card = ({
	font,
	name,
	img,
	stack,
	demo,
	demoText,
	description,
	type,
	link,
}) => {
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
		container: {
			position: "relative",
			padding: clientWidth ? "0" : "25px",
			margin: "0 15px",
		},
		name: {
			fontFamily: font ? font : fonts.regular,
			fontWeight: 800,
			fontSize: "24px",
		},
		desc: { color: colors.alt },
		button: {
			marginTop: "15px",
		},
		stack: {
			background: colors.secondary,
			padding: "5px 15px",
			margin: "5px 5px 5px 0px",
			borderRadius: "35px",
			display: "inline-block",
		},
	};
	return (
		<div style={style.container}>
			<section>
				{img && <img src={img} alt={name} />}
				{!img && <h1 style={style.name}>{name}</h1>}
				{type && <p style={style.desc}>{type}</p>}
				<p style={style.desc}>{description}</p>

				<div style={style.stackContainer}>
					{stack &&
						stack.map((tool, index) => (
							<div style={style.stack} key={index}>
								{tool}
							</div>
						))}
				</div>
			</section>
			{demo && (
				<Button
					link={link}
					customStyle={style.button}
					text={demoText}
					type={"submit"}
					title={demoText}
				/>
			)}
		</div>
	);
};

export default Card;
