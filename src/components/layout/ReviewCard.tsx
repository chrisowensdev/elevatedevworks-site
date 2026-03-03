import * as React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export type ReviewCardProps = {
	reviewText: string;
	user: string;
	company?: string;
	href?: string;
};

export default function ReviewCard({
	reviewText,
	user,
	company,
	href,
}: ReviewCardProps) {
	const Wrapper: React.ElementType = href ? Link : "div";
	const wrapperProps = href ? { href } : {};

	return (
		<Wrapper
			{...wrapperProps}
			className={
				"group block h-full rounded-2xl focus:outline-none focus:ring-2 px-10"
			}
		>
			<article
				className={"relative h-full rounded-2xl  transition sm:px-10"}
			>
				<div className={"flex items-start gap-3"}>
					<div className="min-w-0">
						{reviewText ? (
							<div className="mt-2 text-sm text-gray-600 flex flex-col gap-3">
								<div className="display flex">
									<Star fill="#21a37c" stroke="none" />
									<Star fill="#21a37c" stroke="none" />
									<Star fill="#21a37c" stroke="none" />
									<Star fill="#21a37c" stroke="none" />
									<Star fill="#21a37c" stroke="none" />
								</div>

								<p className="">"{reviewText}"</p>
								<div className="text-right">
									<p>
										<span className="font-bold">
											{user}
										</span>{" "}
										<span className="italic">
											({company})
										</span>
									</p>
									<p></p>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</article>
		</Wrapper>
	);
}
