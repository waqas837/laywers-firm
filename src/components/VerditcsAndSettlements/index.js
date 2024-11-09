import React from "react";
import Link from "next/link";

const VerdictsSettlements = () => {
  return (
    <div className="flex flex-col items-center text-center my-20 p-2">
      <h2 className="text-3xl font-semibold mb-2">Verdicts & Settlements</h2>
      <p className="text-sm text-gray-500 mb-4">
        Our results speak for themselves
      </p>
      <p className="text-base text-gray-700 mb-6">
        Results may vary depending on your particular facts and legal
        circumstances. We don't just want to do well—we want our clients to get
        what they're entitled to and the defendants to face real accountability.
      </p>
      <>
        <Link
          href="#"
          className="inline-block px-6 py-3 bg-yellow-600 text-white hover:bg-yellow-700 transition"
        >
          View all
        </Link>
      </>
    </div>
  );
};

export default VerdictsSettlements;
