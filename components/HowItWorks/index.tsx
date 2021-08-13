export default function HowItWorks()
{
	return (
		<div className="mb-6 md:px-8 w-full flex flex-col">
			<h2 className="mb-4 font-bold text-center text-xl md:text-2xl text-blue-600">How it works.</h2>
			<div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8 bg-gray-50 rounded-2xl p-6">
				<figure className="border border-gray-300 rounded-2xl overflow-hidden">
					<figcaption className="py-3 px-4 bg-white">
						<p className="font-magic text-3xl font-medium text-gray-900 mb-1">
							First
						</p>
						<p className="text-lg text-gray-500 h-32 md:h-40">
							A single person will start the session based on their location and distribute the unique token to all participants.
						</p>
					</figcaption>
					<div className="relative bg-gray-100 pt-48 overflow-hidden">
					<div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
						
					</div>
					</div>
				</figure>
				<figure className="border border-gray-300 rounded-2xl overflow-hidden">
					<figcaption className="py-3 px-4 bg-white">
						<p className="font-magic text-3xl font-medium text-gray-900 mb-1">
							Second
						</p>
						<p className="text-lg text-gray-500 h-32 md:h-40">
							Once everyone has joined it will randomly give you different restaurants within a previously determind distance.
						</p>
					</figcaption>
					<div className="relative bg-gray-100 pt-48 overflow-hidden">
					<div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
						
					</div>
					</div>
				</figure>
				<figure className="border border-gray-300 rounded-2xl overflow-hidden">
					<figcaption className="py-3 px-4 bg-white">
						<p className="font-magic text-3xl font-medium text-gray-900 mb-1">
							Third
						</p>
						<p className="text-lg text-gray-500 h-32 md:h-40">
							Once one restuarant has all participants likes, the session will end. Now you're ready to eat!
						</p>
					</figcaption>
					<div className="relative bg-gray-100 pt-48 overflow-hidden">
					<div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
						
					</div>
					</div>
				</figure>
			</div>
		</div>
					)
}