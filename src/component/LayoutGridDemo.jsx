"use client";
import { LayoutGrid } from "@/clientComponent/LayoutGrid";
import Link from "next/link";
import React from "react";
export function LayoutGridDemo() {
    return (
        <div className="h-full w-[90%] my-10 mx-auto">
            <h1 className="text-left  font-bold mb-4 text-[#222222] ">
            Our Best Work
            </h1>
            <LayoutGrid cards={cards} />
            {/* <div className="text-center mt-10">
                <Link
                    href="/gallery"
                    className="inline-block tracking-wider pt-serif bg-[#A38887] text-white px-6 py-3 rounded-md hover:bg-[#4a2c2c] transition"
                >
                    Show More
                </Link>
            </div> */}
        </div>
    );
}

// const SkeletonOne = () => {
//     return (
//         <div>
//             <p className="font-bold md:text-4xl text-xl text-white">
//                 House in the woods
//             </p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A serene and tranquil retreat, this house in the woods offers a peaceful
//                 escape from the hustle and bustle of city life.
//             </p>
//         </div>
//     );
// };

// const SkeletonTwo = () => {
//     return (
//         <div>
//             <p className="font-bold md:text-4xl text-xl text-white">
//                 House above the clouds
//             </p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 Perched high above the world, this house offers breathtaking views and a
//                 unique living experience. It&apos;s a place where the sky meets home,
//                 and tranquility is a way of life.
//             </p>
//         </div>
//     );
// };
// const SkeletonThree = () => {
//     return (
//         <div>
//             <p className="font-bold md:text-4xl text-xl text-white">
//                 Greens all over
//             </p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//                 perfect place to relax, unwind, and enjoy life.
//             </p>
//         </div>
//     );
// };
// const SkeletonFour = () => {
//     return (
//         <div>
//             <p className="font-bold md:text-4xl text-xl text-white">
//                 Rivers are serene
//             </p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A house by the river is a place of peace and tranquility. It&apos;s the
//                 perfect place to relax, unwind, and enjoy life.
//             </p>
//         </div>
//     );
// };

const cards = [
    {
        id: 1,
        // content: <SkeletonOne />,
        className: "col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/30184620/pexels-photo-30184620/free-photo-of-joyful-indian-wedding-couple-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        // content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/14077142/pexels-photo-14077142.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        // content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/30155173/pexels-photo-30155173/free-photo-of-elegant-indian-bride-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        // content: <SkeletonFour />,
        className: "col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/30155180/pexels-photo-30155180/free-photo-of-romantic-indian-couple-embracing-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
        id: 5,
        // content: <SkeletonOne />,
        className: "col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/1295946/pexels-photo-1295946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 6,
        // content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/30155169/pexels-photo-30155169/free-photo-of-elegant-indian-couple-at-engagement-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 7,
        // content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/30155170/pexels-photo-30155170/free-photo-of-beautiful-indian-couple-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 8,
        // content: <SkeletonFour />,
        className: "col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/13156811/pexels-photo-13156811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];
