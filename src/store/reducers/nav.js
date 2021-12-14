export const nav = (state = "/", action) => {
	switch (action.type) {
		case "HANDLE_NAV":
			return (state = action.payload);
		default:
			return state;
	}
};
