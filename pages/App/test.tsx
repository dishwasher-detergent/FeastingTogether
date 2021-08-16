import React from "react"
import { supabase } from '../../utils/supabaseClient'

const Testing: React.FC = () => 
{

	const intersection = (...arrays: string[][]) => {
		return arrays.reduce((resultArray, currentArray) => {
			return resultArray.filter(el => currentArray.includes(el))
		}) 
	}

	const createSession = async () => {
		try {
			const { data, error } = await supabase
  				.rpc('create_session', {
					creator: 'Kenny'
				})
			if (error) throw error
			console.log(data)
		} catch (error) {
			console.log(error)
			return ('Error')
		}
	}


	const test = () => {
		createSession()
		return (
			intersection(['test','test0','test1'], ['test','test1','test00'], ['test','test1','test97'])
		)
	}

	return (
		<div>
			{test()}
		</div>
	)
}

export default Testing