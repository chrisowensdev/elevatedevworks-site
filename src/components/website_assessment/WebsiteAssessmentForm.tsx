"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function WebsiteAssessmentForm() {
	const [formData, setFormData] = useState({});

	const features = [
		{
			id: "contactForms",
			name: "Contact Forms",
		},
		{
			id: "bookingSystem",
			name: "Booking System",
		},
		{
			id: "blog",
			name: "Blog",
		},
		{
			id: "eCommerce",
			name: "eCommerce",
		},
		{
			id: "userLogin",
			name: "User Login",
		},
		{
			id: "liveChat",
			name: "Live Chat",
		},
		{
			id: "downloads",
			name: "Downloads",
		},
	];

	const labelPadding = 3;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const target = e.target;
		const { name, type, value } = target;

		// Handle checkbox specifically
		if (type === "checkbox" && target instanceof HTMLInputElement) {
			setFormData((prev) => ({
				...prev,
				[name]: target.checked,
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 max-w-3xl mx-auto p-4"
		>
			<Card>
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-xl font-semibold">
						Client Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label className={`pb-${labelPadding}`}>
								Business Name
							</Label>
							<Input
								name="businessName"
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label className={`pb-${labelPadding}`}>
								Contact Person
							</Label>
							<Input
								name="contactPerson"
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label className={`pb-${labelPadding}`}>
								Email
							</Label>
							<Input
								name="email"
								type="email"
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label className={`pb-${labelPadding}`}>
								Phone
							</Label>
							<Input name="phone" onChange={handleChange} />
						</div>
						<div>
							<Label className={`pb-${labelPadding}`}>
								Current Website
							</Label>
							<Input
								name="currentWebsite"
								onChange={handleChange}
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-xl font-semibold">Business Goals</h2>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Primary Website Goals
						</Label>
						<Textarea name="websiteGoals" onChange={handleChange} />
					</div>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Target Audience
						</Label>
						<Textarea
							name="targetAudience"
							onChange={handleChange}
						/>
					</div>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Unique Value Proposition
						</Label>
						<Textarea name="uvp" onChange={handleChange} />
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-xl font-semibold">Pages & Features</h2>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Required Pages
						</Label>
						<Textarea
							name="requiredPages"
							onChange={handleChange}
						/>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{features.map((feature) => (
							<div
								key={feature.id}
								className="flex items-center space-x-2"
							>
								<Checkbox
									id={feature.id}
									name={feature.name}
									onCheckedChange={(checked) =>
										setFormData((prev) => ({
											...prev,
											[feature.id]: checked,
										}))
									}
								/>
								<Label htmlFor={feature.name}>
									{feature.name}
								</Label>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-xl font-semibold">
						Design Preferences
					</h2>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Branding Assets
						</Label>
						<Textarea name="branding" onChange={handleChange} />
					</div>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Design Style
						</Label>
						<Input name="designStyle" onChange={handleChange} />
					</div>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Example Websites You Like
						</Label>
						<Textarea
							name="exampleWebsites"
							onChange={handleChange}
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-xl font-semibold">Timeline & Budget</h2>
					<div>
						<Label className={`pb-${labelPadding}`}>
							Desired Launch Date
						</Label>
						<Input
							name="launchDate"
							type="date"
							onChange={handleChange}
						/>
					</div>
					<div>
						<Label className={`pb-${labelPadding}`}>Budget</Label>
						<Input name="budget" onChange={handleChange} />
					</div>
				</CardContent>
			</Card>

			<div className="text-center">
				<Button type="submit">Submit</Button>
			</div>
		</form>
	);
}
