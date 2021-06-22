export const pageVariants = {
	init: {
		opacity: 0,
		y: "-100vh",
		scale: 0.8,
	},
	in: {
		opacity: 1,
		y: "0",
		scale: 1,
	},
	out: {
		opacity: 0,
		y: "100vh",
		scale: 1.2,
	},
};

export const pageTransitions = {
	ease: "anticipate",
	type: "tween",
	duration: 1,
};
