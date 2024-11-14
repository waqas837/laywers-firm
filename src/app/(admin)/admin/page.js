const AdminPanelHome = () => {
  // Sample data for demonstration
  const requestData = [
    {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      legalIssue: "Wrongful termination",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "555-5678",
      legalIssue: "Breach of contract",
    },
    {
      fullName: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-9012",
      legalIssue: "Personal injury",
    },
  ];

  return (
    <div className="flex-grow p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Pending Case Requests</h1>
        <div className="space-y-4">
          {requestData.map((request, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-medium">{request.fullName}</h2>
                <p className="text-gray-500">
                  {request.email} | {request.phone}
                </p>
                <p className="text-gray-700">{request.legalIssue}</p>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                Review
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add pagination or load more functionality here */}
    </div>
  );
};

export default AdminPanelHome;
