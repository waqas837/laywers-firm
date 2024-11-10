import { FileText, MousePointer, Shield } from "lucide-react";

function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-8">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          It's easy to get started. The Fee Is Free™. Only pay if we win.
          Results may vary depending on your particular facts and legal
          circumstances.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <FileText className="text-4xl text-yellow-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Step 1: Submit Your Claim
            </h3>
            <p className="text-gray-700">
              With a free case evaluation, submitting your case is easy with
              Morgan & Morgan.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <MousePointer className="text-4xl text-yellow-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Step 2: We Take Action
            </h3>
            <p className="text-gray-700">
              Our dedicated team gets to work investigating your claim.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Shield className="text-4xl text-yellow-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Step 3: We Fight For You
            </h3>
            <p className="text-gray-700">
              If we take on the case, our team fights to get you the results you
              deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
