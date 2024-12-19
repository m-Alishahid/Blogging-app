


import React from "react";


export default function Feature() {



    return (


        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6">
            {/* Hero Content */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Codecraft Blog</h1>
                <p className="text-lg font-medium mb-8">
                    Hi, I'm <span className="font-bold underline">Ali Shahid</span>, also known as
                    <span className="font-bold underline"> codecraftali</span>. Dive into a world of insightful
                    articles, tutorials, and guides crafted for tech enthusiasts and professionals alike.
                </p>
                <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100">
                  <a href="#"> Explore Articles </a>
                </button>
            </div>

            {/* Categories Section */}
            <div className="mt-12 bg-white text-gray-800 py-8 px-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Popular Categories</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "Web Development",
                        "JavaScript",
                        "React",
                        "Next.js",
                        "CSS & Design",
                        "Tech Insights",
                    ].map((category) => (
                        <span
                            key={category}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-400"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}