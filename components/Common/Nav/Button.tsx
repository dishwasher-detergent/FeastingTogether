import React, { Component } from 'react';
import Link from 'next/link'

interface linkProps
{
	to?: string;
	content?: string;
}

class Button extends Component<linkProps>
{
	render()
	{
		return (
			<Link href={(!this.props.to ? '/' : this.props.to)}>
				<a className="block py-2 px-4 rounded-2xl font-semibold hover:bg-blue-50 hover:text-blue-600">
					{(!this.props.content ? 'Empty' : this.props.content)}
				</a>
			</Link>
		)
	}
}

export default Button;