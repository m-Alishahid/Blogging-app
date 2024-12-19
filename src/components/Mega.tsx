import React from 'react'
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
    const post = [
        {
            id: "1",
            title: "Revolutionizing Web Development with Next.js",
            description: " Learn how Next.js simplifies server-side rendering, improves app performance, and enhances the developer experience for modern web applications.",
            date: "2024-11-21",
            imageUrl: "/mega.jpg",
        },

        {
            id: "2",
            title: "Exploring the Power of Generative AI in 2024",
            description: "A comprehensive look at how generative AI tools like ChatGPT are transforming industries, from content creation to code generation.",
            date: "2024-11-2",
            imageUrl: "/AI.png",
        },

        {
            id: "3",
            title: "Tailwind CSS: Redefining Responsive Design",
            description: "Discover why Tailwind CSS is the go-to framework for creating efficient, responsive, and visually stunning designs.",
            date: "2024-11-12",
            imageUrl: "/responsive.jpg",
        },

        {
            id: "4",
            title: "The Rise of TypeScript: Why Developers Are Making the Switch",
            description: " Explore how TypeScript improves code reliability, scalability, and team collaboration in JavaScript projects.",
            date: "2024-11-5",
            imageUrl: "/typescript.jpg",
        },

        {
            id: "5",
            title: "Sanity.io and Next.js: The Perfect Pair for Content Management",
            description: "Learn how to build dynamic, scalable websites using Sanity as a headless CMS and Next.js for front-end development.",
            date: "2024-11-24",
            imageUrl: "/sanity.png",
        },

        {
            id: "6",
            title: "Top Trends in Cloud Computing for 2025",
            description: "An in-depth analysis of emerging technologies in cloud computing, including serverless architecture, edge computing, and multi-cloud strategies.",
            date: "2024-11-18",
            imageUrl: "/cloud.jpg",
        },



    ]





    return (
        <div className='my-8'>
            <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the World of AI and Technology </h1>

           
           <div className='grid grid-col-1 sm:-grid-col-2 lg:grid-cols-3 gap-8'>
            {post.map((post,index)=>(
                <div className='fade-in' key={post.id}>
                    <div className='blog-card'>
                        <BlogCard post={post} isDarkBackground={index % 2 === 0} />

                    </div>
                </div>
            ))} 
            

           </div>


        </div>
    )
}













