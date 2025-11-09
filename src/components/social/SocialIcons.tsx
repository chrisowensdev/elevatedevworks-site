// components/SocialIcons.tsx
import { cn } from "@/lib/utils";
import {
	FaFacebook,
	FaXTwitter,
	// FaLinkedin,
	FaInstagram,
	// FaYoutube,
	// FaGithub,
} from "react-icons/fa6";

type SocialLinks = {
	facebook?: string;
	x?: string; // X (Twitter)
	linkedin?: string;
	instagram?: string;
	youtube?: string;
	github?: string;
};

type Props = {
	className?: string;
	size?: number; // icon size in px
	links?: SocialLinks; // optionally override placeholder URLs
};

export default function SocialIcons({ className, size = 20, links }: Props) {
	const items = [
		{
			key: "facebook",
			name: "Facebook",
			href: links?.facebook ?? "https://facebook.com/elevatedevworks",
			Icon: FaFacebook,
		},
		{
			key: "x",
			name: "X (Twitter)",
			href: links?.x ?? "https://x.com/elevatedevworks",
			Icon: FaXTwitter,
		},
		// { key: "linkedin", name: "LinkedIn", href: links?.linkedin ?? "#", Icon: FaLinkedin },
		{
			key: "instagram",
			name: "Instagram",
			href: links?.instagram ?? "https://instagram.com/elevatedevworks",
			Icon: FaInstagram,
		},
		// { key: "youtube", name: "YouTube", href: links?.youtube ?? "#", Icon: FaYoutube },
		// { key: "github", name: "GitHub", href: links?.github ?? "#", Icon: FaGithub },
	];

	return (
		<nav aria-label="Social media">
			<ul
				className={cn(
					"flex items-center gap-4 text-neutral-600",
					className
				)}
			>
				{items.map(({ key, name, href, Icon }) => (
					<li key={key}>
						<a
							href={href}
							target={
								href.startsWith("http") ? "_blank" : undefined
							}
							rel={
								href.startsWith("http")
									? "noopener noreferrer"
									: undefined
							}
							aria-label={name}
							className="transition-colors hover:text-neutral-900"
						>
							<span className="sr-only">{name}</span>
							<Icon size={size} aria-hidden="true" />
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
