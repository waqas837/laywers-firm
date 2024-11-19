"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { strapiUrl } from "@/apis/apiUrl";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogCreatePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${strapiUrl}/blogs`);
      const data = await response.json();
      console.log("data", data);
      setBlogs(data.data); // Assuming `data.data` contains the blogs array
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete a blog
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      alert("Blog deleted successfully!");
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Update a blog
  const handleModalSubmit = async () => {
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("description", description);
      if (image) formData.append("image", image);
      if (video) formData.append("video", video);

      const response = await fetch(`${apiUrl}/blogs/${selectedBlog.id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      alert("Blog updated successfully!");
      handleModalClose();
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Open the modal for editing
  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setDescription(blog.description);
    setImage(null);
    setVideo(null);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    setTitle("");
    setContent("");
    setDescription("");
    setImage(null);
    setVideo(null);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex-grow min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Blogs</h1>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-800">Title</th>
              <th className="px-6 py-3 text-left text-gray-800">Description</th>
              <th className="px-6 py-3 text-left text-gray-800">Image</th>
              <th className="px-6 py-3 text-left text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">
                  {blog.attributes.title}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {blog.attributes.description}
                </td>
                <td className="px-6 py-4">
                  {blog.attributes.image && (
                    <img
                      src={blog.attributes.image}
                      alt={blog.attributes.title}
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

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter the blog description"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  placeholder="Write your blog content here..."
                />
              </div>

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
