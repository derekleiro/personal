import React, { useState, useEffect } from "react";

import { colors } from "../../constants/colors";

const Ribbon = ({ customStyle }) => {
	const [height, setHeight] = useState(0);

	const style = {
		container: {
			border: `dotted 10px ${colors.accent}`,
			height: `${height}%`,
			borderRadius: "35px",
			opacity: 0.6,
			transition: "all ease-in-out 500ms",
		},
	};

	useEffect(() => {
		let unmounted = false;
		const timeout = setTimeout(() => {
			clearTimeout(timeout);
			return height < 100 && !unmounted
				? setHeight((prevHeight) => prevHeight + 10)
				: !unmounted
				? setHeight(0)
				: null;
		}, 1000);

		return () => {
			unmounted = true;
		};
	}, [height]);

	return <div style={{ ...style.container, ...customStyle }}></div>;
};

export default Ribbon;
