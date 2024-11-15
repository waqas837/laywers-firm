"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Mastering React Hooks",
      content:
        "Dive into the world of React Hooks and learn how to build powerful and efficient applications.",
      image: "/api/placeholder/800/400",
      video: null,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Next.js",
      content:
        "Explore the features and capabilities of Next.js, the React framework for building server-rendered applications.",
      image: "/api/placeholder/800/400",
      video: null,
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      content:
        "Discover techniques and best practices to improve the performance of your website and provide a better user experience.",
      image: "/api/placeholder/800/400",
      video: null,
    },
    {
      id: 4,
      title: "Functional Programming in JavaScript",
      content:
        "Learn how to write clean, maintainable, and scalable JavaScript code using functional programming principles.",
      image: "/api/placeholder/800/400",
      video: null,
    },
  ]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      image: image || "/api/placeholder/800/400",
      video,
    };
    setBlogs([...blogs, newBlog]);

    alert("Blog submitted successfully!");
    setTitle("");
    setContent("");
    setImage(null);
    setVideo(null);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setImage(blog.image);
    setVideo(blog.video);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    setTitle("");
    setContent("");
    setImage(null);
    setVideo(null);
  };

  const handleModalSubmit = () => {
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    const updatedBlog = {
      ...selectedBlog,
      title,
      content,
      image: image || "/api/placeholder/800/400",
      video,
    };
    setBlogs(
      blogs.map((blog) => (blog.id === selectedBlog.id ? updatedBlog : blog))
    );

    alert("Blog updated successfully!");
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Blogs</h1>

        {/* Table for Blog List */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-800">Title</th>
              <th className="px-6 py-3 text-left text-gray-800">Content</th>
              <th className="px-6 py-3 text-left text-gray-800">Image</th>
              <th className="px-6 py-3 text-left text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">{blog.title}</td>
                <td className="px-6 py-4 text-gray-700">{blog.content}</td>
                <td className="px-6 py-4">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-24 h-16 object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 flex justify-end space-x-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Edit Form */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
              <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the blog title"
                />
              </div>

              {/* Content */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  placeholder="Write your blog content here..."
                  className="bg-white"
                  style={{ height: "200px", marginBottom: 50 }}
                />
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-4"
                >
                  Cancel
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCreatePage;
