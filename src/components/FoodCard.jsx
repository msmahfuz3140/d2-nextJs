import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

const FoodCard = ({ food }) => {
    const {
        id,
        dish_name,
        image_link,
        category,
        rating,
        price,
        cuisine,
        description,
    } = food;

    return (
        <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">

            {/* IMAGE */}
            <div className="relative w-full h-[220px]">
                <Image
                    src={image_link}
                    alt={dish_name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover"
                />

                {/* category */}
                <span className="absolute top-3 left-3 badge badge-primary">
                    {category}
                </span>

                {/* favourite */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
                    <Heart size={18} />
                </button>
            </div>

            {/* BODY */}
            <div className="p-5 flex flex-col flex-grow">

                {/* title */}
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold leading-tight">
                        {dish_name}
                    </h2>

                    <span className="badge badge-warning">
                        ⭐ {rating}
                    </span>
                </div>

                {/* description */}
                <p className="text-sm text-gray-500 mt-2 flex-grow">
                    {description?.slice(0, 80)}...
                </p>

                {/* cuisine */}
                <div className="mt-3">
                    <span className="badge badge-outline">{cuisine}</span>
                </div>

                {/* bottom */}
                <div className="flex justify-between items-center mt-5">
                    <p className="text-xl font-bold text-primary">
                        ${price}
                    </p>

                    <Link href={`/foods/${id}`}>
                        <button className="btn btn-primary btn-sm rounded-full px-5">
                            Order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;