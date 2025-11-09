export default function TextArea({
	id,
	label,
	value,
	onChange,
	rows = 6,
	required,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows?: number;
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
			<textarea
				id={id}
				value={value}
				onChange={onChange}
				rows={rows}
				required={required}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			/>
		</div>
	);
}
