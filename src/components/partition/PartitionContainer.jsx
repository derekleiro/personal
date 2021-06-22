import React from "react";

const Partition = (props) => {
	return (
		<div
			style={{
				display: "flex",
				margin: "100px 0",
			}}
		>
			{props.children}
		</div>
	);
};

export default Partition;
