import React, { Component } from 'react';
import Logo from '../Common/Nav/Logo'
import Elements from '../Nav/Elements'

export default function Nav()
{
	return (
		<div className="w-full h-20 px-6 flex flex-row items-center justify-between">
			<Logo />
			<Elements />
		</div>
	)
}