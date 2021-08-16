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
		<div className="flex-1">
			{(nav ? <Nav /> : null)}
			<div className="px-4">
				{children}
			</div>
		</div>
		{(footer ? <Footer /> : null)}
		</>
	)
}

export default Layout;