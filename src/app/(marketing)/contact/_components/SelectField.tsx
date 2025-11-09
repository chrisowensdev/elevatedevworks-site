export default function SelectField({
	id,
	label,
	value,
	onChange,
	options,
	name,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: { value: string; label: string }[];
	name: string;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={onChange}
				name={name}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm outline-none ring-emerald-500 transition focus:ring-2"
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
}
