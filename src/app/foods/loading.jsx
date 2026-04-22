import React from "react";

const Loading = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 animate-pulse">

                {/* Image Skeleton */}
                <div className="h-80 md:h-full bg-gray-300"></div>

                {/* Content Skeleton */}
                <div className="p-6 md:p-10 space-y-4">

                    {/* Title */}
                    <div className="h-8 bg-gray-300 rounded w-3/4"></div>

                    {/* Tags */}
                    <div className="flex gap-2">
                        <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
                        <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mt-4">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>

                    {/* Rating & Price */}
                    <div className="flex justify-between pt-4 border-t">
                        <div className="h-6 w-20 bg-gray-300 rounded"></div>
                        <div className="h-6 w-16 bg-gray-300 rounded"></div>
                    </div>

                    {/* Button */}
                    <div className="h-12 bg-gray-300 rounded-xl mt-4"></div>

                </div>
            </div>
        </div>
    );
};

export default Loading;