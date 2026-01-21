import { Container } from "@/components/layout";
import { FadeIn } from "../media";
import SectionHeader from "./SectionHeader";

export default function ContentSection({
	eyebrow,
	title,
	children,
	className,
	bgColor,
}: {
	eyebrow: string;
	title: string;
	children: React.ReactNode;
	className?: string;
	bgColor?: string;
}) {
	return (
		<section className={bgColor}>
			<Container className={className}>
				<FadeIn>
					<SectionHeader eyebrow={eyebrow} title={title} />
					<div className="prose prose-gray mt-4 max-w-none text-gray-700">
						{children}
					</div>
				</FadeIn>
			</Container>
		</section>
	);
}
