import React from "react"

interface inputProps
{
	title: string;
	value: any;
	placeholder?: string;
	type: string;
	onChangeValue?: any
}

const Input: React.FC<inputProps> = ({ value , onChangeValue, title, placeholder, type}) => 
{
	return (
		<label className="block w-full">
			<p className="ml-4 mb-1 text-sm font-bold text-gray-500">{title}</p>
			<input value={value} onChange={onChangeValue} placeholder={placeholder} type={type} className="w-full border border-gray-300 rounded-xl focus:border-blue-600 px-4 py-2 outline-none"/>
		</label>
	)
}

export default Input;