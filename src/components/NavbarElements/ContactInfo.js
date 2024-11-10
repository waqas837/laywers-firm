import { Phone } from "lucide-react"; // Import Lucide's Phone icon

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
      <div className="flex items-center space-x-3">
        {/* Phone Icon */}
        <Phone className="h-6 w-6 text-yellow-700" />
        {/* Text and Phone Number */}
        <div>
          <span className="font-medium text-gray-700">Reach us at:</span>
          <p className="text-3xl font-bold text-yellow-700 mt-2">
            <a
              href="tel:+123232123"
              className="text-yellow-700 hover:text-yellow-500 hover:underline transition-all duration-300"
            >
              <span className="text-center">239-799-0305</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
