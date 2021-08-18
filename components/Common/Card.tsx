import React from "react"
import Steps from '../Common/Form/Steps'

interface cardProps
{
	position?: number;
	steps?: string[];
}

const Card: React.FC<cardProps> = ({ children,position,steps }) => 
{
	return (
		<div className="flex-1  h-full w-full flex items-center justify-center flex-col px-4 md:px-0">
			{(position != null && steps ? <Steps  position={position} steps={steps}/> : null)}
			<div className="flex flex-col justify-center items-center w-full max-w-lg overflow-hidden rounded-2xl shadow">
				{children}
			</div>
		</div>
	)
}

export default Card;