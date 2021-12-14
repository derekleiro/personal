import React from "react";

const Part = ({flex, style, children}) => {
	return (
		<div style={{ ...style, flex }}>
			{children}
		</div>
	);
};

export default Part;
