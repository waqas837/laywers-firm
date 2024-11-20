"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";
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
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${strapiUrl}/blogs?populate=*&sort[0]=createdAt:desc`
      );
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle file uploads
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      const reader = new FileReader();
      reader.onload = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Update a blog
  const handleModalSubmit = async () => {
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }
    const token = localStorage.getItem("adminToken");
    try {
      let updateData = {
        data: {
          title,
          content,
          description,
        },
      };

      // Only include file upload logic if new files are selected
      if (image || video) {
        const formData = new FormData();

        // Handle image upload if new image is selected
        if (image) {
          formData.append("files", image);
        }

        // Handle video upload if new video is selected
        if (video) {
          formData.append("files", video);
        }

        // First upload the files if any
        if (formData.has("files")) {
          const uploadResponse = await fetch(`${strapiUrl}/upload`, {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!uploadResponse.ok) {
            throw new Error("Failed to upload files");
          }

          const uploadedFiles = await uploadResponse.json();

          // Add file references to update data
          if (image) {
            updateData.data.image = uploadedFiles.find((file) =>
              file.mime.startsWith("image/")
            ).id;
          }
          if (video) {
            updateData.data.video = uploadedFiles.find((file) =>
              file.mime.startsWith("video/")
            ).id;
          }
        }
      }

      // Update the blog
      const response = await fetch(`${strapiUrl}/blogs/${selectedBlog.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      alert("Blog updated successfully!");
      handleModalClose();
      fetchBlogs();
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog. Please try again.");
    }
  };

  // Delete a blog
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const token = localStorage.getItem("adminToken");
      try {
        const response = await fetch(`${strapiUrl}/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete blog");
        }

        alert("Blog deleted successfully!");
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog. Please try again.");
      }
    }
  };

  // Open the modal for editing
  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.attributes.title);
    setContent(blog.attributes.content);
    setDescription(blog.attributes.description);
    setImage(null);
    setVideo(null);
    setImagePreview(
      blog.attributes.image?.data?.[0]?.attributes?.url
        ? `${strapiUrlMedia}${blog.attributes.image.data[0].attributes.url}`
        : null
    );
    setVideoPreview(
      blog.attributes.video?.data?.[0]?.attributes?.url
        ? `${strapiUrlMedia}${blog.attributes.video.data[0].attributes.url}`
        : null
    );
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
    setImagePreview(null);
    setVideoPreview(null);
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
              <th className="px-6 py-3 text-left text-gray-800">Video</th>
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
                  {blog.attributes.image?.data && (
                    <img
                      src={`${strapiUrlMedia}${blog.attributes.image.data[0].attributes.url}`}
                      alt={blog.attributes.title}
                      className="w-24 h-16 object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4">
                  {blog.attributes.video?.data && (
                    <video
                      src={`${strapiUrlMedia}${blog.attributes.video.data[0].attributes.url}`}
                      className="w-24 h-16 object-cover"
                      controls
                    />
                  )}
                </td>
                <td className="px-6 py-4 flex justify-center items-center space-x-4">
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

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-2"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-24 object-cover rounded"
                  />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Video
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="mb-2"
                />
                {videoPreview && (
                  <video
                    src={videoPreview}
                    className="w-32 h-24 object-cover rounded"
                    controls
                  />
                )}
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
