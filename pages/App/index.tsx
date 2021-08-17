import React, { Component, useState } from 'react';
import Head from 'next/head';
import Input from '../../components/Common/Form/Input';
import Radio from '../../components/Common/Form/Radio';
import Steps from '../../components/Common/Form/Steps';
import Link from 'next/link';
import Layout from '../../components/Common/Layout';
import { supabase } from '../../utils/supabaseClient';
import useSession from '../../global-store/useSession';
import { useRouter  } from 'next/router';

const Create: React.FC = () => {

	const [name, setName] = useState('');
	const [from, setFrom] = useState('');
	const [price, setPrice] = useState('$');
	const [position, setPosition] = useState(0);
	const [steps, setSteps] = useState(['Setup','Invite']);
	const [warning, setWarning] = useState('');

	const { set, session_id } = useSession.getState();

	const router = useRouter()

	const handleChangeName = (e: { target: { value: any; }; }) => setName(e.target.value);
	const handleChangeFrom = (e: { target: { value: any; }; }) => setFrom(e.target.value);
	const handleChangePrice = (e: { target: { value: any; }; }) => setPrice(e.target.value);

	const addParticipant = async (value: string) => {
		try {
			const { data, error } = await supabase
			.from('participants')
			.insert([
				{ 
					session_id: value,
					user: name
				},
			])
			if (error) throw error
			set({user_id: data[0].id, user: name, creator: true})
		} catch (error) {
			console.log(error)
		}
	}

	const handleSessionId = (session: string) => {
		if(!session_id){
			set({
				session_id: session,
			});
			addParticipant(session)
		}

		router.push('/App/Invite')
	}

	const createSession = async () => {
		if(name.length <= 0){setWarning('Missing Name'); return} 
		if(from.length <= 0){setWarning('Missing Location'); return}

		try {
			const { data, error } = await supabase
			.rpc('create_session', {
				session_id_size: 6,
				creator: name,
				location: from,
				price: price
			})
			if (error) throw error
			handleSessionId(data)
		} catch (error) {
			console.log(error)
		}
	}	

	return (
		<Layout nav={false} footer={false}>
			<Head>
				<title>Creating Session</title>
			</Head>
			<Steps position={position} steps={steps} />
			<div className="w-full flex flex-col items-center justify-center pb-12">
				<div className="flex-none w-full max-w-lg h-80 bg-gray-900 rounded-t-2xl shadow">

				</div>
				<div className="-m-6 p-4 w-full max-w-lg space-y-6 bg-white rounded-2xl shadow">
					{(warning ? <p className="w-full py-2 px-4 bg-red-600 text-white rounded-2xl">{warning}</p> : null)}
					<Input onChangeValue={handleChangeName} value={name} title="Who are you?" type="text"/>
					<Input onChangeValue={handleChangeFrom} value={from} title="Where are you from?" type="text"/>
					<Radio onChangeValue={handleChangePrice} value={price} title="How much are we looking to spend?" radios={['$','$$','$$$','$$$$']} group="cost"/>
					<div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start items-center">
						<button className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold" onClick={createSession}>Next</button>
						<Link href="/">
							<a className="px-4 py-2 rounded-2xl text-gray-900 font-semibold">
								Cancel
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Create