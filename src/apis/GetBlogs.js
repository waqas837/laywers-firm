async function getBlogs() {
  // Add your API base URL to .env.local
  const apiUrl = "http://localhost:1337/api/blogs";
  console.log("this api is called....");
  try {
    const response = await fetch(`${apiUrl}`, {
      // Next.js fetch options
      cache: "no-store", // or 'force-cache' for static data
      // next: { revalidate: 60 }, // or use revalidate for ISR
      headers: {
        "Content-Type": "application/json",
        // Add any required headers like API keys
        // 'Authorization': `Bearer ${process.env.API_KEY}`
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

export default getBlogs;
