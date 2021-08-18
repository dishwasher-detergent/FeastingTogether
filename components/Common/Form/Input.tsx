import React from "react"

interface inputProps
{
	title: string;
	value: any;
	placeholder?: string;
	type: string;
	onChangeValue?: any;
	warning?: boolean;
}

const Input: React.FC<inputProps> = ({ value , onChangeValue, title, placeholder, type, warning}) => 
{
	return (
		<label className="block w-full">
			<p className={"ml-4 mb-1 text-sm font-bold" + (warning ? ' text-red-600' : ' text-gray-500')}>{title}</p>
			<input value={value} onChange={onChangeValue} placeholder={placeholder} type={type} className={"w-full border rounded-xl focus:border-blue-600 px-4 py-2 outline-none" + (warning ? ' border-red-600' : ' border-gray-300')}/>
		</label>
	)
}

export default Input;