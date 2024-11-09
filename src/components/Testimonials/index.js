import Image from "next/image";

// Sample testimonials
const testimonials = [
  {
    name: "Sarah Williams",
    position: "Client",
    story:
      "After my accident, I was overwhelmed with medical bills and the legal process. Farah & Farah made sure I got the compensation I deserved. They truly fight for you!",
    imageUrl: "/client1.jfif", // Replace with actual image path
  },
  {
    name: "David Thompson",
    position: "Client",
    story:
      "I was in a hit-and-run accident and had no idea how to proceed. Farah & Farah handled everything professionally, and I received a fair settlement.",
    imageUrl: "/client2.jfif", // Replace with actual image path
  },
  {
    name: "Emily Johnson",
    position: "Client",
    story:
      "Thanks to Farah & Farah, I was able to get compensation for my workplace injury. The process was seamless, and I'm so grateful for their dedication.",
    imageUrl: "/client3.jfif", // Replace with actual image path
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="bg-yellow-50 py-12 my-20">
      <h2 className="text-3xl font-bold text-center text-yellow-800 mb-6">
        Success Stories & Testimonials
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Hear from our clients about their successful experiences with our firm.
        We are committed to getting the best possible results for each and every
        case.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 bg-white border border-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-all p-6"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full border-2 border-yellow-500"
              />
              <div className="ml-4">
                <p className="font-semibold text-lg text-yellow-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
