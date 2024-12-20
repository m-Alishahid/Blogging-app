import React from 'react';
import CommentSection from '@/components/CommentsSection';
import AutherCard from '@/components/AutherCard';

const posts = [
  {
    id: "1",
    title: "Revolutionizing Web Development with Next.js",
    description:
      "Next.js simplifies server-side rendering (SSR) by rendering pages on the server before sending them to the client, improving SEO and reducing page load time. It enhances app performance through automatic code splitting, optimized static assets, image optimization, and static site generation (SSG), ensuring faster load times and a better user experience. The framework also improves the developer experience with features like file-based routing, hot module replacement (HMR), built-in TypeScript support, and API routes, making development faster and more efficient. Additionally, Next.js supports incremental static regeneration (ISR) for real-time content updates and offers internationalization (i18n) support, all while being easily deployable on platforms like Vercel.",
    imageUrl: "/mega.jpg",
  },
  {
    id: "2",
    title: "Exploring the Power of Generative AI in 2024",
    description:
      "Generative AI tools like ChatGPT are revolutionizing various industries by automating tasks, enhancing productivity, and enabling new creative possibilities. In content creation, these tools help generate articles, blogs, marketing copy, and social media posts, saving time and effort for writers. In the entertainment industry, they assist in scriptwriting, music composition, and even video game design by producing creative content based on user input For software development, generative AI is transforming code generation by providing developers with automated code suggestions, debugging assistance, and even full code generation, speeding up the development process. In design, AI tools can create images, logos, and even 3D models, enabling designers to experiment with various concepts quickly. These advancements are not limited to creative fields; AI is also enhancing data analysis, customer service, and medical research, where it generates insights, automates repetitive tasks, and supports decision-making Overall, generative AI is reshaping industries by reducing manual effort, accelerating processes, and empowering professionals to focus on more strategic, high-level tasks.",
    imageUrl: "/AI.png",
  },


  {
    id: "3",
    title: "Tailwind CSS: Redefining Responsive Design",
    description: "Tailwind CSS has become the go-to framework for creating efficient, responsive, and visually stunning designs due to its utility-first approach, which allows developers to build custom designs quickly without writing custom CSS. With a comprehensive set of pre-built utility classes for layout, spacing, typography, colors, and more, Tailwind CSS enables developers to easily implement responsive and adaptive designs by simply adding classes to HTML elements Its flexibility allows for easy customization, making it ideal for a wide range of projects, from simple websites to complex applications. The framework promotes a clean and maintainable codebase by eliminating the need for excessive CSS rules and providing consistent styling across the application. Additionally, Tailwind's active community, comprehensive documentation, and tools like PurgeCSS for removing unused styles further enhance its appeal. Whether you're building a minimalist design or a feature-rich application, Tailwind CSS ensures fast development, responsive layouts, and aesthetically pleasing results.",

    imageUrl: "/responsive.jpg",
  },

  {
    id: "4", title: "The Rise of TypeScript: Why Developers Are Making the Switch",
    description: "TypeScript enhances code reliability, scalability, and team collaboration in JavaScript projects by adding static typing to the language. With TypeScript, developers can catch errors at compile time rather than runtime, leading to fewer bugs and more predictable code. The type system helps prevent issues such as mismatched data types or incorrect function calls, improving overall code quality and reducing debugging time In large-scale applications, TypeScript's static typing provides better scalability by making the codebase easier to understand and maintain. It enforces a clear structure, which is crucial when the project grows and involves multiple developers. Additionally, TypeScript's strong typing and autocompletion features improve team collaboration by making the code more readable and easier to navigate. It helps developers understand how different parts of the system interact, promoting better communication and reducing errors when working in teams. Overall, TypeScript helps ensure that JavaScript projects are more robust, maintainable, and easier to scale over time.",
    imageUrl: "/typescript.jpg",
  },


  {
    id: "5", title: "Sanity.io and Next.js: The Perfect Pair for Content Management",
    description: "Learn how to build dynamic, scalable websites by combining Sanity, a headless CMS, with Next.js for front-end development. Sanity provides a flexible, API-driven content management system that allows you to easily create and manage content, while Next.js enables fast, server-rendered React applications By integrating Sanity with Next.js, you can create a dynamic website where content is stored in Sanity and fetched via APIs in your Next.js app. This setup allows for real-time content updates, content-rich pages, and scalable performance. Sanity's customizable content models make it easy to structure your data, while Next.js optimizes the site’s performance with features like static site generation (SSG) and server-side rendering (SSR) This combination ensures your website is highly dynamic, with a smooth developer experience and flexibility to scale as the project grows. It provides a seamless content management system and a high-performance front-end, perfect for modern web development.",
    imageUrl: "/sanity.png",
  },


  {
    id: "6", title: "Top Trends in Cloud Computing for 2025",
    description: "An in-depth analysis of emerging technologies in cloud computing covers key developments such as serverless architecture, edge computing, and multi-cloud strategies Serverless Architecture: This approach eliminates the need for developers to manage servers, enabling them to focus solely on code development. Serverless computing allows applications to scale automatically based on demand, reducing operational overhead and costs. It’s ideal for applications with unpredictable workloads and real-time requirements, such as IoT, mobile apps, and microservices Edge Computing: Edge computing involves processing data closer to the end user, rather than in centralized cloud data centers. This technology is critical for applications requiring low-latency responses, such as real-time gaming, autonomous vehicles, and IoT devices. It minimizes latency, improves response times, and reduces data transfer costs by processing data directly at the “edge” of the network, closer to the source Multi-Cloud Strategies: As businesses seek more flexibility and redundancy, multi-cloud strategies have become popular. This approach involves using multiple cloud service providers, allowing companies to avoid vendor lock-in, reduce downtime, and optimize costs. It provides better fault tolerance, enables cross-region data processing, and offers redundancy in case of outages or disruptions from individual cloud providers These emerging technologies in cloud computing are reshaping industries, offering faster, more efficient, and scalable solutions for businesses looking to take advantage of modern digital infrastructure.",

    imageUrl: "/cloud.jpg",
  },

];

export default async function Posts({ params }: { params: { id: string } }) {
  const resolvedParams = await params; // Await the params promise
  const { id } = resolvedParams;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-semibold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AutherCard />
    </div>
  );
}


