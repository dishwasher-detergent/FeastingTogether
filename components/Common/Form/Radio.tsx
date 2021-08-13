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
				<div className="relative z-0 flex w-full shadow-sm -space-x-px">
					{this.props.radios.map((radio, index) =>
						<label key={index} className={"flex-1 z-10 bg-gray-50 border-gray-300 relative inline-flex items-center px-4 py-2.5 border text-sm font-medium" + (index == 0 ? ' rounded-l-xl' : '') + (index == (this.props.radios.length - 1) ? ' rounded-r-xl' : '')}>
							<div className="flex justify-start items-center space-x-2 text-sm font-bold text-gray-500">
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