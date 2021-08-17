import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Steps from '../../components/Common/Form/Steps'
import Link from 'next/link'
import Layout from '../../components/Common/Layout'
import useSession from '../../global-store/useSession';
import { supabase } from '../../utils/supabaseClient';

const Invite: React.FC = () => {
	const [position, setPosition] = useState(1);
	const [steps, setSteps] = useState(['Setup','Invite']);
	const [users, setUsers] = useState([]);

	const mountedRef = useRef(false)

	const { set, session_id, user_id, creator } = useSession.getState();

	useEffect(() => {
		mountedRef.current = true

		fetchParticipants()
		const participants = supabase
		.from(`participants:session_id=eq.${session_id}`)
		.on('*', payload => {
			fetchParticipants()
		})
		.subscribe()
		return () => {
			supabase.removeSubscription(participants);
			mountedRef.current = false
		};
	});

	const fetchParticipants = async () => {
		try {
			const { data: participants, error } = await supabase
			.from('participants')
			.select('user')
			.eq('session_id', session_id)
			if (error) throw error
			if (mountedRef.current) {
				setUsers(participants)
			}
		} catch (error) {
			console.log(error)
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
					<h1 className="text-xl font-bold">Invite your friends!</h1>
					<div className="flex flex-row items-center space-x-2">
						<p>Invite Code:</p>
						<span className="flex flex-row bg-blue-100 rounded-2xl px-3 py-1 text-blue-700 font-bold">
							<p className="mr-2">{session_id}</p>
							<button className="p-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
								</svg>
							</button>
						</span>
						</div>
					<div className="w-full">
						<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Joined</p>
						<ul className="max-h-96 w-full p-4 bg-gray-50 border border-gray-300 rounded-2xl overflow-y-auto">
						{users.map((user, index) =>
							<li key={index} className="py-0.5"><span className="h-full bg-blue-50 p-0.5 rounded-full text-blue-600 mr-2 text-xs">{index + 1}</span><span>{user.user}</span></li>
						)}
						</ul>
						<p className="ml-4 mt-1 text-sm text-gray-500">{users.length} Participant{(users.length > 1 ? 's' : '')}</p>
					</div>
					{(creator ?
						<div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start items-center">
						{(users.length >= 1 ?
							<Link href="/App/Decide">
								<a className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold">
									Everyone's here!
								</a>
							</Link>
							:
							<button className="px-4 py-2 rounded-2xl bg-gray-600 text-gray-50 font-semibold" disabled aria-disabled>
								Not Enough People!
							</button>
						)}
						<Link href="/App">
							<a className="px-4 py-2 rounded-2xl text-gray-900 font-semibold">
								Back
							</a>
						</Link>
					</div> : 
					<div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start items-center">
						<Link href="/App/Join">
							<a className="px-4 py-2 rounded-2xl bg-red-600 text-white font-semibold">
								Leave
							</a>
						</Link>
					</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Invite;