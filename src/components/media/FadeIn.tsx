// components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function FadeIn({
	children,
	className = "",
	delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
