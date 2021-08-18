import React from "react"
import Layout from '../../components/Common/Layout'
import { supabase } from '../../utils/supabaseClient'

const Done: React.FC = () => 
{

	return (
		<Layout nav={true} footer={true}>
			<div className="w-full h-full pt-12">
				<h1 className="mb-6 w-full text-gray-900 text-center text-3xl">Get ready to <b className="text-blue-600 font-magic">Feast</b>!</h1>
				<div className="w-full flex flex-col lg:flex-row justify-center items-center shadow bg-white rounded-2xl overflow-hidden">
					<div className="flex-none w-full lg:w-96 h-96 bg-gray-900 rounded-2xl">

					</div>
					<div className="w-full p-4 flex-1 h-96 overflow-y-auto">
						<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Details</p>
						<ul className="mb-6 w-full p-4 bg-gray-100 rounded-2xl space-y-3 font-bold">
							<li>
								<h2 className="truncate text-xl font-bold text-gray-700">Name of place</h2>
							</li>
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
					</div>
					<div className="w-full p-4 flex-1 h-96 overflow-y-auto">
						<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Information</p>
						<ul className="mb-6 w-full p-4 bg-gray-100 rounded-2xl space-y-3 font-bold">
							<li className="flex flex-col">
								<p className="mb-1 text-xs font-bold text-gray-500">Address</p>
								<p>000 West Terrace, Edmond, OK 73034</p>
							</li>
							<li className="flex flex-col">
								<p className="mb-1 text-xs font-bold text-gray-500">Phone</p>
								<p>(405)444-4444</p>
							</li>
							<li className="flex flex-col">
								<p className="mb-1 text-xs font-bold text-gray-500">Hours</p>
								<p>Closed</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="pt-6">
					<h3 className="w-full text-center text-lg font-bold text-blue-600">Game Details</h3>
					<div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8 bg-gray-50 rounded-2xl p-6">
						<div className="w-full p-4 bg-white rounded-2xl shadow space-y-2">
							<p className="w-full text-center font-bold text-xl text-blue-600">User</p>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Liked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Disliked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
						</div>
						<div className="w-full p-4 bg-white rounded-2xl shadow space-y-2">
							<p className="w-full text-center font-bold text-xl text-blue-600">User</p>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Liked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Disliked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
						</div>
						<div className="w-full p-4 bg-white rounded-2xl shadow space-y-2">
							<p className="w-full text-center font-bold text-xl text-blue-600">User</p>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Liked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
							<div>
								<p className="ml-4 mb-1 text-sm font-bold text-gray-500">Disliked</p>
								<ul className="h-32 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
									<li>place</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Done