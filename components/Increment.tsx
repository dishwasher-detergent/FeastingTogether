import React, { Component } from 'react'

interface MyProps { }

interface MyState
{
	amount: number;
}

class Increment extends Component<MyProps, MyState>
{
	constructor(props: any)
	{
		super(props);
		this.state = { 
			amount: 0 
		};
	}

	IncrementItem = () =>
	{
		this.setState({ amount: this.state.amount + 1 });
	}
	render()
	{
		return (
			<div>
				<h2>{this.state.amount}</h2>
				<button onClick={this.IncrementItem}>Increment</button>
			</div>
		);
	}
}

export default Increment;