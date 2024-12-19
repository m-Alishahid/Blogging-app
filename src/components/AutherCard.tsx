import React from 'react'

export default function AutherCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadIn'>
        <img
          className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
          src="/dev-ali.jpg"
          alt="auther" />

        <div>
          <h3 className='text-xl font-bold'>Ali Shahid</h3>
          <p className='text-slate-500'>
            {""}
            Web Developer | NextJs specialist | UI/UX designer{""}

          </p>
        </div>
      </div>



     <p className='mt-4 text-black leading-relaxed'>Muhammad Ali Shahid is an experienced Web developer with a passion for web development
       and sharing knowledge through articles.Currrently learning Agentic 
       and Robotic AI engineering a big tech revolution throughout GIAIC
        Governor Sindh Initiative of AI Web3 and metaverse</p>
    
    <div className='mt-4 flex space-x-3'>
      <a href="www.instagram.com/codecraftali" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
       Instagram
      </a>


      <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
       Github
      </a>


      <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
       Facebook
      </a>

    </div>
    </div>
  )
}
