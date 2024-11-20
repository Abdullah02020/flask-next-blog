"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [suptitle, setSuptitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, suptitle, content }),
    });
    router.push("/");
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-6 shadow-md rounded-lg mt-10">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">Add New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="suptitle"
            className="block text-gray-700 font-medium mb-2"
          >
            Subtitle
          </label>
          <input
            id="suptitle"
            value={suptitle}
            onChange={(e) => setSuptitle(e.target.value)}
            placeholder="Enter the subtitle"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the content"
            rows="6"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
