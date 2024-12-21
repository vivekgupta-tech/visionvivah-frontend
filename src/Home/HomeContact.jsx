import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { useState } from "react";

const TransparentOverlayWithText = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Data saved successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          message: "",
        });
      });
  };

  return (
    <>
      <div className="w-[100%] h-[180vh] pt-14 -mb-4">
        <div
          className="relative bg-cover bg-center h-[100%]"
          style={{
            backgroundImage: "url('https://www.visionvivaah.com/argon/img/contactus.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>
          <h1 className="destination-titles font-extrabold text-center text-5xl text-white relative pt-24">
            Contact us
          </h1>
          <div className="flex">
            <p className="ml-[44.5%] w-36 border-4 relative border-red-600 mt-4"></p>
            <p className="border-4 ml-1 w-1 relative border-black mt-4"></p>
            <p className="border-4 w-1 ml-1 border-black mt-4"></p>
          </div>
          <div>
            <h2 className="relative text-white text-lg font-semibold text-center pt-4">
              We Look Forward To Hearing From You
            </h2>
          </div>

          <div className="flex mt-16 relative">
            {/* Form Section */}
            <div className="w-[50%] h-[120vh] relative ml-16">
              <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg">
                <div>
                  <label htmlFor="name" className="block text-white text-xl font-semibold">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="border-2 bg-transparent border-white rounded w-full p-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-xl font-semibold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="border-2 bg-transparent border-white rounded w-full p-2"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-white text-xl font-semibold">
                    Mobile:
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    required
                    className="border-2 bg-transparent border-white rounded w-full p-2"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-white text-xl font-semibold">
                    City:
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    className="border-2 bg-transparent border-white rounded w-full p-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-xl font-semibold">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows="4"
                    required
                    className="border-2 bg-transparent border-white rounded w-full p-2"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="text-white p-3 text-xl w-full rounded-3xl bg-red-600 hover:bg-blue-700 hover:border-4 border-sky-500"
                >
                  SEND NOW
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="w-[45%] h-[100vh] ml-20 relative text-white">
              <LuPhoneCall className="text-3xl mt-12 ml-64" />
              <p className="text-center mt-2 text-md">
                +91-8266000652
                <br />
                +91-8077320515
              </p>

              <TfiEmail className="text-3xl mt-24 ml-64" />
              <p className="text-center mt-2 text-md">lifeevents001@gmail.com</p>

              <PiMapPinAreaDuotone className="text-4xl mt-24 ml-64" />
              <p className="mt-2 text-sm text-center">
                Life Events,
                <br />
                220/4 Nehru Nagar, GarhRoad, Meerut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparentOverlayWithText;
