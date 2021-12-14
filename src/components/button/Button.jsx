import React from "react";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const Button = ({ func, text, type, title, customStyle, link }) => {
	const style = {
		button: {
			outline: 0,
			border: 0,
			cursor: "pointer",
			borderRadius: "35px",
			padding: "2px 10px",
			background: colors.accent,
			fontFamily: fonts.regular,
			...customStyle,
		},
	};
	return (
		<button onClick={func} style={style.button} type={type} title={title}>
			{link && (
				<a href={link} target="_blank" rel="noreferrer">
					{text}
				</a>
			)}
			{!link && <>{text}</>}
		</button>
	);
};

export default Button;
