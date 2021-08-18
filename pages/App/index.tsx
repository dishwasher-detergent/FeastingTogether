import React, { Component, useState } from 'react';
import Head from 'next/head';
import Input from '../../components/Common/Form/Input';
import Radio from '../../components/Common/Form/Radio';
import Steps from '../../components/Common/Form/Steps';
import Link from 'next/link';
import Layout from '../../components/Common/Layout';
import Card from '../../components/Common/Card'
import { supabase } from '../../utils/supabaseClient';
import useSession from '../../global-store/useSession';
import { useRouter  } from 'next/router';

const Create: React.FC = () => {

	const [name, setName] = useState('');
	const [from, setFrom] = useState('');
	const [price, setPrice] = useState('$');
	const [position, setPosition] = useState(0);
	const [steps, setSteps] = useState(['Setup','Invite']);
	const [nameWarning, setNameWarning] = useState(false);
	const [fromWarning, setFromWarning] = useState(false);

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
			set({user_id: data![0].id, user: name, creator: true})
		} catch (error) {
			console.log(error)
		}
	}

	const handleSessionId = (session: any) => {
		if(!session_id){
			set({
				session_id: session,
			});
			addParticipant(session)
		}

		router.push('/App/Invite')
	}

	const createSession = async () => {
		if(name.length <= 0){setNameWarning(true); return} 
		if(from.length <= 0){setFromWarning(true); return}

		try {
			const { data, error } = await supabase
			.rpc('create_session', {
				session_id_size: 6,
				creator: name,
				location: from,
				price: price
			})
			if (error) throw error
			if(data){
				handleSessionId(data)
			}
		} catch (error) {
			console.log(error)
		}
	}	

	return (
		<Layout nav={false} footer={false}>
			<Head>
				<title>Creating Session</title>
			</Head>
			<Card position={position} steps={steps}>
				<div className="flex-none w-full h-80 bg-gray-900 rounded-t-2xl">
				</div>
				<div className="flex-1 -m-6 p-4 pb-10 w-full space-y-6 bg-white rounded-2xl">
					<Input onChangeValue={handleChangeName} value={name} title="Who are you?" type="text" warning={nameWarning}/>
					<Input onChangeValue={handleChangeFrom} value={from} title="Where are you from?" type="text" warning={fromWarning}/>
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
			</Card>
		</Layout>
	)
}

export default Create