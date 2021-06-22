import React from "react";

const Left = (props) => {
	return <div style={{ flex: props.flex }}>{props.children}</div>;
};

export default Left;
