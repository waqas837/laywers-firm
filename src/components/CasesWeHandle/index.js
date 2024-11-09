function LegalCaseTypes() {
  const caseTypes = [
    {
      name: "Car Accidents",
      description:
        "Handling all types of motor vehicle accidents, including collisions and damages.",
    },
    {
      name: "Truck Accidents",
      description:
        "Legal assistance for victims of commercial truck accidents, including big rigs and semi-trucks.",
    },
    {
      name: "Motorcycle Accidents",
      description:
        "Representing individuals injured in motorcycle accidents, ensuring fair compensation.",
    },
    {
      name: "Pedestrian Accidents",
      description:
        "Helping pedestrians who have been injured in accidents with vehicles.",
    },
    {
      name: "Slip and Fall",
      description:
        "Cases where individuals have fallen due to hazardous conditions on someone else’s property.",
    },
    {
      name: "Medical Malpractice",
      description:
        "Handling cases where medical professionals have caused injury or harm due to negligence.",
    },
    {
      name: "Wrongful Death",
      description:
        "Supporting families who have lost loved ones due to the negligence or wrongful actions of others.",
    },
    {
      name: "Product Liability",
      description:
        "Representing individuals harmed by defective or unsafe products.",
    },
    {
      name: "Workplace Injuries",
      description:
        "Assisting workers who have been injured on the job and need workers' compensation.",
    },
    {
      name: "Workers' Compensation",
      description:
        "Helping employees file workers’ compensation claims for work-related injuries or illnesses.",
    },
    {
      name: "Estate Planning",
      description:
        "Providing legal services related to creating wills, trusts, and other estate planning documents.",
    },
    {
      name: "Probate",
      description:
        "Managing the legal process of administering the estate of a deceased person.",
    },
    {
      name: "Divorce and Family Law",
      description:
        "Handling cases related to divorce, child custody, and other family law matters.",
    },
    {
      name: "Business Disputes",
      description:
        "Representing businesses in disputes involving contracts, partnerships, or other corporate matters.",
    },
    {
      name: "Real Estate Law",
      description:
        "Assisting with issues related to property transactions, zoning, or landlord-tenant disputes.",
    },
    {
      name: "Immigration Law",
      description:
        "Providing legal guidance for individuals seeking to navigate immigration processes.",
    },
    {
      name: "Criminal Defense",
      description:
        "Defending individuals accused of criminal offenses, from misdemeanors to felonies.",
    },
    {
      name: "Civil Litigation",
      description:
        "Representing clients in lawsuits involving civil rights violations, defamation, or negligence.",
    },
    {
      name: "Class Actions",
      description:
        "Representing groups of people who have been harmed by the same issue or product.",
    },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Comprehensive List of Legal Case Types
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Our firm handles a wide range of legal cases, from accidents to estate
        planning. Below are some of the types of cases we specialize in:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseTypes.map((caseType, index) => (
          <div
            key={index}
            className="p-6 border border-yellow-500 bg-yellow-100 rounded-lg shadow-lg hover:bg-yellow-200 transition-all"
          >
            <h3 className="text-xl font-semibold text-yellow-800">
              {caseType.name}
            </h3>
            <p className="mt-2 text-gray-600">{caseType.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LegalCaseTypes;
