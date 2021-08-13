import React, { Component } from 'react';
import Logo from '../Common/Nav/Logo'
import Elements from '../Footer/Elements'

export default function Footer()
{
	return (
		<>
			<div className="w-full py-8 px-6 flex flex-row items-center justify-between bg-gray-800 rounded-t-lg">
				<Logo footer="true" />
				<Elements />
			</div>
			<div className="w-full py-1 bg-black">
				<p className="text-center text-white text-xs md:text-sm">Testing Test</p>
			</div>
		</>
	)
}