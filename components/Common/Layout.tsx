import React, { Children } from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

interface inputProps
{
	nav: boolean;
	footer: boolean;
}

const Layout: React.FC<inputProps> = ({ children, nav , footer }) => 
{
	return (
		<>
		{(footer && nav ? 
			<div className="flex flex-col max-w-7xl mx-auto min-h-screen relative bg-gray-50">
				<div className="flex-1">
					<Nav />
					<div className="px-4">
						{children}
					</div>
				</div>
				<Footer /> 
			</div>
		: 
			<div className="h-screen">
				{children}
			</div>
		)}
		</>
	)
}

export default Layout;