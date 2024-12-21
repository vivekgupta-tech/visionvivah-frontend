import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminService = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    image: "",
    "wedding-type": "",
    text: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteId, setDeleteId] = useState(null); // Track which service to confirm deletion for

  // Fetch services
  useEffect(() => {
    axios
      .get("http://localhost:4001/services")
      .then((response) => setServices(response.data))
      .catch(() => setError("Error fetching services."));
  }, []);

  // Add new service
  const handleAddService = () => {
    if (!newService.image || !newService["wedding-type"] || !newService.text) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:4001/services", { ...newService })
      .then((response) => {
        setServices([...services, response.data]);
        setNewService({ image: "", "wedding-type": "", text: "" });
        setSuccess("Service added successfully!");
        setError("");
      })
      .catch(() => setError("Failed to add service."));
  };

  // Delete service
  const handleDeleteService = (id) => {
    axios
      .delete(`http://localhost:4001/services/${id}`)
      .then(() => {
        setServices(services.filter((service) => service.id !== id));
        setSuccess("Service deleted successfully!");
        setError("");
        setDeleteId(null); // Reset delete confirmation
      })
      .catch(() => setError("Failed to delete service."));
  };

  return (
    <div className="pt-48">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {/* Add Service Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Service</h2>
        <input
          type="text"
          placeholder="Image URL"
          value={newService.image}
          onChange={(e) =>
            setNewService({ ...newService, image: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Wedding Type"
          value={newService["wedding-type"]}
          onChange={(e) =>
            setNewService({ ...newService, "wedding-type": e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={newService.text}
          onChange={(e) =>
            setNewService({ ...newService, text: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        ></textarea>
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Services</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border p-4 flex flex-col items-center"
            >
              <img
                src={service.image}
                alt={service["wedding-type"]}
                className="w-24 h-24 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{service["wedding-type"]}</h3>
              <p className="text-sm text-gray-500 mb-2">{service.text}</p>

              {/* If deleteId matches this service's ID, show confirmation */}
              {deleteId === service.id ? (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteId(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteId(service.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminService;
