
import React from "react";
import CommentSection from "@/components/CommentsSection";
import AutherCard from "@/components/AutherCard";

const posts = [
  {
    id: "1",
    title: "Revolutionizing Web Development with Next.js",
    description:
      "Next.js simplifies server-side rendering (SSR) by rendering pages on the server before sending them to the client. \nThis results in faster initial page loads, improved SEO, and better performance overall.",
    imageUrl: "/mega.jpg",
  },
  {
    id: "2",
    title: "Exploring the Power of Generative AI in 2024",
    description:
      "Generative AI tools like ChatGPT are revolutionizing various industries. \nFrom creating content to developing AI-driven applications, the possibilities are endless.",
    imageUrl: "/AI.png",
  },
  {
    id: "3",
    title: "Tailwind CSS: Redefining Responsive Design",
    description:
      "Tailwind CSS has become the go-to framework for creating efficient, responsive, and visually stunning designs due to its utility-first approach...",
    imageUrl: "/responsive.jpg",
  },
  {
    id: "4",
    title: "The Rise of TypeScript: Why Developers Are Making the Switch",
    description:
      "TypeScript enhances code reliability, scalability, and team collaboration in JavaScript projects...",
    imageUrl: "/typescript.jpg",
  },
  {
    id: "5",
    title: "Sanity.io and Next.js: The Perfect Pair for Content Management",
    description:
      "Learn how to build dynamic, scalable websites by combining Sanity, a headless CMS, with Next.js for front-end development...",
    imageUrl: "/sanity.png",
  },
  {
    id: "6",
    title: "Top Trends in Cloud Computing for 2025",
    description:
      "An in-depth analysis of emerging technologies in cloud computing covers key developments such as serverless architecture, edge computing...",
    imageUrl: "/cloud.jpg",
  },
];

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Fetch the post data based on the ID
async function fetchPost(id: string): Promise<Post | null> {
  const post = posts.find((p) => p.id === id) || null;
  return post;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  if (!post) {
    return (
      <h2 className="text-2xl font-semibold text-center mt-10">
        Post Not Found
      </h2>
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
