import React from "react";
import { motion } from "framer-motion";
import { pageTransitions, pageVariants } from "../../../constants/animations";
import Partition from "../../../components/partition/PartitionContainer";
import Left from "../../../components/partition/LeftPart";
import Right from "../../../components/partition/RightPart";

const CenterStage = () => {
	return (
		<motion.section
			initial="init"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
		>
			<Partition>
				<Left flex={2}></Left>
				<Right flex={1}></Right>
			</Partition>
		</motion.section>
	);
};

export default CenterStage;
