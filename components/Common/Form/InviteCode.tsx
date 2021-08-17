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
		<div className="w-full flex items-center justify-center flex-col">
			<p className="w-full mb-1 ml-4 text-left text-sm font-bold text-gray-500">{title}</p>
			<label className="block w-48">
				<input maxLength={6} value={value} onChange={onChangeValue} placeholder={placeholder} type={type} className="w-full border border-gray-300 rounded-xl focus:border-blue-600 p-2 outline-none font-bold text-4xl text-center tracking-widest uppercase"/>
			</label>
		</div>
	)
}

export default Input;