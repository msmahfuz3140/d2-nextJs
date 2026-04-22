import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    const {
        dish_name,
        image_link,
        category,
        rating,
        price,
        cuisine,
        description,
    } = food;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
            <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 gap-6">

                {/* Image Section */}
                <div className="h-80 md:h-full w-full">
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={300}
                        height={300}
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10 flex flex-col justify-center space-y-4">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {dish_name}
                    </h1>

                    <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            {category}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {cuisine}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    {/* Rating & Price */}
                    <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-yellow-500 font-semibold text-lg">
                            ⭐ {rating} / 5
                        </div>

                        <div className="text-2xl font-bold text-green-600">
                            ${price}
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailPage;