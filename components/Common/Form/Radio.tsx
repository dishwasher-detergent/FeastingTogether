import { Component } from "react"

interface inputProps
{
	title: string;
	value: any;
	radios: any[];
	group: string;
	onChangeValue?: any
}

class Radio extends Component<inputProps>
{
	render()
	{
		return (
			<div className="w-full">
				<p className="ml-4 mb-1 text-sm font-bold text-gray-500">{this.props.title}</p>
				<div className="flex flex-row justify-between bg-gray-50 border border-gray-300 rounded-2xl p-2">
					{this.props.radios.map((radio) =>
						<label key={radio} className="block w-20">
							<div className="flex justify-start items-center space-x-2 px-4 py-2 text-sm font-bold text-gray-500">
								<input checked={(this.props.value == radio ? true : false)} onChange={this.props.onChangeValue} type="radio" value={radio} name={this.props.group}/>
								<p>{radio}</p>
							</div>
						</label>
					)}
				</div>
			</div>
		)
	}
}

export default Radio;