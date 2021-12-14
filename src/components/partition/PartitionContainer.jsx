import React, { useState, useEffect } from "react";

const Partition = ({ children, style }) => {
	const [clientWidth, setClientWidth] = useState(window.matchMedia("(max-width: 985px)").matches);

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

	return (
		<div
			style={{
				display: clientWidth ? "table" : "flex",
				flexWrap: "wrap",
				margin: clientWidth ? "100px auto" : "100px auto 0 auto",
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Partition;
