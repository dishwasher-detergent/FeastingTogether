import { Component } from "react"

interface inputProps
{
	title: string;
	value: any;
	placeholder?: string;
	type: string;
	onChangeValue?: any
}

class Input extends Component<inputProps>
{
	render()
	{
		return (
			<label className="block w-full">
				<p className="ml-4 mb-1 text-sm font-bold text-gray-500">{this.props.title}</p>
				<input value={this.props.value} onChange={this.props.onChangeValue} placeholder={this.props.placeholder} type={this.props.type} className="w-full border border-gray-300 rounded-xl focus:border-blue-600 px-4 py-2 outline-none"/>
			</label>
		)
	}
}

export default Input;