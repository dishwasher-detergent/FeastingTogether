import React, { useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Layout from '../../components/Common/Layout';
import useSession from '../../global-store/useSession';
import { supabase } from '../../utils/supabaseClient';
import { useRouter  } from 'next/router';

const Decide: React.FC = () => {
	const { set, session_id, user_id } = useSession.getState();

	const router = useRouter()

	useEffect(() => {
		fetchLiked
		return function cleanup() {
			supabase.removeSubscription(liked)
		};
	},[]);

	const fetchLiked = async () => {
		try {
			const { data: participants, error } = await supabase
			.from('participants')
			.select('liked')
			.eq('session_id', session_id)
			if (error) throw error
			console.log('test')
			detectMatch(participants)
		} catch (error) {
			console.log(error)
		}
	}

	const liked = supabase
	.from(`participants:session_id=eq.${session_id}`)
	.on('*', fetchLiked)
	.subscribe()

	const detectMatch = (value: any) => {
		console.log('test')
		let array:string[] = []
		value.forEach((e: any)=>{
			if(e.liked != null){
				array.push(e.liked)
			}
		})

		if(array.length > 1){
			let match = intersection(array);
			if(match.length > 0){
				setFinished()
			}
		}
	}

	const intersection = (arrays: any) => {
		var result = arrays.shift().reduce(function(res: any, v: any) {
			if (res.indexOf(v) === -1 && arrays.every(function(a:any) {
				return a.indexOf(v) !== -1;
			})) res.push(v);
			return res;
		}, []);
		return result;
	}

	const setFinished = async () => {
		try {
			const { data, error } = await supabase
			.from('session')
			.update({ finished: true })
			.match({ id: session_id })
			if (error) throw error
			router.push('test')
		} catch (error) {
			console.log(error)
		}

	}

	const handleDislike = () => {
		dislike('test')
	}

	const handleLike = () => {
		like('test')
	}

	const dislike = async (value: string) => {
		try {
		let { data, error } = await supabase
		.rpc('dislike', {
			new_disliked: value, 
			user_id: user_id
		})
		if(error) throw error;
		} catch(error) {
			console.log(error)
		}
	}

	const like = async (value: string) => {
		try {
		let { data, error } = await supabase
		.rpc('like', {
			new_liked: value, 
			user_id: user_id
		})
		if(error) throw error;
		} catch(error) {
			console.log(error)
		}
	}

	return (
		<Layout nav={false} footer={false}>
			<Head>
				<title>Start Swiping!</title>
			</Head>
			<div className="h-screen w-full flex flex-col items-center justify-center py-12">
				<div className="relative flex-none w-full max-w-lg h-80 bg-yellow-500 rounded-t-2xl shadow">
					<div className="absolute bottom-0 w-full flex items-center justify-center">
						<p className="mb-8 bg-gray-900/25 text-white/75 font-bold text-sm px-4 py-1 rounded-2xl">Invite Code: {session_id}</p>
					</div>
				</div>
				<div className="relative flex-1 flex flex-col -m-6 p-4 w-full max-w-lg space-y-6 bg-white rounded-2xl shadow">
					<div className="flex-1">
						<h2 className="mb-6 font-bold text-2xl truncate">Restauranasdfasdfasdfasdfaasdfasdfsdft</h2>
						<ul className="mb-6 w-full p-4 bg-gray-100 rounded-2xl space-y-3 font-bold">
							<li className="flex flex-row text-yellow-600">
							<p className="sr-only">Rating 4 out of 5</p>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
							</svg>
							</li>
							<li>
								<p className="sr-only">Price 3 out of 4</p>
								<span className="flex flex-row space-x-4">
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</span>
									<span>
										$$$
									</span>
								</span>
							</li>
							<li>
								<p className="sr-only">Distance From You</p>
								<span className="flex flex-row space-x-4">
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
										</svg>
									</span>
									<span>
										.5 Miles Away
									</span>
								</span>
							</li>
							<li className="flex flex-row space-x-4">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
									</svg>
								</span>
								<a href="">
									www.example.com
								</a>
							</li>
						</ul>
						<h3 className="ml-4 mb-1 text-sm font-bold text-gray-500">Description</h3>
						<p className="h-24 overflow-y-auto">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="flex-none w-full flex flex-row h-24">
						<button onClick={handleDislike} className="bg-red-50 text-red-600 flex-1 flex items-center justify-center rounded-l-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
							</svg>
						</button>
						<button onClick={handleLike} className="bg-green-50 text-green-600 flex-1 flex items-center justify-center rounded-r-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Decide;