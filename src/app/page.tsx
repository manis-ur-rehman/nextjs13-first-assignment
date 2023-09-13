import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const fetchResturantData = async()=>{
	return await prisma.restaurant.findMany(
		{select: {
			id: true,
			name: true,
			image: true,
			slug: true,
			pricing: true,
			location: true,
			cuisine: true,
		}}
	);
}

export default async function Home() {
const resturants = await fetchResturantData();
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<main>
					<Header />
					<div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
						{
							resturants.map((resturant)=><RestaurantCard resturant={resturant} />)
						}
					</div>
				</main>
			</main>
		</main>
	);
}
