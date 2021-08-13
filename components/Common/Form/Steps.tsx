import { Component } from "react"

interface stepProps
{
	steps: any[];
	position: number;
}

class Steps extends Component<stepProps>
{
	render()
	{
		return (
			<div className="w-full flex items-center justify-center">
				<div className="flex flex-col justify-center mb-2.5 rounded-2xl bg-white shadow pt-3 pb-2 px-4">
					<div className="w-full flex flex-row justify-center mb-2">
						{this.props.steps.map((step, index) =>
							<div key={index} className={"mx-2 w-3 h-3 rounded-full" + (index == this.props.position ? ' ring-4 ring-blue-200 bg-blue-600' : ' bg-blue-200')}></div>
						)}
					</div>
					<p className="text-xs font-bold text-gray-500 text-center">{this.props.steps[this.props.position]}</p>
				</div>
			</div>
		)
	}
}

export default Steps;