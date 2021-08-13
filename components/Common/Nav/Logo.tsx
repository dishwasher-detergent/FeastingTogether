import React, { Component } from 'react';
import Link from 'next/link'

interface posProps
{
	footer?: boolean;
}

class Logo extends Component<posProps>
{
	render()
	{
		return (
			<Link href="/">
				<a>
					<div className="flex flex-row items-center space-x-4">
						<div className="h-14 w-14 rounded-full bg-blue-600">
						</div>
						<h1 className={"font-magic hidden md:inline text-2xl " + (this.props.footer ? "text-white": "")}>Feasting Tgoether</h1>
					</div>
				</a>
			</Link>
		)
	}
}

export default Logo;