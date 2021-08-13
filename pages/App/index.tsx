import { Component } from 'react'
import Head from 'next/head'
import Input from '../../components/Common/Form/Input'
import Radio from '../../components/Common/Form/Radio'
import Steps from '../../components/Common/Form/Steps'
import Link from 'next/link'

class create extends Component<{},any>
{
	constructor(props: any) {
		super(props);
		this.state = {
			name: '',
			from: '',
			price: '$',
			position: 0,
			steps: ['Setup','Invite']
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
				<Steps position={this.state.position} steps={this.state.steps} />
				<div className="w-full flex flex-col items-center justify-center pb-12">
					<div className="flex-none w-full max-w-lg h-80 bg-gray-900 rounded-t-2xl shadow">

					</div>
					<div className="-m-6 p-4 w-full max-w-lg space-y-6 bg-white rounded-2xl shadow">
						<Input onChangeValue={this.handleChangeName} value={this.state.name} title="Who are you?" type="text"/>
						<Input onChangeValue={this.handleChangeFrom} value={this.state.from} title="Where are you from?" type="text"/>
						<Radio onChangeValue={this.handleChangePrice} value={this.state.price} title="How much are we looking to spend?" radios={['$','$$','$$$','$$$$']} group="cost"/>
						<div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start items-center">
							<Link href="/App/Invite">
								<a className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold">
									Next
								</a>
							</Link>
							<Link href="/">
								<a className="px-4 py-2 rounded-2xl text-gray-900 font-semibold">
									Cancel
								</a>
							</Link>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default create;
