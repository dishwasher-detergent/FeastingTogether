import React, { Component } from 'react';
import Logo from '../Common/Nav/Logo'
import Elements from '../Footer/Elements'

export default function Footer()
{
	return (
		<>
			<div className="w-full py-8 px-6 flex flex-row flex-wrap items-center justify-between bg-gray-800 lg:rounded-t-2xl">
				<Logo footer={true} />
				<p className="text-white">Helping your decide where to eat since 2020.</p>
			</div>
			<div className="w-full py-1 bg-black">
				<p className="text-center text-white text-xs md:text-sm">FeatingTogether 2021</p>
			</div>
		</>
	)
}