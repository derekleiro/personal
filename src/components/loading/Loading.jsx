import React from "react";

const Loading = () => {
	const style = {
		loading: {
			color: "white",
			background: "transparent",
			position: "fixed",
			width: `80%`,
			height: "100%",
			margin: "50px auto 0 auto",
			left: "50%",
			transform: "translate(-50%, 0)",
			overflow: "auto",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	};
	return (
		<div style={style.loading} title="Loading screen">
			<div>Loading</div>
		</div>
	);
};

export default Loading;
