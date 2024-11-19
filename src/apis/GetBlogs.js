import { strapiUrl } from "./apiUrl";

async function getBlogs(slug) {
  slug = slug[0];
  // strapi url.
  const apiUrl = `${strapiUrl}/blogs?filters[slug][$containsi]=${slug}&populate=*`;
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
