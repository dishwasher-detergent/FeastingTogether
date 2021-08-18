import Link from 'next/link'

export default function Hero()
{
	return (
		<div className="py-6 md:py-24 lg:py-36 px-4 md:px-8 lg:px-32 w-full flex flex-col">
			<div className="w-full mb-20 md:mb-20 lg:mb-24">
				<header>
					<h1 className="font-magic mb-12 text-6xl md:text-9xl font-bold">
						Feasting Together
					</h1>
				</header>
				<p className="text-xl md:text-2xl max-w-md">
					Helping you find the restaurant <b className="text-blue-600">everyone</b> will enjoy.
				</p>
			</div>
			<div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-start items-center">
				<Link href="/App/Join">
					<a className="px-4 py-2 rounded-2xl text-gray-900 font-semibold">
						Join A Friend
					</a>
				</Link>
				<Link href="/App">
					<a className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold">
						Create Your Own
					</a>
				</Link>
			</div>
		</div>
	)
}