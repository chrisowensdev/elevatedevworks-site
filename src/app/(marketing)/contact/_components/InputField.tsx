export default function InputField({
	id,
	label,
	value,
	onChange,
	type = "text",
	autoComplete,
	required,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	autoComplete?: string;
	required?: boolean;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
				required={required}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			/>
		</div>
	);
}
