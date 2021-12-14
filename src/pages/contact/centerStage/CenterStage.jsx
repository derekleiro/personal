import React, { useState } from "react";
import { motion } from "framer-motion";
import mail from "email-validator";

import { pageTransitions, pageVariants } from "../../../constants/animations";
import Partition from "../../../components/partition/PartitionContainer";
import Part from "../../../components/partition/Part";
import Button from "../../../components/button/Button";
import Me from "../../../components/me/Me";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

const CenterStage = () => {
	const [invalidEmail, setInvalidEmail] = useState(false);

	const style = {
		section: {
			display: "flex",
			alignItems: "center",
			marginTop: "25px",
			flexWrap: "wrap",
		},
		left: { flex: 2 },
		right: { flex: 8 },
		textarea: { resize: "none", minHeight: "150px" },
		shared: {
			background: colors.secondary,
			outline: 0,
			border: 0,
			fontFamily: fonts.regular,
			color: colors.highlight,
			padding: "10px",
			boxShadow: `10px -10px 0 rgba(${colors.accentRGB}, 0.1)`,
		},
		warn: { color: colors.accent, fontSize: "12px", marginTop: "10px" },
	};

	const handleEmailInput = (e) => {
		const validEmail = mail.validate(e.target.value);
		if (validEmail) {
			setInvalidEmail(false);
		} else {
			setInvalidEmail(true);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const fname = e.target["fname"].value;
		const lname = e.target["lname"].value;
		const email = e.target["email"].value;
		const msg = e.target["msg"].value;

		if (!invalidEmail) {
			if (
				fname.trim().length !== 0 &&
				lname.trim().length !== 0 &&
				email.trim().length !== 0 &&
				msg.trim().length !== 0
			) {
				try {
					const response = await fetch(
						`https://tranquil-fortress-57382.herokuapp.com/contact`,
						{
							method: "POST",
							body: JSON.stringify({
								fname,
								lname,
								email,
								msg,
							}),
							headers: { "Content-Type": "application/json" },
							mode: "no-cors",
						}
					);

					if (response.ok) {
						const JSONresponse = await response.json();
						if (JSONresponse) {
							console.log(JSONresponse);
						}
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
	return (
		<motion.section
			initial="init"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
		>
			<Partition>
				<Part
					flex={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Me />
				</Part>
				<Part
					flex={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<form onSubmit={handleSubmit} style={{ width: "100%" }}>
						<section style={style.section}>
							<div style={style.left}>
								<label name="First name">First name *</label>
							</div>

							<input
								type="text"
								required
								name="fname"
								style={{ ...style.shared, ...style.right }}
								title="Enter your first name"
								placeholder="eg. John"
							></input>
						</section>
						<section style={style.section}>
							<div style={style.left}>
								<label name="Last name">Last name *</label>
							</div>

							<input
								type="text"
								name="lname"
								required
								style={{ ...style.shared, ...style.right }}
								title="Enter your last name"
								placeholder="eg. Doe"
							></input>
						</section>
						<section style={style.section}>
							<div style={style.left}>
								<label name="Email">Your email *</label>
							</div>

							<div style={style.right}>
								<input
									type="text"
									name="email"
									required
									style={{ ...style.shared, width: "100%" }}
									title="Enter your email"
									onChange={handleEmailInput}
									placeholder="eg. your@business.com"
								></input>
								{invalidEmail && <div style={style.warn}>Invalid email</div>}
							</div>
						</section>

						<section style={style.section}>
							<div style={style.left}>
								<label name="Email">Body *</label>
							</div>

							<textarea
								type="text"
								name="msg"
								required
								title="Enter your message"
								style={{ ...style.textarea, ...style.shared, ...style.right }}
								placeholder="I would to to work with you on...."
							></textarea>
						</section>
						<section style={style.section}>
							<div style={style.left}>
								<label name="Submit"></label>
							</div>

							<span style={style.right}>
								<Button
									func={null}
									text={"Submit"}
									type={"submit"}
									title={"Send mail"}
								/>
							</span>
						</section>
					</form>
				</Part>
			</Partition>
		</motion.section>
	);
};

export default CenterStage;
