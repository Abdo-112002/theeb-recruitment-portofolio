import Image from 'next/image'
import React from 'react'

const countries = [
    {
        name: "اثيوبيا",
        price: "3995",
        flagUrl: "/Athiobia.png", // ضع لينك صورة العلم هنا
    },
    {
        name: "اوغندا",
        price: "4800",
        flagUrl: "/Oganda.png",
    },
    {
        name: "كينيا",
        price: "5395",
        flagUrl: "/Kenia.png",
    },
    {
        name: "بنجلاديش",
        price: "7595",
        flagUrl: "/Bangladish.png",
    },
    {
        name: "سائق خاص الهند",
        price: "3000",
        flagUrl: "/india.png",
    },
    {
        name: "الفلبين",
        price: "13595",
        flagUrl: "/Philipenj.jpg",
    },
];

const ServicesCounteries = () => {
    return (

        <section className="w-full py-10" >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {countries?.reverse()?.map((country, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col"
                        >
                            {/* علم الدولة */}
                            <div className="w-full h-32 cursor-pointer relative hover:scale-105 transition-transform">
                                <Image
                                    src={country.flagUrl}
                                    alt={country.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* محتوى الكارد */}
                            <div className="flex-1 flex flex-col items-start justify-center p-4">
                                <h2 className="text-xl font-bold text-gray-800 text-right">
                                    {country.name}
                                </h2>
                                <p className="text-gray-700 text-base font-semibold">
                                    {country.price} <span className="font-normal">﷼</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ServicesCounteries
