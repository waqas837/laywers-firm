"use client";
import { useState } from "react";
import axios from "axios";
import { strapiUrl } from "@/apis/apiUrl";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // POST the email to the Strapi API
      await axios.post(`${strapiUrl}/email-lists`, {
        data: { email },
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("There was an issue with the subscription. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Subscribe to receive the latest updates, news, and promotions
            directly to your inbox.
          </p>
        </div>

        <div className="flex justify-center">
          {isSubscribed ? (
            <div className="text-center bg-yellow-100 text-yellow-800 p-6 rounded-lg">
              <p className="text-lg font-semibold">
                Thank you for subscribing!
              </p>
              <p>You will start receiving our updates soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="p-3 w-full md:w-80 text-gray-800 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 md:mt-0 md:ml-4 p-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Subscribe Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
