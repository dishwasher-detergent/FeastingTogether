import { Component } from 'react'
import Head from 'next/head'
import Input from '../../components/Common/Form/Input'
import Radio from '../../components/Common/Form/Radio'

class create extends Component<{},any>
{
	constructor(props: any) {
		super(props);
		this.state = {
			name: '',
			from: '',
			price: '$',
		};
	}

	handleChangeName = (e: { target: { value: any; }; }) => this.setState({name: e.target.value});

	handleChangeFrom = (e: { target: { value: any; }; }) => this.setState({from: e.target.value});

	handleChangePrice = (e: { target: { value: any; }; }) => this.setState({price: e.target.value});

	render(){
		return (
			<>
				<Head>
					<title>Creating Session</title>
				</Head>
				<div className="w-full flex flex-col items-center justify-center pb-12">
					<div className="flex-none w-full md:w-96 h-80 bg-gray-900 rounded-t-2xl shadow">

					</div>
					<div className="-m-6 p-4 w-full md:w-96 space-y-6 bg-white rounded-2xl shadow">
						<Input onChangeValue={this.handleChangeName} value={this.state.name} title="Who are you?" type="text"/>
						<Input onChangeValue={this.handleChangeFrom} value={this.state.from} title="Where are you from?" type="text"/>
						<Radio onChangeValue={this.handleChangePrice} value={this.state.price} title="How much are we looking to spend?" radios={['$','$$','$$$','$$$$']} group="cost"/>
					</div>
				</div>
			</>
		)
	}
}

export default create;
