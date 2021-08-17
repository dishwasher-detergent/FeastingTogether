import React, { useState } from 'react'
import Head from 'next/head'
import Steps from '../../components/Common/Form/Steps'
import Link from 'next/link'
import Input from '../../components/Common/Form/Input';
import InviteCode from '../../components/Common/Form/InviteCode';
import Layout from '../../components/Common/Layout'
import useSession from '../../global-store/useSession';
import { supabase } from '../../utils/supabaseClient';
import { useRouter  } from 'next/router';

const Join: React.FC = () => {
	const [position, setPosition] = useState(0);
	const [steps, setSteps] = useState(['Join','Wait']);
	const [name, setName] = useState('');
	const [session, setSession] = useState('000000');

	const { set, session_id, user_id } = useSession.getState();

	const router = useRouter()

	const handleChangeName = (e: { target: { value: any; }; }) => setName(e.target.value);
	const handleChangeSession = (e: { target: { value: any; }; }) => setSession(e.target.value);

	const checkCode = async () => {
		try {
			const { data: result, error } = await supabase
			.from('session')
			.select('id')
			.eq('id', session)
			.neq('finished', true)
			if (error) throw error
			return result
		} catch (error) {
			console.log(error)
		}
	}

	const addParticipant = async () => {
		if(await checkCode()){
			try {
				const { data, error } = await supabase
				.from('participants')
				.insert([
					{ 
						session_id: session,
						user: name
					},
				])
				if (error) throw error
				set({session_id: session, user_id: data[0].id, user: name})
				router.push('/App/Invite')
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<Layout nav={false} footer={false}>
			<Head>
				<title>Invite Friends!</title>
			</Head>
			<Steps position={position} steps={steps} />
			<div className="w-full flex flex-col items-center justify-center pb-12">
				<div className="p-4 w-full max-w-lg space-y-6 bg-white rounded-2xl shadow">
					<Input onChangeValue={handleChangeName} value={name} title="Who are you?" type="text"/>
					<InviteCode onChangeValue={handleChangeSession} value={session} title="What's your invite code?" type="text"/>
					<div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start items-center">
						<button className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold" onClick={addParticipant}>Join</button>
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

export default Join;