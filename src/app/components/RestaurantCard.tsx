import Link from "next/link";

export default function RestaurantCard({resturant}:any) {
	return (
		<div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
			<Link href="/restaurant/mcg">
				<img
					src={resturant.image}
					alt=""
					className="w-full h-36"
				/>
				<div className="p-1">
					<h3 className="font-bold text-2xl mb-2 text-black">
						{resturant.name}
					</h3>
					<div className="flex items-start text-gray-700">
						<div className="flex mb-2">*****</div>
						<p className="ml-2">77 reviews</p>
					</div>
					<div className="flex text-reg font-light capitalize text-gray-500">
						<p className=" mr-3">Mexican</p>
						<p className="mr-3">$$$$</p>
						<p>Toronto</p>
					</div>
					<p className="text-sm mt-1 font-bold text-gray-500">
						Booked 3 times today
					</p>
				</div>
			</Link>
		</div>
	);
}
